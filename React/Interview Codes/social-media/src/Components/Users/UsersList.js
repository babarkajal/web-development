import React, { Component } from "react";
import { connect } from "react-redux";
import { FollowUsers, GetListOfUsers } from "../../Actions/UsersActions";
import SelectUser from "./SelectUser";

class UsersList extends Component {
  state = {
    userName: null,
    followTo: null,
  };

  setDropdownValue = (e, name) => {
    this.setState({ [name]: e });
  };
  handleFollow = async () => {
    const response = await FollowUsers(this.state.userName?.value, {
      data: {
        following: this.state.followTo?.value,
      },
    });
    console.log(response);
    if (response && response.status === 200) {
      this.props.GetListOfUsers();
      this.setState({
        userName: null,
        followTo: null,
      });
    }
  };
  render() {
    const { usersList } = this.props;
    const options = usersList.map((val) => ({
      label: val.attributes.firstName + " " + val.attributes.lastName,
      value: val.id,
    }));
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
              <button onClick={this.handleFollow}>FOLLOW</button>
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
export default connect(mapStateToProps, { GetListOfUsers })(UsersList);
