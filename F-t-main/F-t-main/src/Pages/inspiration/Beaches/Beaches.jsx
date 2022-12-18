import React from "react";
import BreadCrum from "./Breadcrum";
import "./Beaches.css";
import Showmore from "./Showmore";
import Carousal from "./Carousel";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent
} from "@chakra-ui/react";

const Beaches = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  let twelve = [
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1668086760_1485362713_scuba_diver_1049945_1280.jpg",
      title: "Everything You Need To Know About Scuba Diving In Goa",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1668086739_1613435696_1612340660_1612336729_img_6758_2.jpg",
      title: "10 Romantic Waterfront Restaurants In Goa",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1668086831_1486733036_dsc_0153.jpg",
      title: "Best Beaches In South Goa That You Must Visit",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1668086871_1619638453_14.jpg",
      title: "Most Instagrammable Places In North Goa",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1668086954_1654937169_pexels_godson_bright_962464.jpg",
      title: "Here's Your Ultimate Guide For Alleppey",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1668086992_1655045514_1648210595_1648200438_img_20220223_wa0005.jpg",
      title: "Your Complete Guide To Varkala Beach In Kerala",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669191215_1655565105_banner1.jpg",
      title: "Skip Goa And Head To This Serene Gokarna",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669191255_1656499140_raman_choudhary_owkgxzoylqs_unsplash.jpg",
      title: "Best Beaches To Explore In Gokarna",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669191343_1478606381_scuba_diver_1049945_1280.jpg",
      title: "10 Awesome Things To Do In Pondicherry",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669191444_1480684857_16972667357_2572dd55d5_b.jpg",
      title: "15 Things To Do In Andaman And Nicobar Islands",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669191501_1482399681_6715385947_ccc80c28f0_o_1.jpg",
      title: "A Romantic Getaway To Andaman & Nicobar Islands",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669191650_1510823976_1510823968_lalajibig1.jpg",
      title: "Long Island: A Secret Island In The Andamans!",
    },
  ];
  let eight = [
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669191716_1654761476_f4a3c9fa_f234_4217_85b5_653e81e2e6ac.jpeg",
      title: "25 Super Luxurious Beach Resorts In Goa",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669191757_1502867071_57743838.jpg",
      title: "13 Best Homestays, Resorts & Budget Hotels In Goa",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669191870_1658310824_photo_6619423_dji_287_jpg_5273348_0_2021121218252_photo_original_2.jpg",
      title: "20 Best Beach Resorts In Varkala, Kerala",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669192082_1515073623_64899736.jpg",
      title: "Unwind At Punnamada Backwater Resort, Kerala",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669192680_1656048388_gokarna_rudraksh.jpg",
      title: "10 Best Budget Friendly Hotels In Gokarna",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669194451_1610359422_visit_andaman_island_to_have_the_most_spectacular_honeymoon_trip.jpg",
      title: "21 Handpicked Hotels & Resorts In Andamans",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669194590_1664937245_318567976.jpg",
      title: "Here Are Alibagh's Best Beach Hotels",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669194778_1644399332_b539506c_d5d0_4d51_96bf_19d5c7742556.jpg",
      title: "10 Boutique Airbnbs In Pondicherry",
    },
  ];
  let eighttwo = [
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669195777_1529285265_dsc00334.jpg",
      title: "Exploring The Best Of Phuket In 48 Hours",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669195873_1591460264_img_20170408_145511_original.jpg",
      title: "Your Ultimate Travel Guide To Thailand",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669195912_1534166080_things_to_do_in_maldives.jpg",
      title: "14-Day Itinerary To Explore The Best Of Maldives",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669196400_1505662513_toa_heftiba_270794.jpg",
      title: "Handcrafted Seychelles Honeymoon Guide",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669196429_1509952135_ismail_niyax_192373.jpg",
      title: "Handcrafted Sri Lanka Honeymoon Guide",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669196539_1564928415_bondibeachsydney.jpg",
      title: "10 Beaches To Visit In And Around Sydney, Australia",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669196846_1583606632_img_20200222_wa0015.jpg",
      title: "Plan A Budget Friendly Yet Luxurious Trip To Maldives",
    },
    {
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669196961_nikos_zacharoulis_o2wggezvva4_unsplash.jpg",
      title: "Your Ultimate Bali Travel Guide",
    }
  ];
  return (
    <div>
      <img
        src="https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1669192913_nikos_zacharoulis_o2wggezvva4_unsplash.jpg"
        alt="header"
      />
      <div id="divafterheader">
        <div id="bread">
          <BreadCrum />
        </div>
        <h1 className="title">Best Beaches Around The World</h1>
        <p id="pbelowtitle">
          The crunch of white sand beneath your feet and the thundering ocean
          beckoning you into its cool waters. Explore all you need to know about
          taking a perfect trip to the beach!
        </p>
        <Showmore />
        <h1 style={{ margin: "1rem 0" }} className="title">
          Tripoto's Ultimate Beach Guides | Best Beaches in India
        </h1>
        <div className="threecard">
          <div>
            
              <img
                onClick={onOpen}
                src="https://img.youtube.com/vi/jU7ZyViNu2U/sddefault.jpg"
                alt="kriss"
              />
              <h4>Plan An Epic Trip To Goa</h4>
              <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent style={{ width: "70%" }}>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/jU7ZyViNu2U"
                    title="Plan An Epic Trip To Go"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </ModalContent>
              </Modal>
          
          </div>
          <div>
            
              <img
                onClick={onOpen}
                src="https://img.youtube.com/vi/q43hYTqNFXc/sddefault.jpg"
                alt="kriss"
              />
              <h4>Explore Andaman & Nicobar Islands</h4>
              <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/q43hYTqNFXc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </ModalContent>
              </Modal>
           
          </div>
          <div>
          
              <img
                onClick={onOpen}
                src="https://img.youtube.com/vi/jVomAVZcuxM/sddefault.jpg"
                alt="kriss"
              />
              <h4>Soak In The Sunshine At Gokarna</h4>
              <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/jVomAVZcuxM"
                    title="YouTube"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </ModalContent>
              </Modal>
            
          </div>
        </div>
        <h1 className="Art_title">Find The Best Beach Tour Packages</h1>
        <Carousal />
        <h1 className="Art_title">
          Plan Your Next Beach Vacay in India with Tripoto
        </h1>
        <div className="twelvedata">
          {twelve.map((e, i) => {
            return (
              <div key={i}>
                <img src={e.image} alt={e.image} />
                <h4>{e.title}</h4>
              </div>
            );
          })}
        </div>
        <h1 style={{ marginTop: "4rem" }} className="Art_title">
          Best Beachside Properties in India
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
        <h1 style={{ marginTop: "4rem" }} className="Art_title">
        Plan Your Next International Beach Vacay with Tripoto
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

      </div>
    </div>
  );
};
export default Beaches;
