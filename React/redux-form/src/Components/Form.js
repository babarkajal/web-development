import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

function Form(props) {
  console.log(props);

  return (
    <div className="form">
      <form className="form-wrapper" onSubmit={props.handleSubmit}>
        <h2>Add Todo</h2>
        <div>
          <label htmlFor="todoName">Todo Title: </label>
          <Field name="todoName" type="text" component="input" />
        </div>
        <div>
          <label htmlFor="todoName">Status: </label>
          <Field name="status" component="select">
            <option>Select Status</option>
            <option value="0">Pending</option>
            <option value="1">Completed</option>
            <option value="2">In progress</option>
          </Field>
        </div>

        <button type="submit">Add Todo</button>
        <button type="reset" onClick={props.reset}>
          Clear Data
        </button>
      </form>
    </div>
  );
}

Form = reduxForm({
  form: "todoForm",
})(Form);

// You have to connect() to any reducers that you wish to connect to yourself
Form = connect((state) => ({
  initialValues: state.form.todoForm, // pull initial values from account reducer
}))(Form);

export default Form;
