import {connect } from 'react-redux'

const SongDetail = (props) => {
	console.log("props in songDetail",props);
	if(props.song) {
		return (
			<div>
				<h3>Details for: </h3>
				<p>
					Title: {props.song.title}
					<br/>
					Duration: {props.song.duration}
				</p>
			</div>
		)
	} else {
		return <div>Select a Song</div>
	}

}

const mapStateToProps = (state) => {
	console.log("state= ",state);
	return {song: state.selectedSong} 
}

export default connect(mapStateToProps)(SongDetail);