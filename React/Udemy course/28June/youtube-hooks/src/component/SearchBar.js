import React, {useState} from 'react';


//in function there is useState method used to initilize the state
const SearchBar =({onFormSubmit})=>{
	//create state 
	const [term,setTerm] = useState('');

	//whenever there is a change in input 
	const onInputChange = (event) => {
		setTerm(event.target.value);
	};

	//for submit the form 
	const onSubmit=(event)=>{
		event.preventDefault();
		onFormSubmit(term);
	};

    return (
      <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={term}
              onChange={onInputChange}
            />
          </div>
        </form>
      </div>
    )
	
}


//----------------------- Class Component -------------------------------------------

// class SearchBar extends React.Component {
// 	//initilize the state property
//   state = { term: '' };

//   onInputChange = event => {
//     this.setState({ term: event.target.value });
//   };

//   onFormSubmit = event => {
//     event.preventDefault();			//prevent default acton
// 	//call parents method when user enter the search term
//     this.props.onFormSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Video Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
