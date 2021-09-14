import styles from './Meetings.module.css';

const Meeting = ({ duration, startTime, topic, id }) => (
  <div className={styles.meeting}>
    <span className={styles.date}>{startTime}</span>
    <div className={styles.info}>
      <span className={styles.topic}>{topic}</span>
      <span>Duration: {duration}mins</span>
      <span>Meeting ID: {id}</span>
    </div>
  </div>
);

export { Meeting };
