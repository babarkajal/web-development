import "./VideoItem.css"

//here we have received video item from videoList and onVideoSelect from the App component
const VideoItem = ({video, onVideoSelect}) => {
	//return each item
	return (
	
	//when we click on any item send that item to the onVideoSelect function. 
	<div onClick= {()=>onVideoSelect(video)}  className="video-item item">
			<img className = "ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
			<div className="content">
				<div className = "header">
					{video.snippet.title}
				</div>
			</div>
	</div>
	)
}

export default VideoItem;