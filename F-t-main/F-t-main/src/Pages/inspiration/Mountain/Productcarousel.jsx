import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import "./Breadcrum.css";
const Productcarousel = () => {
  let data = [
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1662966110_image_cover_2.jpg",
      title: "Unwind with a Karaoke Session & an Open-Air Movie at This Village-Themed Retreat | a Kasauli Ggaon",
      location: "Himachal Pradesh",
      Dur: "3D - 2N",
      price: "₹ 8,500 ",
      priceP: "/ person",
      Pimage:"https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg",
      Pname: "Tripoto's Mindful Retreats",
    },
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg",
      title: "Adventure Walk to Lambi Dehar Mines And Stay In a Cozy Cottage | Seegreen Lodges, Mussoorie",
      location: "Mussoorie",
      Dur: "3D - 2N",
      price: "₹ 8,999 ",
      priceP: "/ person",
      Pimage:"https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg",
      Pname: "Tripoto's Mindful Retreats",
    },
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654504108_ce_c1.jpg",
      title: "Trek to Triund & Stay at a Maharaja’s Home, Clouds End Villa, Dharamshala",
      location: "Dharamshala",
      Dur: "4D - 3N",
      price: "₹ 13,700",
      priceP: " / person",
      Pimage:"https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg",
      Pname: "Tripoto's Mindful Retreats",
    },
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645772836_image_cover.jpg",
      title: "Stargaze & Enjoy a Picnic in the Hills as You Stay at a Unique A-Framed Cottage | Urna Boutique Stay",
      location: "Mukteshwar",
      Dur: "3D - 2N",
      price: "₹ 8,600",
      priceP: " / person",
      Pimage:"https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg",
      Pname: "Tripoto's Mindful Retreats",
    },
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657204838_omya_img_cover_b.jpg",
      title: "Enjoy Paragliding At A Luxury Glamping Retreat | Omya Forest Camps, Bir",
      location: "Bir",
      Dur: "3D - 2N",
      price: "₹ 10,700",
      priceP: " / person",
      Pimage:"https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg",
      Pname: "Tripoto's Mindful Retreats",
    },
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1653391344_ln_c1.jpg",
      title: "Explore an Artist’s Estate & Stay in a Kathkuni Home Hidden in Manali's Forests | NORTH",
      location: "Manali",
      Dur: "3D - 2N",
      price: "₹ 9,800",
      priceP: " / person",
      Pimage:"https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg",
      Pname: "Tripoto's Mindful Retreats",
    },
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg",
      title: "Hike to Gallu Waterfall & Find the Joy of Doing Nothing | Cosmic Geeks, Dharamkot",
      location: "Himachal Pradesh",
      Dur: "3D - 2N",
      price: "₹ 7,000",
      priceP: " / person",
      Pimage:"https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg",
      Pname: "Tripoto's Mindful Retreats",
    },
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1670560307_image_cover_c_1.jpg",
      title: "Learn Surfing & Kayak on the Backwaters of Suvarna River at this Beach Paradise | Shaka Surf Club",
      location: "Karnataka",
      Dur: "3D - 2N",
      price: "₹ 11,600",
      priceP: " / person",
      Pimage:"https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg",
      Pname: "Tripoto's Mindful Retreats",
    }
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="carousel">
      <Carousel responsive={responsive}>
        {data.map((e, i) => {
          return (
            <div key={i} className="cardInd">
              <img src={e.image} alt="main" />
              <h2>{e.title}</h2>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex" }}>
                    <img src="data:image/svg+xml,%3csvg width='11px' height='15px' viewBox='0 0 11 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cg transform='translate(-36.000000%2c -35.000000)' fill='%23359391'%3e %3cpath d='M46.1538462%2c43.5714286 L41.5%2c50 L36.8461538%2c43.5714286 L36.8670256%2c43.5714286 C36.3173077%2c42.7142857 36%2c41.6851429 36%2c40.5714286 C36%2c37.4854286 38.4535641%2c35 41.5%2c35 C44.5464359%2c35 47%2c37.4854286 47%2c40.5714286 C47%2c41.6851429 46.6826923%2c42.7142857 46.1329744%2c43.5714286 L46.1538462%2c43.5714286 Z M41.4294872%2c39 C40.6150641%2c39 39.9487179%2c39.675 39.9487179%2c40.5 C39.9487179%2c41.325 40.6150641%2c42 41.4294872%2c42 C42.2439103%2c42 42.9102564%2c41.325 42.9102564%2c40.5 C42.9102564%2c39.675 42.2439103%2c39 41.4294872%2c39 L41.4294872%2c39 Z' id='Location-white'%3e%3c/path%3e %3c/g%3e %3c/svg%3e" alt="logo"/>
                    <h4>{e.location}</h4>
                  </div>
                  <button className="duration">{e.Dur}</button>
                </div>
              
              <div>
                <div style={{ display: "flex", justifyContent: "space-between",margin:"0.5rem 0 0 0" }}>
                  <div style={{ display: "flex"}}>
                    <h3 className="price">{e.price}</h3>
                    <p className="priceP" >{e.priceP}</p>
                  </div>
                  <button className="quote">Get Quotes</button>
                </div>
              </div>
              <div className="partner" >
                <img src={e.Pimage} alt="logo" />
                <p>{e.Pname}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Productcarousel;
