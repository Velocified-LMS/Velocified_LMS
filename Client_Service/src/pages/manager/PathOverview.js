import React, { useState } from 'react';
import "./Pathview.css";
import { updatePath } from '@/services/ApiService';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const PathOverview = ({ isOpen, path }) => {

  const handleClose = () => {
    isOpen(false);
  };

  const handleSave = () => {
    path.pathOverview = text;
    updatePath(path);
    handleClose();
  };

  const handleChange = (content, delta, source, editor) => {
    setText(editor.getHTML());
  };

  if (path === undefined)
    return "Loading..."

  const [text, setText] = useState(path.pathOverview);

  return (
    <div className="modal">
        <div className="popupMilestone">
            <div className="modalContentM">
            <div className="headerMilestone">
                <div className="pathTitle left">
                    Path Overview
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className="scrollableContent">
              <ReactQuill 
                className="scrollableContentPath"
                value={text}
                onChange={handleChange}
              />
            </div>
            <div className="AddCoachBttn" onClick={handleSave}>
                Save
              </div>
    
          </div>
        </div>
    </div>
  );
};

export default PathOverview;
