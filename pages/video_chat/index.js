import React, { useState } from 'react';
import VideoCall from '../../components/VideoChat/VideoCall';
const VideoChatPage = () => {
    const [inCall, setInCall] = useState(false);

    return (
        <div>
            <div className='bg-gray-200' onClick={() => setInCall(true)}></div>
            {
                inCall ? <VideoCall setInCall={setInCall} /> : "Waiting to join call!"
            }
        </div>
    );
};

export default VideoChatPage;