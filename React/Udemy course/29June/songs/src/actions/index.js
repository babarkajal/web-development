
/* action is only one that we have to select song means only one state is necessary 
 here only song is the information
 */
export const selectSong =(song)=>{
	console.log("action called")
	return {
		type:'SONG_SELECTED',
		payload: song
	};
};

