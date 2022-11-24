import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import eg1 from "./Images/Learn-02-Egg000.jpg";
import eg2 from "./Images/Learn-02-Egg001.jpg";
import eg3 from "./Images/Learn-02-Egg002.jpg";
import eg4 from "./Images/Learn-02-Egg092.jpg";
import eg5 from "./Images/Learn-02-Egg095.jpg";
import eg6 from "./Images/Learn-02-Egg100.jpg";
import eg7 from "./Images/Learn-02-Egg121.jpg";
import eg8 from "./Images/Learn-02-Egg150.jpg";
import eg9 from "./Images/Learn-02-Egg186.jpg";
import eg10 from "./Images/Learn-02-Egg204.jpg";
import eg11 from "./Images/Learn-02-Egg238.jpg";
import eg12 from "./Images/Learn-02-Egg286.jpg";
import gsap from "gsap";
import { TimelineMax } from "gsap/gsap-core";
function App() {
  const boxRef = useRef();
  const boxRef2 = useRef();
  const imageArray = [eg1, eg2, eg3, eg4, eg5, eg6, eg7, eg8, eg9, eg10, eg12];

  useEffect(() => {
    //select descendent childs using ref
    let q = gsap.utils.selector(boxRef2);
    gsap.to(boxRef.current, { rotation: "+=360", x: 100 });
    gsap.to(q(".inner-rotate"), { rotation: "180", duration: 2 });

    gsap.to(".box", {
      rotate: 30,
      x: 100,
      repeat: 1,
      yoyo: true,
      duration: 2,
      color: "red",
    });

    //Create a timeline which will follow
    let t1 = gsap.timeline({ repeat: 1 });
    t1.to(".box1", { x: 100, duration: 1 }, 3) // start after 3 sec timeline started
      .to(".box2", { x: 200, duration: 2 }, 2)
      .to(".box3", { x: 300, duration: 2 }, "<=50%");

    t1 = gsap.timeline({ repeat: 2, yoyo: true });
    t1.to(".box4", { x: 100, duration: 1 })
      .to(".box5", { x: 200, duration: 2 })
      .to(".box6", { x: 300, duration: 2 });

    t1 = gsap.timeline();
    t1.to(".box7", { x: 500, duration: 3 }, "<+=1")
      .to(".box8", { x: 500, duration: 1 }, ">-1")
      .to(".box9", { x: 500, duration: 1 });

    //Add tween to the timeline which will execute at the end of the timeline
    t1.add(t1.to(".box7", { x: 800, duration: 2 }));

    gsap.registerEffect({
      name: "fade",
      effect: (targets, config) => {
        return gsap.fromTo(
          targets,
          {
            duration: config.duration,
            opacity: 1,
          },
          {
            duration: config.duration,
            opacity: 0,
          }
        );
      },
      defaults: { duration: 2, repeat: 1 }, //defaults get applied to any "config" object passed to the effect
      extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
    });

    //use the registered effect
    gsap.effects.fade(".box10", { duration: 3 });
  });

  return (
    <div className="App">
      <div className="round">
        <h1>Hello</h1>
        <div className="round-div"></div>
        <div className="round-div2"></div>
      </div>
      <hr />
      <br />
      <br />
      <br />
      {/* Rotate the box by 360deg */}
      {/* <div className="rotate" ref={boxRef}>
        Hello Rotate me 360deg
      </div>

      <div ref={boxRef2}>
        <div className="inner-rotate">Inner rotate</div>
      </div>

      <div className="box"></div>

      <hr></hr>
      <h1>Timeline demo with position</h1>
      <div className="box1">Start after 3 secs</div>
      <div className="box2">Start after 2 secs</div>
      <div className="box3">Start after 1 secs</div>

      <h1>Timeline demo: yoyo true</h1>
      <div className="box4 boxSize"></div>
      <div className="box5 boxSize"></div>
      <div className="box6 boxSize"></div>

      <h1>Timeline with relative positions</h1>
      <div className="box7 boxSize"></div>
      <div className="box8 boxSize"></div>
      <div className="box9 boxSize"></div>

      <h1>Timeline with effects</h1>
      <div className="box10 boxSize"></div>*/}
    </div>
  );
}

export default App;
