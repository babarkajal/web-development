import React from "react";
import { connect } from "react-redux";
import { ShowAlert } from "../Actions/UsersActions";

function Alert(props) {
  if (props.alert)
    return (
      <div className={`alert ${props?.alert?.type}`}>
        <div className="message">{props?.alert?.message}</div>
        <div className="close" onClick={() => props.ShowAlert(null)}>
          X
        </div>
      </div>
    );
  else return null;
}

export default connect(
  (store) => ({
    alert: store.appData.alert,
  }),
  { ShowAlert }
)(Alert);
