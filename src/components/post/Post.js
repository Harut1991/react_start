// @flow

import React, { useRef, useState } from 'react';
import './post.css';

type Props = {|
    title: string,
    body: string,
    saveP: () => any,
|};

function Post({ title, id, saveP, body }: Props) {
  const [textareaShow, setTextareaShow] = useState(false);
  const myRef = useRef();

  const save = () => {
    saveP(id, myRef.current.value);
    setTextareaShow(!textareaShow);
  };

  return (
    <>
      <div className="card-header">
        {title}
        <p className="edit" onClick={() => setTextareaShow(!textareaShow)}>Edit</p>
      </div>
      <div className="card-body">
        {!textareaShow && <h5 className="card-title">{body}</h5>}
        {textareaShow
                && (
                  <div>
                    <textarea ref={myRef} rows={5}>{body}</textarea>
                    <button onClick={() => save()}>save</button>
                    <button onClick={() => setTextareaShow(!textareaShow)}>cancel</button>
                  </div>
                )}
      </div>
    </>
  );
}
export default Post;
