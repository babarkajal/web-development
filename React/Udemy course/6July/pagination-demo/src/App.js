import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./components/posts";
import Pagination from "./components/pagination";

/* 
App components renders the children 
*/
const App = () => {
  //create states which are required to save the posts
  const [posts, setPosts] = useState([]);
  //loading is used to check data is loaded or not
  const [loading, setLoading] = useState(false);

  //currentPage is used to hold the current page number
  const [currentPage, setCurrentPage] = useState(1);
  //PostsperrPage is used to render 10 pages on one page
  const [postsPerPage] = useState(10);

  //fetches the data when our components loaded at first time
  useEffect(() => {
    const fetchPosts = async () => {
      //set loading scenario as true as it is still loading
      setLoading(true);
      //when we get reponse from the server store it in res variable
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      //assign data to the posts state
      setPosts(res.data);
      // after storing the data set loading state to false
      setLoading(false);
    };

    //call the function
    fetchPosts();
  }, []);

  // Get current posts suppose we want 5 pages then
  const indexOfLastPost = currentPage * postsPerPage; // 1*5=5 index will be last
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //fist index 5 -5 =0
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); //now the slice the list we got from 0 to 5

  //change page to the another number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //render the jsx
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      {/* pass the current post and and loading status to the posts  */}
      <Posts posts={currentPosts} loading={loading} />
      {/* for pagination send postsperpage, totalposts and paginate function as props */}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
