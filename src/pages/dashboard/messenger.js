import React, { useState } from 'react';
import MessageList from './components/messengeList';
import styles from './messenger.module.css';

const Messenger = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]); // You may want to manage messages state here

  // Function to handle the submission of a new message
  const handleSubmit = () => {
    // Add logic to send the new message
    // You can update the 'messages' state with the new message
    // For example:
    const updatedMessages = [...messages, { sender: 'User1', text: newMessage }];
    setMessages(updatedMessages);

    // Clear the input field
    setNewMessage('');
  };

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
                <p>Done</p>
              </div>
            </div>
          </div>
          <div>
            <MessageList messages={messages} /> {/* Pass messages as a prop */}
          </div>
          <div className={styles.message_input}>
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </div>
          <button className={styles.Msgsubmit} onClick={handleSubmit}>Submit</button> {/* Moved the button here */}
        </div>
      </div>
    </div>
  );
};

export default Messenger;
