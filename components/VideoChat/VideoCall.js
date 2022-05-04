import React, { useState, useEffect } from 'react';
import { config, useClient, useMicrophoneAndCameraTracks, channelName } from '../../hooks/VideoChat'
import Controlls from './Controlls';
import Video from './Video';
const VideoCall = (props) => {
    const { setInCall } = props;
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
    const client = useClient();
    const { ready, tracks } = useMicrophoneAndCameraTracks();
    useEffect(() => {
        let init = async (name) => {
            client.on("user-published", async (user, mediaType) => {
                await client.subscribe(user, mediaType);
                if (mediaType === "video") {
                    setUsers((prevUsers) => {
                        return [...prevUsers, user]
                    })
                }
                if (mediaType === "audio") {
                    user.audioTrack.play();
                }
            })
            client.on("user-unpublished", (user, mediaType) => {
                if (mediaType === "audio") {
                    if (user.audioTrack) user.audioTrack.stop();
                }
                if (mediaType === "video") {
                    setUsers((prevUsers) => {
                        return prevUsers.filter((User) => User.uid !== user.uid);
                    });
                }
            })
            client.on("user-left", (user) => {
                setUsers(prevUsers => {
                    return prevUsers.filter(User => User.uid !== user.uid);
                })
            })
            try {
                await client.join(config.appId, name, config.token, null)
            } catch (error) {
                console.log(error);
            }
            if (tracks) await client.publish([tracks[0], tracks[1]]);
            setStart(true);
        };

        if (ready && tracks) {
            try {
                init(channelName);
            } catch (err) {
                console.log(err);
            }
        }
    }, [channelName, client, ready, tracks]);
    return (
        <div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-4 gap-5">
                    <div className='col-span-1'>
                        {
                            ready && tracks && (
                                <Controlls tracks={tracks} setStart={start} setInCall={setInCall} />
                            )
                        }
                    </div>
                    <div className='col-span-3'>
                        {
                            start && tracks && (
                                <Video tracks={tracks} users={users} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCall;