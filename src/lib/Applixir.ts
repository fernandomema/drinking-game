import { getUserId } from "$lib/UserInfo";

export const invokeVideoAd = ({sysCloseCallback}: {
    sysCloseCallback?: () => void,
}) => {
    if (!canWeShowVideo()) return console.log("Video ad on cooldown");
    const options = {
        zoneId: 2050,
        userId: getUserId(),
        accountId: 3857,
        siteId: 9118,
        adStatusCb: (status: string) => {
            if (status === "sys-closing" && sysCloseCallback) {
                sysCloseCallback();
            }
        }
    };
    window.invokeApplixirVideoUnit(options);
    localStorage.setItem("lastVideoTimeAppilixir", Date.now().toString());
}

export const getLastVideoTime = () => {
    const time = new Date(parseInt(localStorage.getItem("lastVideoTimeAppilixir") || "0"));
    if (time.getTime() === 0) {
        time.setDate(time.getDate() - 1);
    }
    return time;
}

export const canWeShowVideo = () => {
    // If last video was more than 1 minute 30 seconds ago, we can show another video
    return Date.now() - getLastVideoTime().getTime() > 90 * 1000;
}
