import React from "react";
import "./Mountain.css"
import Breadcrum from "./Breadcrum.jsx"
import Productcarousel from "./Productcarousel";
const Mountain=()=>{
    let nine = [
        {
          image:"https://img.youtube.com/vi/K7IYGNxwzQA/sddefault.jpg",
          title: "Your Ultimate Guide To Explore Sikkim",
        },
        {
          image:"https://img.youtube.com/vi/mGSXsie7ag4/sddefault.jpg",
          title: "All You Need To Know About Meghalaya",
        },
        {
          image:"https://img.youtube.com/vi/D_bgCyM1nRY/sddefault.jpg",
          title: "The Ultimate Kashmir Tour Guide",
        },
        {
          image:"https://img.youtube.com/vi/C23SZ8FDzGw/sddefault.jpg",
          title: "Plan Your Perfect Trip To Manali",
        },
        {
          image: "https://img.youtube.com/vi/C23SZ8FDzGw/sddefault.jpg",
          title: "All You Need To Know About Rishikesh",
        },
        {
          image: "https://img.youtube.com/vi/ch-qA5gqyHE/sddefault.jpg",
          title: "A Complete Travel Guide To Explore Spiti",
        },
        {
          image:"https://img.youtube.com/vi/bpFT-ehWAZY/sddefault.jpg",
          title: "Your Travel Guide To Explore Nainital",
        },
        {
          image:"https://img.youtube.com/vi/ZEN4m97nRlI/sddefault.jpg",
          title: "Plan A Perfect Trip To Lahaul",
        },
        {
          image:"https://img.youtube.com/vi/GJ9wUxjxUsw/sddefault.jpg",
          title: "Explore Arunachal Pradesh With Tripoto",
        }
      ];
    let twelvetwo=[
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1633007980_83167901.jpeg",
            title:"Taj Corbett Resort & Spa, Uttarakhand",
            category:"LUXURY"
        },
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1633008034_1617749049_images_18.jpeg",
            title:"10 Hostels In Himachal Under 900 INR",
            category:"BUDGET STAYS"
        },
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1633008065_1629978254_278166101.jpg",
            title:"10 Hill Resorts Delhi NCR For A Weekend Getaway",
            category:"ROMANTIC"
        },
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1633008177_1566903140_img_20190820_wa0028.jpg",
            title:"A Gorgeous Forest Villa Near Dehradun",
            category:"AFFORDABLE"
        },
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1633008221_1612609536_tdh.jpg",
            title:"A Charming Homestay In Nathuakhan",
            category:"WORKATION"
        },
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1633008300_1630041870_leh_20201112105201.jpg",
            title:"Properties In Ladakh Under Rs 2500",
            category:"BUDGET STAYS"
        },
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1633008370_1628744272_dscf4283.jpeg",
            title:"A Gorgeous Retreat In Nubra Valley, Ladakh",
            category:"LUXURY"
        },
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1633008568_untitled_collage_3_1583922952.jpeg",
            title:"A Geodesic Dome Stay Near Manali",
            category:"ROMANTIC"
        },
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669203747_1632455357_img_20210824_064013.jpg",
            title:"Unwind At The Luxurious Coorg Wilderness Resort",
            category:"LUXURY STAYS"
        },
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669203801_1650786611_munnar_4769654_960_720.jpg",
            title:"20 Dreamy Stays In Munnar You Simply Cannot Miss!",
            category:"BEST HOTELS"
        },
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669203841_1634717508_3rd_image.jpg",
            title:"Best Hotels In Gangtok, Sikkim Under 2000 INR",
            category:"BUDGET STAYS"
        },
        {
            image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669203894_1661345311_fardin_sk_0xg9u9recxm_unsplash.jpg",
            title:"Best Hotels In Darjeeling For You Next Trip",
            category:"BUDGET STAYS"
        }
    ]
    let eight = [
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669206193_1510831708_kaidi_guo_236880.jpg",
          title: "All You Need To Know About Swargarohini Trek",
        },
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669206281_1661878906_img_0123.jpg",
          title: "Everything You Need To Know About Goecha La Trek, Sikkim",
        },
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669206448_1471958348_1471523698_bhrigu.jpg",
          title: "10 Beautiful But Easy Treks For Fit Beginners",
        },
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669219424_1482302864_brahmatal_trek_top_copy.jpg",
          title: "12 Best Treks In India For 12 Months",
        },
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669219488_1462532987_1437521540_1437521384440_4_3.jpg",
          title: "8 Stunning Trek Trails In Maharashtra",
        },
        {
          image:
            "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669219620_1511952886_15030410521.jpg",
          title: "7 Amazing Treks Near Bangalore",
        },
        {
          image:
            "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669219695_1523889748_5151584034_d2e2c725de_o.jpg",
          title: "4 Stunning Trek Trails In West Bengal",
        },
        {
          image:
            "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669219862_1518852066_1518852056_stok1.jpg",
          title: "Plan For Stok Kangri Trek In Ladakh",
        },
      ];
      let eighttwo = [
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1633008743_1628433428_photo_1580818135730_ebd11086660b.jpeg",
          title: "15 Hill Stations That Are Not In The Himalayas",
        },
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1633008765_1594711959_10409774_747729288606002_3490240831060144822_n.jpg",
          title: "Trek To Matheran, Maharashtra & Experience The Bliss",
        },
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1633009079_1499534754_33720649922_b1d4b4f5b2_o.jpg",
          title: "Ooty: A Gorgeous Hamlet In The Western Ghats",
        },
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669204525_1632997877_wwt2aaqcuwni8refo8fgdp6nve42_1577186592_shutterstock_1125140246.jpg",
          title: "Explore These Unexplored Places In Spiti Valley",
        },
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669204581_1637162579_img_0016.jpg",
          title: "Take A Trip To Lahaul In Himachal Pradesh",
        },
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669206007_1650444893_lrm_export_6213641292680_20181127_212627265.jpeg",
          title: "Plan An Epic 7-Day Road Trip Across North Sikkim",
        },
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669206055_1650615418_tripoto_covers_1.png",
          title: "7 Days, 1000+ KM: The Ultimate Roadtrip In Spiti",
        },
        {
          image:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669206141_1653560832_anoof_junaid_j16ep2lfhwy_unsplash.jpg",
          title: "Bungee Jumping Over Zanskar River, Ladakh",
        }
      ];
    return (
        <div>
            <img
        src="https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1669205891_anisha_tulika_1afrwu_recy_unsplash.jpg"
        alt="header"
      />
      <div id="divafterheader">
        <Breadcrum/>
        <h1 className="title">Explore the Best Hill Stations in India with Tripoto</h1>
        <p id="pbelowtitle">
        Want to feel the chills while exploring the mountain terrains in India? 
        From the breathtaking cold deserts of Ladakh and the picturesque meadows of Kashmir, from the mystical valleys of 
        Himachal to the postcard-perfect villages of Sikkim - we've curated the best travel plans for you!
        </p>
        <h1 style={{ margin: "1rem 0" }} className="Art_title">
        Book Tripoto's Mindful Retreats
        </h1>
        <Productcarousel/>
        <h1 style={{ margin: "1rem 0" }} className="Art_title">
        Tripoto's Ultimate Hill Station Guides | Best Destinations in India
        </h1>
        <div className="ninedata">
          {nine.map((e, i) => {
            return (
              <div key={i}>
                <img src={e.image} alt={e.image} />
                <h4>{e.title}</h4>
              </div>
            );
          })}
        </div>
        <h1 style={{ margin: "4rem 0 0.5rem 0" }} className="Art_title">
        Properties in the Hill Towns of India
        </h1>
        <p className="article_body">
          Catch some of the most action-packed events all at your favourite
          island city! Check out upcoming events here.
        </p>
        <div className="twelvecard">
            {twelvetwo.map((e,i)=>{return (
          <div key={i+"12"}>
            <img
              src={e.image}
              alt={e.title}
            />
            <p>{e.category}</p>
            <h4>{e.title}</h4>
          </div>
            )})}
          </div>
          <h1 style={{ marginTop: "4rem" }} className="Art_title">
          Unique Travel Experiences at these Gorgeous Hill Stations in India
        </h1>
        <div className="eightdata">
          {eighttwo.map((e, i) => {
            return (
              <div key={i}>
                <img src={e.image} alt={e.image} />
                <h4>{e.title}</h4>
              </div>
            );
          })}
        </div>
        <h1 style={{ marginTop: "4rem" }} className="Art_title">
        Go For These Epic Treks in India
        </h1>
        <div className="eightdata">
          {eight.map((e, i) => {
            return (
              <div key={i}>
                <img src={e.image} alt={e.image} />
                <h4>{e.title}</h4>
              </div>
            );
          })}
        </div>









      </div>
        </div>
    )
}
export default Mountain