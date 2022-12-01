/**
 ** FollowUser: Class component to select users to follow
 * Functionality: Select user and follow to from dropdown and hit follow
 * Uses cases handled
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FollowUsers,
  GetListOfUsers,
  ShowAlert,
} from "../../Actions/UsersActions";
import SelectUser from "./SelectUser";

class FollowUser extends Component {
  state = {
    userName: null,
    followTo: null,
    processing: false,
  };

  setDropdownValue = (e, name) => {
    this.setState({ [name]: e });
  };

  //follow users API
  handleFollow = async () => {
    if (!this.state.userName || !this.state.followTo) {
      this.props.ShowAlert({ type: "ERROR", message: "Select users" });
      return;
    }
    this.setState({ processing: true });
    const response = await FollowUsers(this.state.userName?.value, {
      data: {
        following: this.state.followTo?.value,
      },
    });

    if (response && response.status === 200) {
      this.props.GetListOfUsers();
      this.setState({
        userName: null,
        followTo: null,
        processing: false,
      });
    } else this.setState({ processing: false });
  };

  render() {
    const { usersList } = this.props;
    const options =
      usersList && usersList.length
        ? usersList.map((val) => ({
            label: val.attributes.firstName + " " + val.attributes.lastName,
            value: val.id,
          }))
        : [];

    return (
      <div className="users">
        <div className="users-container">
          <div className="users-container-header Heading">Follow Now</div>
          <div className="users-container-followers">
            <div className="users-container-followers-select">
              <div className="field">
                <label htmlFor="" className="users-container-followers-heading">
                  Select User
                </label>
                <SelectUser
                  name="userName"
                  placeholder="Select User"
                  options={options}
                  onChangeHandler={this.setDropdownValue}
                  value={this.state.userName}
                />
              </div>

              <div className="field">
                <label htmlFor="" className="users-container-followers-heading">
                  Following to
                </label>
                <SelectUser
                  name="followTo"
                  placeholder="Select user to whom to follow"
                  options={options}
                  onChangeHandler={this.setDropdownValue}
                  value={this.state.followTo}
                />
              </div>
            </div>
            <div className="follow-now">
              {this.state.processing ? (
                <button onClick={this.handleFollow}>
                  <img src="./assets/loader.svg" alt="" />
                </button>
              ) : (
                <button onClick={this.handleFollow}>FOLLOW</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersList: state.appData.usersList,
    getUsersListStatus: state.appData.getUsersListStatus,
  };
};
export default connect(mapStateToProps, { GetListOfUsers, ShowAlert })(
  FollowUser
);
