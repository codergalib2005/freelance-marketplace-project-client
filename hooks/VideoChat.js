import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appId = "784d9fbcd01a4c949a8c65566503fcd9"
const token = "006784d9fbcd01a4c949a8c65566503fcd9IACkk8KCNbh+z8jDOnsOz1HkXT7JsrcKDk76MD04ogLnfWTNKL8AAAAAEADchOPNRWBoYgEAAQBDYGhi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);

export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export const channelName = "main";
