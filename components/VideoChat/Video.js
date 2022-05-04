import React, { useState, useEffect } from 'react';
import { AgoraVideoPlayer } from 'agora-rtc-react';
import { Grid } from '@material-ui/core';
const Video = (props) => {
    const { users, tracks } = props;
    const [gridSpacing, setGridSpacing] = useState(12);
    useEffect(() => {
        setGridSpacing(Math.max(Math.floor(12 / (users.length + 1))), 4)
    }, [users, tracks]);
    return (
        <div>
            <Grid container style={{ height: '100%' }}>
                <Grid item xs={gridSpacing} >
                    <AgoraVideoPlayer videoTrack={tracks[1]} style={{ height: "100%", width: "100%" }} />
                </Grid>
                {users.length > 0 && user.map(user => {
                    if (user.videoTrack) {
                        return (<Grid item xs={gridSpacing} >
                            <AgoraVideoPlayer
                                videoTrack={user.videoTrack}
                                key={user.uid}
                                style={{ height: "100%", width: "100%" }} />
                        </Grid>
                        )
                    } else {
                        return null
                    }
                })}
            </Grid>
        </div>
    );
};

export default Video;