import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import "./Carousel.css";
const Carousal = () => {
  let data = [
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1567494998_andaman_app.jpg",
      title: "Andaman Packages",
      location: "Andaman",
      Dur: "5D - 4N",
      price: "₹ 18,000 ",
      priceP: " onwards",
      Pimage:"https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg",
      Pname: "Tripoto Verified Partners",
    },
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/270755/Image/1560495127_honeymoon.jpg",
      title: "Honeymoon on Beaches and Desert.",
      location: "Mauritius",
      Dur: "9D - 8N",
      price: "₹ 88,999 ",
      priceP: "/ person",
      Pimage:"https://cdn1.tripoto.com/media/filter/mss/img/1586489/UserPhoto/1559222611_logo.jpg",
      Pname: "IFly Vacations Pvt Ltd"
    },
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/1791424/Image/1587377760_3_20.jpg",
      title: "Exotic Maldives",
      location: "Maldives",
      Dur: "4D - 3N",
      price: "₹ 22,000",
      priceP: " / person",
      Pimage: "https://cdn1.tripoto.com/media/filter/mss/img/1334305/UserPhoto/1557748206_untitled.png",
      Pname: "Explore More Holidays",
    },
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/1442601/Image/1587368453_14_new.jpg",
      title: "4 Days Holiday in Maldives",
      location: "Maldives",
      Dur: "4D - 3N",
      price: "₹ 48,000",
      priceP: " / person",
      Pimage:"https://cdn1.tripoto.com/media/filter/mss/img/1545356/UserPhoto/1556986378_sfm_logo.jpg",
      Pname: "SFM Travels",
    },
    {
      image:"https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1558434275_mauritius.jpg",
      title: "Magical Mauritius",
      location: "Mauritius",
      Dur: "7D - 6N",
      price: "₹ 25,000",
      priceP: "/ person",
      Pimage:
        "https://cdn1.tripoto.com/media/filter/mss/img/1467829/UserPhoto/1568839915_tui_logo.jpg",
      Pname: "TUI India",
    }
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

export default Carousal;
