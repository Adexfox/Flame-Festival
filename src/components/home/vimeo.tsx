import React, { useState } from 'react'
import Loader from '../universal/loader'
import Vimeo from '@u-wave/react-vimeo'


type Props = {}

const FlameVideo = ({first, second}) => {
    const video = { 
        id: 744059299,
        width: '100%',
        height: '100%',
        color: '#017294',
        url: 'https://vimeo.com/manage/videos/744059299',
        style: {
            width: '100vw',
            height: '100vh',
            // This height and width resolution won't work because Vimeo API only allow pixels for this properties. The alternative used in this poject is the 'responsive' prop.
        },
     }
  return (
    <>
        
        <Loader />

        <Vimeo

            video={video.id}
            autoplay={true}
            showTitle={false}
            showPortrait={false}
            color={video.color}
            showByline={false}
            controls={false}
            loop={true}
            style={video.style}
            responsive = {true} 
            onPlaying={() => {

                // console.log('The video is playing')
                second(!first)
                }
            }
        />
    </>
  )
}

export default FlameVideo;