import React, { Component } from "react";
import { connect } from "react-redux";
import { ClearUserStatus } from "../../Actions/UsersActions";
import UserCard from "./UserCard";

class Followers extends Component {
  state = {
    usersList: [],
  };

  componentDidUpdate() {
    if (this.props.getUsersListStatus === 200) {
      this.formateUsers();
      this.props.ClearUserStatus();
    }
  }

  getList = (data, type) => {
    return data.map((val) => {
      return {
        ...val.attributes,
        id: val.id,
        type,
      };
    });
  };

  formateUsers = () => {
    const { usersList } = this.props;

    let userList = [];
    usersList.forEach((element) => {
      let user = {
        ...element.attributes,
        id: element.id,
        profile: element.attributes?.profile?.data?.attributes?.url,
      };
      let userFollowers = this.getList(element.attributes.followers.data, 1);
      let userFollowings = this.getList(element.attributes.following.data, 2);

      for (let i = 0; i < userFollowings.length; i++) {
        const following = userFollowings[i];
        if (userFollowers.find((val) => val.email === following.email)) {
          userFollowers.forEach((element) => {
            if (element.email === following.email) element.type = 3;
          });
        } else userFollowers.push(following);
      }

      user = {
        ...user,
        userConnections: userFollowers,
      };
      userList.push(user);
    });

    this.setState({
      usersList: userList,
    });
  };

  getData = () => {
    const { usersList } = this.state;
    let JSXarray = [];
    usersList?.forEach((user) => {
      user.userConnections.forEach((connection) => {
        JSXarray.push(
          <div
            className="followers-row"
            key={connection.email + connection.id + user.id}
          >
            <UserCard data={user} />
            <div className="arrows">
              {connection.type === 1 ? (
                <img src="./assets/leftArrow.svg" alt="" />
              ) : connection.type === 2 ? (
                <img src="./assets/rightArrow.svg" alt="" />
              ) : connection.type === 3 ? (
                <>
                  <img src="./assets/leftArrow.svg" alt="" />
                  <img src="./assets/rightArrow.svg" alt="" />
                </>
              ) : null}
            </div>
            <UserCard data={connection} />
          </div>
        );
      });
    });
    // console.log(JSXarray);
    return JSXarray;
  };

  render() {
    return (
      <div className="followers">
        <div className="followers-heading Heading">
          User and their followers
        </div>
        <div className="followers-users">
          {this.getData().map((val) => val)}
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
export default connect(mapStateToProps, { ClearUserStatus })(Followers);

// let userList = [];
// console.log(usersList.slice(0, 2));
// usersList.forEach((element) => {
//   let user = { ...element.attributes, id: element.id };

//   user = {
//     ...user,
//     followers: element.attributes.followers.data.map((val) => {
//       return {
//         ...val.attributes,
//         id: val.id,
//         type: 1,
//       };
//     }),
//     following: element.attributes.following.data.map((val) => {
//       return {
//         ...val.attributes,
//         id: val.id,
//         type: 2,
//       };
//     }),
//     id: element.id,
//   };
//   userList.push(user);
// });

// {this.state.usersList.map((data) => {
//     return (
//       <div className="followers-row">
//         <UserCard user={data.user} />
//         <div className="arrows">
//           <img src="./assets/leftArrow.svg" alt="" />
//           <img src="./assets/rightArrow.svg" alt="" />
//         </div>
//         <UserCard user={data.follower} />
//       </div>
//     );
//   })}
