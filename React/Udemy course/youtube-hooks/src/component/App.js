import React,{useState,useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

// ------------------ functional component -----------------------
const App =()=> {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos("Arijit singh");
	
	//when we get videos values then this method is called
	useEffect(()=>{
		setSelectedVideo(videos[0]);
	},[videos])
	

	  return (
		<div className="ui container">
		  <SearchBar onFormSubmit={search} />
  
		  <div className="ui grid">
			<div className="ui row">
			  <div className="eleven wide column">
				{/* pass the selectedVideo to the VideoDetail */}
				<VideoDetail video={selectedVideo} />
			  </div>
  
			  <div className="five wide column">
				{/* pass the function onVideoSelect to the VideoList  */}
				<VideoList

				 // insted of sending function we can send state function
				  onVideoSelect={setSelectedVideo}
				  videos={videos}
				/>
			  </div>
			</div>
		  </div>
		</div>
	  );

}

export default App;
