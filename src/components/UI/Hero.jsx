import React, { useEffect, useState, useRef } from "react";
import createGlobe from "cobe";
import "./styleHero.scss"
const Hero = () => {
    const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 500 * 2,

      height: 500 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [41.2646, 69.2163], size: 0.03 },
        { location: [41.2646, 69.2163], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);
    return (
        <>
              <div className="hero">
        <div className="topRight"></div>
        <div className="leftBottom"></div>

        <div className="container">
          <div className="row tt">
            <div className="col-lg-6 col-md-12 col-sm-12 mx-auto heroInfoWrapp">
              <h3 className="heroTitle">
                Biz veb-saytlar, ilovalarni ishlab chiqamiz
              </h3>
              <p className="heroText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <a href="#" className="heroBtnn">Портфолио </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mx-auto cubeWrapp">
              <div>
                <canvas
                  ref={canvasRef}
                  style={{
                    maxWidth: 500,
                    height: 500,
                    width: "100%",
                  
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Hero;