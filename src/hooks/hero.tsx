import React, { useEffect, useState } from 'react'

interface Data {
  id: number;
  url: string;
  title: string;
}
interface Data_ extends Array<Data>{}

const url = 'http://localhost:8000/images';

const Hero = () => {
  const [media, setMedia] = useState<any>([]);

  const getMedia = async () => {

    const response = await fetch(url);
    const data = await response.json();
    setMedia(data);

  }
  useEffect(() => {
    getMedia();
  }, []);

  return (
    <>
        {/* {media && <img src={media[1].url} alt="" />} */}
        {url && media.map( (props:Data) => {
          const {id, url, title} =  props;
          
          return(
            <div key={id}>
                <img src={url} alt={title} />
            </div>
          )
        })}
    </>
  )
}

export default Hero