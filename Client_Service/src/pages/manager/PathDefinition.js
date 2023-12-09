import React, { useState } from 'react';
import "./Pathview.css";
import { updatePath } from '@/services/ApiService';

const PathDefinition = ({ isOpen, path }) => {

  const handleClose = () => {
    isOpen(false);
  };

  const handleSave = () => {
    path.proficiencyDefinition = text;
    updatePath(path);
    handleClose();
  };

  if (path === undefined)
    return "Loading..."

  const [text, setText] = useState(path.proficiencyDefinition);

  return (
    <div className="modal">
        <div className="popupMilestone">
            <div className="modalContentM">
            <div className="headerMilestone">
                <div className="pathTitle left">
                  Proficiency Definition
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className="scrollableContent">
              <input value={text} onChange={e => setText(e.target.value)} style={{ height: '100%', width: '100%' }}/>
            </div>
              <div className="AddCoachBttn" onClick={handleSave}>
                Save
              </div>
            </div>
        </div>
    </div>
  );
};

export default PathDefinition;
