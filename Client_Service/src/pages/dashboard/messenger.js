import React, { useState } from 'react';
import MessageList from './messengeList'; 
import styles from './Messenger.module.css';
import { color, fontSize } from '@mui/system';

const Messenger = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  // Function to handle the submission of a new message
  const handleSubmit = () => {
    if (newMessage.trim() !== '') {
      const updatedMessages = [...messages, { sender: 'User1', text: newMessage }];
      setMessages(updatedMessages);
      setNewMessage('');
    }
  };

  // Function to close the message component
  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div className={styles.chat_popup}>
        <div className={styles.chat_content}>
          <div className={styles.container}>
            <div className={styles.message_header}>
              <div className={styles.message_title}>
                <p>Messages</p>
              </div>
              <div className={styles.message_done}>
                <button onClick={handleClose} style={{backgroundColor: 'transparent', fontSize: '16px', border:'0px', color:"white" }}>Done</button>
              </div>
            </div>
          </div>
          <div>
            <MessageList messages={messages} />
          </div>
          <div className={styles.message_input}>
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </div>
          <button className={styles.Msgsubmit} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
