

/* {
this function is reused with different content
here prop is used to send data from parent to child
}*/

function CommentDetails(prop) {
        console.log(prop);
        return (
                <div className = "comment">
                        <a href="/" className ="avatar">
                                <img alt="avatar" src={prop.avtar}/>
                        </a>

                        <div className="content">
                                <a href ="/" className = "author">
                                        {prop.author}
                                </a>
                                <div className = "metadata">
                                        <span className = "date"> {prop.timeAgo} </span>
                                </div>
                                <div className = "text"> {prop.comment} </div>
                        </div>
                </div>
        );
}

export default CommentDetails;
