import React, { useState } from 'react';
import "./Pathview.css";
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
  if (path === undefined)
    return "Loading..."
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
                    // className="scrollableContentAE"
                    style={{height: '100%'}}
                    value={path.pathOverview}
                    readOnly={true}
                    theme={"bubble"}
                    placeholder="Path Overview"
                />
            </div>
    
          </div>
      </div>
  </div>
  );
};

export default PathOverview;
