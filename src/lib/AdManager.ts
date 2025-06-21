import { rewardVideo } from "./Admob";
import { invokeVideoAd } from "./Applixir";
import { OriginChecker } from "./OriginChecker"

export class AdManager {
    static async showVideoAd() {
        if (OriginChecker.isCrazyGames()) {
            window.CrazyGames.SDK.ad.requestAd("midgame");
        } else if (false) { // TODO: Implement AdMob
            rewardVideo("ca-app-pub-", (rewardItem) => {
                console.log("Rewarded video ad completed", rewardItem);
            });
        } else {
            invokeVideoAd({});
        }
    }
}