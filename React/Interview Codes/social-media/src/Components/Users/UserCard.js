import React from "react";

function UserCard({ data }) {
  return (
    <div className="user-card">
      {data?.profile ? (
        <img src={data.profile} alt="User Profile" />
      ) : (
        <div className="round"></div>
      )}

      <div className="info">
        <div className="name">{data?.firstName + " " + data?.lastName}</div>
        <div className="email">{data?.email}</div>
      </div>
    </div>
  );
}

export default UserCard;
