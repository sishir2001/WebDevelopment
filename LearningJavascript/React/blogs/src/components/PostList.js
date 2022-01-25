import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";

class PostList extends Component {
    componentDidMount() {
        // fetch the posts list from api
        this.props.fetchPosts();
        // fetch the users list from api
        // this.props.fetchUsers();
    }
    renderedPosts() {
        return this.props.posts.map((post) => {
            return (
                <div key={post.id} className="item">
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                </div>
            );
        });
    }
    render() {
        // render the list from the redux state
        console.log(this.props.posts);
        return <div className="ui relaxed divided list">{this.renderedPosts()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        users: state.users,
    };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
