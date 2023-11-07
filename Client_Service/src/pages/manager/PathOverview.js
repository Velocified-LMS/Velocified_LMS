import React, { useState } from 'react';
import "./Pathview.css";
import { updatePath } from '@/services/ApiService';

const PathOverview = ({ isOpen, path }) => {

  const [text, setText] = useState(path.pathOverview);
  const handleClose = () => {
    isOpen(false);
  };

  const handleSave = () => {
    path.pathOverview = text;
    updatePath(path);
    handleClose();
  };

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
              <input value={text} onChange={e => setText(e.target.value)} style={{ height: '100%', width: '100%' }}></input>
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
