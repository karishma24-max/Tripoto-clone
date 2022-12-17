import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import "./Carousel.css"
const Carousal=()=>{
    let data=['https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1666081573_flipbook.jpg',
    'https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704984_shop.jpg',
    'https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643966989_sg_web_series_button.jpg',
    'https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704774_events.jpg' ,
    'https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643705006_whats_new_in_sg.jpg' ,
    'https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643967015_sg_for_foodies.jpg',
    'https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704928_singapore_street_art.jpg',
    'https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643705019_videos.jpg',
    'https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704729_articles.jpg']
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }
    return (
        <div className='carousel'>
         <Carousel responsive={responsive}>
            {data.map((e,i)=>{return(
                <img key={i} src={e} alt='e'/>
            )})}
  </Carousel>
        </div>
    )
};

 
export default Carousal