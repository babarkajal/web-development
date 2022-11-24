import React from 'react'
import 	Slider from 'react-slick'


const ProductSlider = ({products}) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows:true,
	}

	const renderProducts=()=>{
		return (
			products.map(product=>{
				return <div> 
					<img src={product.img} key={product.id}/>
				</div>
			})
		);
	}
	return (
		<div className="slider-div">
			<h4 className="slider-title">Best Sellers</h4>
			<Slider {...settings} className="main-slider">
				{renderProducts()}
			</Slider>
		</div>
	)
}

export default ProductSlider;
