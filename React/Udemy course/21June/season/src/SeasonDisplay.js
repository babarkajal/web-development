import './icon-style.css'
function getSeason(lat, months) {
  if (months > 2 && months < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
}

const seasonConfig = {
	Summer : {
		text : "Let's hit the beach",
		iconName : "sun"
	},
	Winter: {
		text:"Burr, It's chilly",
		iconName : "snowflake"
	}
};

export default function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];


  return ( 
  	<div className={`season-display ${season}`}> 
		  <i className={`icon-left massive ${iconName} icon`}/>
		  <h1>{text}</h1> 
		  <i className={`icon-right massive ${iconName} icon`}/>
	</div>
  );
}
