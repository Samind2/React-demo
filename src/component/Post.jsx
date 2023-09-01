import { Component } from "react";
import "../css/Post.css";

export default class Post extends Component{
    render() {
        return (
            <div className="post">
                <p><strong>Name:</strong> {this.props.userId}</p>
                <p>Message: {this.props.message}</p>
                Comments
                <p>Message: {this.props.children}</p>
            </div>
        );
    }
}