import React, { useState, useEffect } from 'react';
import styles from './messageList.module.css';

function MessageList({ messages }) {

    return (
        <div className={styles.message_list}>
             {messages.map(message => (
                <div
                    key={message.sender.id}
                    className={`${styles.message} ${
                        message.sender.name === 'sai' ? styles.message_left : styles.message_right
                    }`}
                >
                    <div style={{ display: 'flex' }}>
                        <div className={styles.message_text_with_border}>
                            {message.content}
                        </div>
                    <div className={styles.message_container}>
                    <div className={styles.sender_icon}>
                        <img src="/Icon2.png" alt="User2 Icon" />
                        <div className={styles.sender_name}>{message.sender.name}</div>
                    </div>
                    </div>
                    
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MessageList;
