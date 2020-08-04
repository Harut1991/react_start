// @flow

import React, {useRef, useState} from 'react';
import './post.css';

type Props = {|
    title: string,
    body: string,
    save: () => any,
|};

function Post(props: Props) {

    const [textareaShow, setTextareaShow] = useState(false);
    const myRef = useRef();

    const save = () => {
        props.save(props.id, myRef.current.value)
        setTextareaShow(!textareaShow);
    }

    return (
        <>
            <div className="card-header">
                {props.title}
                <p className="edit" onClick={() =>setTextareaShow(!textareaShow)} >Edit</p>
            </div>
            <div className="card-body">
                {!textareaShow && <h5 className="card-title">{props.body}</h5>}
                {textareaShow &&
                <div>
                    <textarea ref={myRef} rows={5} >{props.body}</textarea>
                    <button onClick={() => save()}>save</button>
                    <button onClick={() => setTextareaShow(!textareaShow)}>cancel</button>
                </div>}
            </div>
        </>
    )
}
export default Post;
