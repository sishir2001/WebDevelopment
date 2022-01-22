import React,{Component} from "react";
import {fetchPosts,fetchUsers} from "../actions";
import {connect} from "react-redux";

class PostList extends Component{
    componentDidMount(){
        // fetch the posts list from api
        this.props.fetchPosts();
        // fetch the users list from api
        this.props.fetchUsers();
    };
    render(){
        // render the list from the redux state
        let renderedPosts = [],userName = '';
        if(this.props.posts.length !== 0){

            renderedPosts = this.props.posts.map((post)=>{

                if(this.props.users.length!== 0){
                    userName = this.props.users[post.userId-1].name;
                }

                return (
                    <div key={post.id} className="item">
                        <div className="content">
                            <h3 className="header">{post.title}</h3>
                            <p className="content">
                                {post.body}
                                <br/>
                                Written By : {userName}
                            </p>
                        </div>
                    </div>
                );
            });
        }
        return (
            <div className="ui divided list">{renderedPosts}</div>
        );
    };
};

const mapStateToProps = (state)=>{
    return {
        posts:state.posts,
        users:state.users
    };
};


export default connect(mapStateToProps,{fetchPosts,fetchUsers})(PostList);