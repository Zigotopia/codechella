import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import bannerimg from "../../assets/Banner.png";
import "./home.scss";
import EventDescription from "../../components/events";
import banner2 from "../../assets/banner2.png";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      
      <Banner>
        <img className="banner__img" src={bannerimg} alt="" />
      </Banner>
      <EventDescription/>
      <Banner>
        <img className="banner__img2" src={banner2} alt="banner 2 do eveento" />
      </Banner>
     
    </>
  );
}
