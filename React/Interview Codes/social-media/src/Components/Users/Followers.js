import React, { Component } from "react";
import { connect } from "react-redux";
import { ClearUserStatus } from "../../Actions/UsersActions";
import UserCard from "./UserCard";

class Followers extends Component {
  state = {
    usersList: [],
  };

  //fetch list on component mount
  componentDidMount() {
    this.formateUsers();
  }

  //If new follower-following user added then fetch the list again
  componentDidUpdate() {
    if (this.props.getUsersListStatus === 200) {
      this.formateUsers();
      this.props.ClearUserStatus();
    }
  }

  //Function to return data
  formatData = (data, type) => {
    return data.map((val) => {
      return {
        ...val.attributes,
        id: val.id,
        type,
      };
    });
  };

  //Format users list and convert it into render-able format
  formateUsers = () => {
    const { usersList } = this.props;
    if (usersList && usersList.length) {
      let userList = [];
      usersList?.forEach((element) => {
        //users data
        let user = {
          ...element.attributes,
          id: element.id,
          profile: element.attributes?.profile?.data?.attributes?.url,
        };

        /** Followers and followings list
         * type 1: follower
         * type 2: following
         * type 2: both
         */
        let userFollowers = this.formatData(
          element.attributes.followers.data,
          1
        );
        let userFollowings = this.formatData(
          element.attributes.following.data,
          2
        );

        /**
         ** Add users from following to followers
         * If user is both in userFollowers and userFollowing, type = 3 means show double headed arrow
         * If user is of type 1 then he is a follower,  user <- follower
         * If user is of type 2 then he is a following,  user -> following
         */
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

      //  UPDATE THE LOCAL LIST
      this.setState({
        usersList: userList,
      });
    }
  };

  //RETURN JSX ARRAY
  getUserJSX = () => {
    const { usersList } = this.state;
    let JSXarray = [];
    usersList?.forEach((user) => {
      if (user.userConnections && user.userConnections.length) {
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
      }
      //IF THERE IS NO FOLLOWER THEN SHOW MAIN USER INFO
      else {
        JSXarray.push(
          <div className="followers-row" key={user.id}>
            <UserCard data={user} />
          </div>
        );
      }
    });
    return JSXarray;
  };

  render() {
    const list = this.getUserJSX();
    return (
      <div className="followers">
        <div className="followers-heading Heading">
          User and their followers
        </div>
        <div className="followers-users">
          {list && list.length ? (
            list.map((val) => val)
          ) : (
            <div>No one is following each other</div>
          )}
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
