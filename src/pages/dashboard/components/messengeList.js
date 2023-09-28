import React, { useState, useEffect } from 'react';
import styles from './messageList.module.css';

function MessageList() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Fetch the messages from the JSON file (you may need to adjust the path)
        fetch('/path-to-messages.json')
            .then(response => response.json())
            .then(data => setMessages(data))
            .catch(error => console.error('Error fetching messages:', error));
    }, []);

    // Sort messages by timestamp in ascending order
    const sortedMessages = messages.slice().sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    return (
        <div className={styles.message_list}>
            {sortedMessages.map(message => (
                <div
                    key={message.id}
                    className={`${styles.message} ${message.sender === 'User1' ? styles.message_left : styles.message_right}`}
                >
                    <div className={styles.message_sender}>{message.sender}</div>
                    <div className={styles.message_text}>{message.text}</div>
                </div>
            ))}
        </div>
    );
}

export default MessageList;
