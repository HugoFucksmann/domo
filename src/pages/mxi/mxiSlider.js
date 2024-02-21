import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { isMobile } from "../../styles/isMobile";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const MxiSlider = () => {
  return (
    <Swiper
      navigation={isMobile() ? false : true}
      spaceBetween={46}
      pagination={{
        dynamicBullets: true,
      }}
      loop={true}
      modules={[Pagination, Navigation]}
      //	className='mySwiper'
      style={{
        paddingRight: 42,
        paddingLeft: 42,
      }}
    >
      {links.map((link) => (
        <SwiperSlide
          allowTouchMove
          style={{
            background: "transparent",
          }}
        >
          <div
            style={{
              width: "100%",
              margin: "-20px",
              padding: 20,
              marginBottom: 14,
            }}
          >
            <iframe
              title="masculinidades"
              id="player"
              type="text/html"
              width="100%"
              height={isMobile() ? "320px" : 460}
              src={link}
              frameborder="0"
              disableInteraction
              style={{
                borderRadius: 10,
              }}
            ></iframe>

            <MediaIcons link={link} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const MediaIcons = ({ link }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <TwitterShareButton url={link}>
        <TwitterIcon size={40} round={true} style={{ marginLeft: 15 }} />
      </TwitterShareButton>
      <FacebookShareButton url={link} style={{ marginLeft: 15 }}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton url={link} style={{ marginLeft: 15 }}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </div>
  );
};

const links = [
  "https://www.youtube.com/embed/FFr_YECyHV8",
  "https://www.youtube.com/embed/gw8XCfHe3d4",
  "https://www.youtube.com/embed/BCRrCyvE1yY",
];

export default MxiSlider;
