import React,{useEffect,Component} from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

// ! why is it only working with class component
class UserHeader extends Component{
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }
    render(){
        // ! at first this will be an empty string
        // ? finding the user according to his userId
        if(!this.props.user)
            return (
                <div className="ui active inline loader"></div>
            );
        return (
            <div>
                {`Author : ${this.props.user.name}`}
            </div>
        );

    };
};

const mapStateToProps = (state,ownProps)=>{
    // @params ownProps : a reference to props object for UserHeader class
    // ! we can use this function for precomputation also and not only mapping
    return {
        user:state.users.find((user)=> user.id === ownProps.userId)
    };
};
export default connect(mapStateToProps,{fetchUser})(UserHeader);
