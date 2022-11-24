import {combineReducers } from 'redux'

/* here are two reducers 
1. songsReducer : it is static file which contain only object of songs
2. selectedSong : used to update the state
*/
const songsReducer = ()=>{
	return [
		{
			title: "No srubs",
			duration: '4:05'
		},
		{
			title: "Macarena",
			duration: '2:30'
		},
		{
			title: "ALl stars",
			duration: '3:15'
		},
		{
			title: "I want it that way",
			duration: '1:45'
		}
	];
};

/* if action matched with the type then it return state value other wise null*/
const selectedSongReducer= (selectedSong=null, action) => {
	if(action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

/* combine all reducers and make available to outside world*/
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});

