//import redux form library
import { Field, reduxForm } from "redux-form";
//import action
import { updateName } from "./actions";
import {connect} from 'react-redux'


let simpleForm = ({updateName}) => {
console.log(updateName);
  return (
	
    // call action creator after submiting the form
    <form className="ui form" >
      {/* name field */}
      <div className="fields">
        <div className="field">
          <label>First name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="first name"
			onChange={()=>updateName('kajal')}
          />
        </div>
        <div className="field">
          <label>Last name</label>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="last name"
          />
        </div>
      </div>

      {/* emial field */}
      <div className="field">
        <label>Email</label>
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="email id"
          className="four wide field"
        />
      </div>

      {/* gender field */}
      <div className="field">
        <label>Gender</label>
        <Field name="gender" component="input" type="radio" value="male" /> Male
        <br />
        <Field
          name="gender"
          component="input"
          type="radio"
          value="female"
        />{" "}
        Female

      </div>

      <div className="field">
        <button type="submit" className="positive ui button ">
          Submit
        </button>
      </div>
    </form>
  );
};


//pass state as s props to the simpleForm function
const mapStateToProps=(state)=>{
	return {name: state.name}
}

simpleForm = reduxForm({
  form: "Contact"
})(simpleForm);


// You have to connect() to any reducers that you wish to connect to yourself
export default connect(
	mapStateToProps,
	{updateName}
  )(simpleForm);