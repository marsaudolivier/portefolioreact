import WeAre from "../composent/WeAre";
import Header from "../composent/Head";
import Foot from "../composent/Foot";
import Skillreact from "../composent/Skillreact";
import SkillWp from "../composent/SkillWp";
import SkillPresta from "../composent/SkillPresta";
import SkillNode from "../composent/SkillNode";
import Presentation from "../composent/Presentation";
import Techno from "../composent/Techno";
import Service from "../composent/Service";
import Mecontact from "../composent/contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";
import { useRef } from "react";
import ScrollToTopButton from "../composent/ScrollToTopButton";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function IndexPage() {
  const titleRef = useRef();

  const onLoad = () => {
    gsap
      .timeline()
      .fromTo(
        ".letter",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.33,
          delay: 0.7,
        }
      )
      .to(".title", {
        y: 45,
        delay: 0.7,
      })
      .to(".letter", {
        margin: "0 4vw",
        delay: 0.8,
        duration: 0.5,
      })
      .to(".letter", {
        margin: "0 0",
        delay: 0.8,
        duration: 0.5,
      })
      .to(".letter", {
        x: -titleRef.current.clientWidth,
        delay: 1,
        duration: 2,
        rotate: -360,
      })
      .to(window, {
        duration: 1,
        scrollTo: "#nextSection",
      })
      .to(".title", {
        y: 0,
      })
      .to(".letter", {
        x: 0,
        delay: 1,
        duration: 2,
      })
  };

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -1500,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
  };
  useEffect(() => {
    onLoad();
  }, []);
  useEffect(() => {
    slideInLeft("#box1", 0, 1);
  }, []);
  useEffect(() => {
    slideInLeft("#box2", 0, 1);
  }, []);
  useEffect(() => {
    slideInLeft("#box3", 0, 1);
  }, []);
  useEffect(() => {
    slideInLeft("#box4", 0, 1);
  }, []);
  useEffect(() => {
    slideInLeft("#box5", 0, 1);
  }, []);
  useEffect(() => {
    slideInLeft("#box6", 0, 1);
  }, []);
  useEffect(() => {
    slideInLeft("#box7", 0, 1);
  }, []);
  useEffect(() => {
    slideInLeft("#box8", 0, 1);
  }, []);
  useEffect(() => {
    slideInLeft("#box9", 0, 1);
  }, []);

  return (
    <>
    <link rel="canonical" href="https://marsaudolivierdev.fr/" />
      <Header />
      <ScrollToTopButton />
      <h1 className="title" ref={titleRef}>
        <span className="letter">M</span>
        <span className="letter">O</span>
        <span className="letter">D</span>
        <span className="letter">E</span>
        <span className="letter">V</span>
      </h1>
      <img src="assets/images/logo.svg" alt="logo" className="logomenu" />
      
      <section id="nextSection">
        <div className="box" id="box1">
          <WeAre />
        </div>
        <div className="box" id="box2">
          <Presentation />
        </div>
        <div className="box" id="box3">
          <Techno />
        </div>
        <div className="box" id="box4">
          <Skillreact />
        </div>
        <div className="box" id="box5">
          <SkillWp />
        </div>
        <div className="box" id="box6">
          <SkillPresta />
        </div>
        <div className="box" id="box7">
          <SkillNode />
        </div>
        <div className="box" id="box8">
          <Service />
        </div>
        <div className="box" id="box9">
          <Mecontact />
        </div>
      </section>
      <section>
        <div id="box10" className="box"></div>
      </section>

      <Foot />
    </>
  );
}
