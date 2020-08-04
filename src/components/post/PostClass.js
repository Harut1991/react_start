import React from 'react';
import './post.css';


class PostClass extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            textareaShow: false
        }
        this.myRef = React.createRef();
    }

    handleShow() {
        this.setState({
            ...this.state,
            textareaShow: !this.state.textareaShow
        })
    }

    save() {
        this.props.save(this.myRef.current.value, this.props.id)
        this.handleShow();
    }


    render() {
        return (
            <div>
                <div className="card-header">
                    {this.props.title}
                    <p className="edit" onClick={() => this.handleShow()} >Edit</p>
                </div>
                <div className="card-body">
                    {!this.state.textareaShow && <h5 className="card-title">{this.props.body}</h5>}
                    {this.state.textareaShow &&
                    <div>
                        <textarea ref={this.myRef} rows={5} >{this.props.body}</textarea>
                        <button onClick={() => this.save()}>save</button>
                        <button onClick={() => this.handleShow()}>cancel</button>
                    </div>}
                </div>
            </div>
        )
    }

}
export default PostClass;
