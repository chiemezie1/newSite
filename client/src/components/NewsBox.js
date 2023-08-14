import React from "react";
import man from "../assets/man.jpg";

function NewsBox() {
  return (
    <div className="news-container">
      <h1> Man's Unyielding Struggle to Make Ends Meet </h1>
      <p>By John Anderson</p>
      <p>June 17, 2022</p>
      <div className="news-box">
        <div>
          <img src={man} alt="image picture" className="image-box" />
        </div>

        <div className="news-body">
          <p>
            From the earliest days of human existence to the complexities of the
            modern world, the relentless pursuit of making ends meet has been an
            enduring challenge. It symbolizes the never-ending effort to secure
            basic needs, achieve financial stability, and improve one's quality
            of life. This intrinsic drive has shaped the course of history,
            propelling societies to innovate, adapt, and overcome the hurdles
            that stand in the way of a better tomorrow. The struggle to make
            ends meet has been a fundamental part of the human experience
            throughout history. From ancient survival instincts to modern-day
            complexities, the pursuit of a better life endures. By acknowledging
            the past, embracing the present, and collaborating for a more
            equitable future, we can pave the way for a world where making ends
            meet is not an insurmountable struggle, but a shared endeavor
            towards prosperity and well-being for all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsBox;
