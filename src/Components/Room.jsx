import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const appID = Number(import.meta.env.VITE_APPID);
const serverSecret = import.meta.env.VITE_SERVER_SECRET;


const Room = () => {
    console.log(typeof(appID))
    const {roomId} = useParams();
    const navigate = useNavigate();

    const meeting = async (element) => {
        // const appID = 794141203;
        // const serverSecret = 'd9aa934bba1315a62c028768bf6c4893';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), " ");

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Personal link',
                url:
                 window.location.protocol + '//' + 
                 window.location.host + window.location.pathname +
                  '?roomId=' +
                  roomId,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, 
            },
            onLeaveRoom: (() => {
                navigate(`/`);
            })
        });
    }

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='lg:block inline-block'>
            <div ref={meeting}/>
        </div>
      
    </div>
  )
}

export default Room
