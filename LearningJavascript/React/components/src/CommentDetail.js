import React from "react";

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>

            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>

                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>

                <div className="text">{props.content}</div>

                <div className="actions">
                    <a href="/" className="reply">
                        Reply
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CommentDetail; // ! makes this function available to the rest of the project
