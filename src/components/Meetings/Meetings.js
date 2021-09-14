import { Layout } from 'components/Layout';
import { useMeetings } from 'hooks/useMeetings';
import { Meeting } from './Meeting';

import styles from './Meetings.module.css';

// const meetings = [
//   {
//     id: '123123123123',
//     topic: 'My Meeting',
//     start_time: '2021-09-14',
//     duration: '10',
//   },
//   {
//     id: '123123123123',
//     topic: 'My Meeting',
//     start_time: '2021-09-14',
//     duration: '10',
//   },
//   {
//     id: '123123123123',
//     topic: 'My Meeting',
//     start_time: '2021-09-14',
//     duration: '10',
//   },
// ];

const Meetings = () => {
  const { error, isLoading, meetings } = useMeetings();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <Layout>
      <div className={styles.meetings}>
        {meetings.map(({ id, topic, start_time, duration }) => (
          <Meeting
            id={id}
            topic={topic}
            startTime={start_time}
            duration={duration}
          />
        ))}
      </div>
    </Layout>
  );
};

export { Meetings };
