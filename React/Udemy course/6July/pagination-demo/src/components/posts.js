import React from "react";

//UI components renders on the app
const Posts = ({ posts, loading }) => {
  //if loading state is true then show loading.. text
  if (loading) {
    return <h2>Loading...</h2>;
  }

  //return jsx
  return (
    //   show the list of posts titles as a list
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
