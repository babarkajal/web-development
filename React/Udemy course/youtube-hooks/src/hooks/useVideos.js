import { useState, useEffect } from "react";
import Youtube from "../api/Youtube";

const useVideos = (defaultSearch)=>{
	const [videos,setVideos] = useState([]);
	//useEffect method to call it first after rendering and provide default term for searching
	useEffect(()=>{
		search(defaultSearch);
	},[defaultSearch]);

	//this fucntion get called when we submit the form
	const search = async term => {
		//connect to the youtube api
		const response = await Youtube.get("/search", {
		  params: {
			q: term,
		  },
		});

		setVideos(response.data.items);
	};
	return [videos,search]
}

export default useVideos;