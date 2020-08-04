import React from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {editPost, getPosts} from "../../actions/postActions";
import {NotificationManager} from "react-notifications";
import Spinner from "../../components/spinner/Spinner";
import UserPostsCommentContainer from "../user_posts_comment/userPostsCommentContainer";
import './style.css';
import PostClass from "../../components/post/PostClass";

class UserPostsClassContainer extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        this.props.getPosts(this.props.match.params.userId);
    }

    save(body, id){
        this.props.editPost(id, body);
    }

    render() {
        if (this.props.postReducer.errorMessage) {
            NotificationManager.error(this.props.postReducer.errorMessage, 'Error', 3000);
        }
        return <Spinner load={this.props.postReducer.load}>
            {this.props.postReducer.data &&
            <ul>
                {this.props.postReducer.data.map((res, index) => {
                    return (
                        <li key={index} className="li">
                            <div className="card text-center">
                                <PostClass  {...res} save={(body, id) => this.save(body, id )}/>
                                <UserPostsCommentContainer id={res.id} />
                            </div>
                        </li>
                    )
                })}
            </ul>
            }
        </Spinner>
    }
}

function mapStateToProps(state) {
    return { postReducer: state.postReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: (id) => dispatch(getPosts(id)),
        editPost: (id, body) => dispatch(editPost(id, body))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPostsClassContainer));
