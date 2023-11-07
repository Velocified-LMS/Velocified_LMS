import React, { useState, useEffect } from 'react';
import styles from './messageList.module.css';

function MessageList({ messages = [], user }) {
    const Messages = messages.map((message, i) => {
        let align = styles.message_left
        let icon = "/Icon2.svg"
        if(user.user.username === message.sender.name) {
            align = styles.message_right;
            icon = "/Icon1.svg"
        }
        return(
            <div className={ `${styles.message} ${align}`} key={i}>
                <div style={{ display: 'flex' }}>
                    <div className={styles.message_container}>
                        <div className={styles.sender_icon}>
                            <img src={icon} />
                            <div className={styles.sender_name}>{message.sender.name}</div>    
                        </div>
                    </div>
                    <div className={styles.message_text_with_border}>
                        {message.content}
                    </div>
                </div>
            </div>
        );
    })

    return (
        <div className={styles.message_list}>
            {Messages}
        </div>
    );
}

export default MessageList;
