import React, { useRef } from 'react'

import './VideoPlayer.css'
// import phone_icon from '../../assets/phone-icon.png'


import video from '../../assets/college-video.mp4'


const VideoPlayer = ({playState, setPlayState}) => {

    const player =useRef(null);
    const closePlayer =(e)=>{
        if(e.target===player.current){
            setPlayState(false);
        }
        
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`}  ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls />

{/* <img src={phone_icon}/> */}
    </div>
  )
}

export default VideoPlayer