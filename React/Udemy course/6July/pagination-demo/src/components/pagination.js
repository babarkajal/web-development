import React from "react";

//This component is used to show the numbers on the page
const pagination = ({ postsPerPage, totalPosts, paginate }) => {
  //first create empty page
  const pageNumbers = [];
  //push the numbers to the list: for 100 posts we have to show 5 pages per page then 100/5=20 we require 20 pages
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  //return the jsx
  return (
    <nav>
      <ul className="pagination">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                // href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
};

export default pagination;
