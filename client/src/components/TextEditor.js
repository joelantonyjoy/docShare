import React, { useCallback } from 'react'
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';

export default function TextEditor() {
    let { id } = useParams();
    const wrapperRef = useCallback(wrapper => {
        if(wrapper == null) return;
        wrapper.innerHTML = "";
        const editor = document.createElement('div');
        wrapper.append(editor);
        new Quill(editor, {
            theme: 'snow'
          });
    },[])

    return (
        <div>
            <div id="container" ref={wrapperRef}></div>
        </div>
            )
    }
