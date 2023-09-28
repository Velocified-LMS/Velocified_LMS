import MessageList from './components/messengeList';
import styles from './messenger.module.css'

const Messenger = () => {
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
                <MessageList />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Messenger;