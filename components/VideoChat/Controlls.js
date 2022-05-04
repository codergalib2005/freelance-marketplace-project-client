import React, { useState } from 'react';
import { useClient } from '../../hooks/VideoChat';
import { BsFillCameraVideoFill, BsCameraVideoOffFill, } from 'react-icons/bs';
import { IoExitSharp, IoMdMicOff } from 'react-icons/io';
import { FaMicrophoneAlt } from 'react-icons/fa';
const Controlls = (props) => {
    const client = useClient();
    const { tracks, setStart, setInCall } = props
    const [trackState, setTrackState] = useState({ video: true, audio: true });

    const mute = async (type) => {
        if (type === "audio") {
            await tracks[0].setEnabled(!trackState.audio);
            setTrackState((ps) => {
                return { ...ps, audio: !ps.audio };
            })
        } else if (type === "video") {
            await tracks[1].setEnabled(!trackState.video);
            setTrackState(ps => {
                return { ...ps, video: !ps.video };
            })
        }
    }
    const leaveChannel = async () => {
        await client.leave();
        client.removeAllListeners();
        tracks[0].close();
        tracks[1].close();
        setStart(false);
        setInCall(false);
    }
    return (
        <div>
            <div className="flex items-center justify-center flex-col">
                <button className={`w-28 h-28 flex items-center justify-center rounded-full text-lg`}
                    onClick={() => leaveChannel()}>
                    <IoExitSharp />
                </button>
                <button className={`
                w-28 h-28 flex items-center justify-center rounded-full text-lg ${trackState.audio ? "bg-[#2f9ece]" : "bg-[#ec4899]"}`}
                    onClick={() => mute("audio")}
                >
                    {trackState.audio ? <FaMicrophoneAlt /> : <IoMdMicOff />}
                </button>

                <button className={`w-28 h-28 flex items-center justify-center rounded-full text-lg ${trackState.video ? "bg-[#2f9ece]" : "bg-[#ec4899]"}`}
                    onClick={() => mute("video")}
                >
                    {trackState.video ? <BsFillCameraVideoFill /> : <BsCameraVideoOffFill />}
                </button>
            </div>
        </div>
    );
};

export default Controlls;