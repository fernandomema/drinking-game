import { AdLoadInfo, AdMob, AdMobBannerSize, AdmobConsentStatus, AdMobRewardItem, AdOptions, BannerAdOptions, BannerAdPluginEvents, BannerAdPosition, BannerAdSize, InterstitialAdPluginEvents, RewardAdOptions, RewardAdPluginEvents } from '@capacitor-community/admob';

export async function initialize(): Promise<void> {
  await AdMob.initialize();

  const [trackingInfo, consentInfo] = await Promise.all([
    AdMob.trackingAuthorizationStatus(),
    AdMob.requestConsentInfo(),
  ]);

  if (trackingInfo.status === 'notDetermined') {
    /**
     * If you want to explain TrackingAuthorization before showing the iOS dialog,
     * you can show the modal here.
     * ex)
     * const modal = await this.modalCtrl.create({
     *   component: RequestTrackingPage,
     * });
     * await modal.present();
     * await modal.onDidDismiss();  // Wait for close modal
     **/

    await AdMob.requestTrackingAuthorization();
  }

  const authorizationStatus = await AdMob.trackingAuthorizationStatus();
  if (
    authorizationStatus.status === 'authorized' &&
    consentInfo.isConsentFormAvailable &&
    consentInfo.status === AdmobConsentStatus.REQUIRED
  ) {
    await AdMob.showConsentForm();
  }
}

export const showConsent = async () => { 
    const consentInfo = await AdMob.requestConsentInfo();
  
    if (consentInfo.isConsentFormAvailable && consentInfo.status === AdmobConsentStatus.REQUIRED) {
      const {status} = await AdMob.showConsentForm();
    }
}

export async function interstitial(): Promise<void> {
    AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      // Subscribe prepared interstitial
    });
  
    const options: AdOptions = {
      adId: 'YOUR ADID',
      isTesting: true
      // npa: true
    };
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
}
  
export async function rewardVideo(adId: string, callback: (rewardItem: AdMobRewardItem) => void): Promise<void> {
    AdMob.addListener(RewardAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      // Subscribe prepared rewardVideo
    });
  
    AdMob.addListener(
      RewardAdPluginEvents.Rewarded,
      (rewardItem: AdMobRewardItem) => {
        // Subscribe user rewarded
        console.log(rewardItem);
      },
    );
  
    const options: RewardAdOptions = {
      adId: 'YOUR ADID',
      isTesting: true
      // npa: true
      // ssv: {
      //   userId: "A user ID to send to your SSV"
      //   customData: JSON.stringify({ ...MyCustomData })
      //}
    };
    await AdMob.prepareRewardVideoAd(options);
    const rewardItem = await AdMob.showRewardVideoAd();
}