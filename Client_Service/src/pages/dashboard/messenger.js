import React, { useState, useEffect } from 'react';
import MessageList from './messengeList'; 
import styles from './Messenger.module.css';
import { sendMessage, getMessage } from '../../services/ApiService';

const Messenger = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const fetchMessages = async () => {
    console.log(isOpen);
    getMessage().then((res) => {
      setMessages(res.data);
    }).catch(error => {
      console.error(error);
    });
  };

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
      const intervalId = setInterval(fetchMessages, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isOpen]);


  const handleSubmit = async () => {
    if (newMessage.trim() !== '') {
      const message = {
        message: newMessage
      };
      sendMessage(message).then(() => {
        setNewMessage('');
      }).catch(error => {
        console.error(error);
      });
    } else {
      console.log('Please enter a message');
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
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
  );
};

export default Messenger;
