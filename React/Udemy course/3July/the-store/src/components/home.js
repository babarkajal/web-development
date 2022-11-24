import React from "react";
import "../css/home.css";
import ImageSlider from "./imageSlider";
import {  ProductSliderbar } from "./data";
import { desktopImage } from './data';
import ProductSlider from "./productSlider";

const home = () => {
  return (
	<div>
		<ImageSlider slides={desktopImage}/>
		<img src='/img/Desktop4.png' className="home-individual-image" alt="about-us"/>
		<ProductSlider products={ProductSliderbar}/>
	</div>
  );
}
export default home;