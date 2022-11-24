import React, { useState } from "react";


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);

  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);

  };
  console.log(current);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  
  const renderImages=()=>{
	return (
		slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="historical"
                className="d-image"
                key={slide.id}
              />
        	)
			}
			</div>
		)}
	)
	)
}



  return (
    <section className="slider">
      <button className="left-arrow" onClick={prevSlide} >&lsaquo;</button>
      <button className="right-arrow" onClick={nextSlide}>&rsaquo;</button>
		{renderImages()}
    
    </section>
  );
};

export default ImageSlider;
