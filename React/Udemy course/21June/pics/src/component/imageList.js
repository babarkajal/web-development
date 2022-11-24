import "./imageStyle.css"
import ImageCard from "./ImageCard";

const ImageList = props => {
	const images= props.image.map((image)=>{
		return <ImageCard key={image.id} image ={image}/>
	});
	return <div className="image-list">{images}</div>
}
export default ImageList;