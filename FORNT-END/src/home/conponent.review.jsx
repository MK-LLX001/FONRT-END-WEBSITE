import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import './conponentreview.scss';
// importImage ********
import img from "../imgs/Kuangsi-Waterfalls/ks1.jpg";
import img2 from "../imgs/Kuangsi-Waterfalls/ks5.jpg";
import img3 from "../imgs/Kuangsi-Waterfalls/ks6.jpg";
import img4 from "../imgs/Kuangsi-Waterfalls//ks3.jpg";
//  ส้่งตวแปลมาเกับรูบเอาไปแมดกับฟังชั้น
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Tadkaugsi",
    location: "Laungphabang",
    grade: "CULTURAL RELAX",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Tadkaugsi",
    location: "Laungphabang",
    grade: "CULTURAL RELAX",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Tadkaugsi",
    location: "Laungphabang",
    grade: "CULTURAL RELAX",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Tadkaugsi",
    location: "Laungphabang",
    grade: "CULTURAL RELAX",
  },
];

const HomeReview = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        {/* header popora */}
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popolar Destination</h2>
            <p>
              From historial cities to natrual specteculars, come see the best
              of the world!
            </p>
          </div>
          <div className="iconsDiv flex ">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainConten grid  ">
          {Data.map(({id,imgSrc,destTitle,location,grade}) => {
            return (
              <div className="singleDestination ">

                <div className="destImage">
                  <img src={imgSrc} alt="Image title" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">
                    0{id}
                    </div>

                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
        
      </div>
    </section>
  );
};

export default HomeReview;