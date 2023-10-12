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
                    
                        {message.sender === 'User1' ? (
                            <div style={{ display: 'flex' }}>
                                <div className={styles.message_container}>
                                <div className={styles.sender_icon}>
                                    <img src="/Icon1.svg" alt="User1 Icon" />
                                    <div className={styles.sender_name}>{message.sender}</div>    
                                </div>
                                </div>
                            <div className={styles.message_text_with_border}>
                                {message.text}
                            </div>
                            </div>
                        ) : (
                            <div style={{ display: 'flex' }}>
                                <div className={styles.message_text_with_border}>
                                    {message.text}
                                </div>
                            <div className={styles.message_container}>
                            <div className={styles.sender_icon}>
                                <img src="/Icon2.svg" alt="User2 Icon" />
                                <div className={styles.sender_name}>{message.sender}</div>
                            </div>
                            </div>
                            
                            </div>
                        )}
                    
                    
                </div>
            ))}
        </div>
    );
}

export default MessageList;
