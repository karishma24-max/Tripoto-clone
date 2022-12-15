import React from "react";
import BreadCrum from "./Breadcrum";
import Carousal from "./Carousel";
import "./Singapore.css";
import Topvideo from "./Topvideo";
const Singapore = () => {
  let sixpicdata = [
    "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178326_1.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178357_2.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178374_3.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178396_4.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178422_5.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178447_6.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178473_7.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643281749_card_8.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643281767_card_9.jpg",
  ];
  return (
    <div>
      <Topvideo />
      <div id="DivbelowVid">
        <div className="Bread">
          <BreadCrum />
        </div>
        <h1 className="title">Reimagine Singapore With Tripoto</h1>
        <Carousal />
        <h1 className="Art_title">
          Shop, Book and Bring Home A Part of Singapore
        </h1>
        <p className="article_body">
          Everything that comes with the Singapore tag is made with passion. New
          collaborations with Airbnb and Krisshop in India are testament to
          that. Bring the luxurious Singapore shopping experience at home by
          browsing through clothing, food and home decor products. Click on what
          you like and start shopping!
        </p>
        <div className="threecard">
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284911_container_3_4.jpg"
              alt="kriss"
            />
            <h4>
              Wines, Self Care, Gifts And More: Shop Singapore-Special Products
              On Krisshop
            </h4>
          </div>
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284952_container_3_2.jpg"
              alt="bnb"
            />
            <h4>Airbnb’s Online Experiences: Made With Passion</h4>
          </div>
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284809_container_3_1.jpg"
              alt="lbb"
            />
            <h4>Explore The Fabnest And Baju By Oniatta Fashion Line On LBB</h4>
          </div>
        </div>
        <h1 className="Art_title">Explore the Brand New Singapore Flipbook!</h1>
        <p className="article_body">
          Journey into the best of Singapore with our cool new digital guide,
          the Singapore Flipbook. Turn up the audio to know about Singapore’s
          wonders, gaze at the colourful illustrations or send it to a friend —
          you’ll have everything you need to plan the perfect trip to the Lion
          City!
        </p>
        <img
          id="centerbanner"
          src="https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1663838728_flipbook_banner_3.jpg"
          alt="banner"
        />

        <h1 className="Art_title">Festivals You Can't Miss in Singapore</h1>
        <p className="article_body">
          Whether it’s the festive celebration of Chinese New Year or the roar
          of Formula 1 cars, there’s always a party going on somewhere on the
          island. These are some of the top annual festivals and events in
          Singapore from January to December that should be on your travel
          calendar.
        </p>
        <div id="sixpic">
          {sixpicdata.map((e, i) => {
            return (
              <div>
                <img key={i} src={e} alt={e} />
              </div>
            );
          })}
        </div>
        <h1 className="Art_title">
          Blink & Miss: Upcoming Events You Should Book Now!
        </h1>
        <p className="article_body">
          Catch some of the most action-packed events all at your favourite
          island city! Check out upcoming events here.
        </p>

        <div className="fourcard">
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1665477284_screenshot_2022_10_11_at_2_03_12_pm.jpg"
              alt="kriss"
            />
            <h4>World Gourmet Summit</h4>
            <p>APRIL – DECEMBER 2022</p>
          </div>
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1665477325_screenshot_2022_10_11_at_2_03_32_pm.jpg"
              alt="bnb"
            />
            <h4>Christmas On A Great Street</h4>
            <p>13 NOV 2022 - 2ND JAN 2023</p>
          </div>
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1665477473_screenshot_2022_10_11_at_1_57_06_pm.jpg"
              alt="lbb"
            />
            <h4>Christmas Wonderland</h4>
            <p>3RD DECEMBER 2022 – 2ND JANUARY 2023</p>
          </div>
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1665477399_screenshot_2022_10_11_at_2_00_43_pm.jpg"
              alt="lbb"
            />
            <h4>Marina Bay Singapore Countdown 2022</h4>
            <p>31ST DECEMBER 2022</p>
          </div>
        </div>
        <img
          className="dividerbtn"
          src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1612791126_web_cta.jpg"
          alt="divider"
        />
        <img
          id="centerbanner"
          src="https://cdn1.tripoto.com/media/filter/nxxl/img/1745358/Image/1666010153_banner_for_new_video_page_aa.jpg"
          alt="banner"
        />

        <div className="threecard">
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1666010201_new_container_video_page_1aa.jpg"
              alt="kriss"
            />
          </div>
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1666010263_new_container_video_page_1cc.jpg"
              alt="bnb"
            />
          </div>
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1666010272_new_container_video_page_1bb.jpg"
              alt="lbb"
            />
          </div>
        </div>
        <img id="centerbanner" src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1666081779_watch_more.jpg" alt="banner"/>
        <h1 className="Art_title">
        What’s New and Marvellous in Singapore
        </h1>
        <p className="article_body">
        Singapore is so much more than its skyscrapers. Explore Singapore’s most marvellous attractions that will add delight to your travel experience.
        </p>
        <div className="fourcard">
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643355460_container_13_1.jpg"
              alt="kriss"
            />
            <h4>Visit The Delightful Museum Of Ice Cream</h4>
          </div>
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643355480_container_13_2.jpg"
              alt="bnb"
            />
            <h4>Witness Exotic Flora And Fauna At The Newest Kingfisher Wetlands In Gardens By The Bay</h4>
            
          </div>
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643355491_container_13_3.jpg"
              alt="lbb"
            />
            <h4>Raise A Toast At The World’s Highest Microbrewery In Singapore</h4>
            
          </div>
          <div>
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643355491_container_13_3.jpg"
              alt="lbb"
            />
            <h4>Enjoy A Delectable Lunch At Hortus, Enveloped In The Flower Dome, Gardens By The Bay</h4>
            
          </div>
        </div>
        <img className="dividerbtn" src="https://cdn1.tripoto.com/media/filter/nxxl/img/1756031/Image/1594386899_eplore_more.jpg" alt="banner"/>
        <img
          id="centerbanner"
          src="https://cdn1.tripoto.com/media/filter/nxxl/img/1745358/Image/1666010484_ris_banner_web_copy.jpg"
          alt="banner"
        />
      </div>
    </div>
  );
};
export default Singapore;
