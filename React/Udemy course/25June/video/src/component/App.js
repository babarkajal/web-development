import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  //initialize the state
  state = { videos: [], selectedVideo: null };

 //after rendering this will be the default videos
  componentDidMount() {
	  this.onTermSubmit("arijit singh songs");
  }
  //this fucntion get called when we submit the form
  onTermSubmit = async (term) => {
    //connect to the youtube api
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    //set the state to list of videos fetched from api
    this.setState({ 
		videos: response.data.items ,
		selectedVideo: response.data.items[0]
	});
  };

  //this function is passed to the child to get the info of selected video from the videoList
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {/* pass the selectedVideo to the VideoDetail */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              {/* pass the function onVideoSelect to the VideoList  */}
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
