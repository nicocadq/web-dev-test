import { Layout } from 'components/Layout';
import { useMeetings } from 'hooks/useMeetings';

const Meetings = () => {
  const { error, isLoading, meetings } = useMeetings();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <Layout>
      {meetings.map(({ id, topic, start_time, duration }) => (
        <div key={id}>
          <h3>Topic: {topic}</h3>
          <p>Start Time: {start_time}</p>
          <p>Duration: {duration}</p>
        </div>
      ))}
    </Layout>
  );
};

export { Meetings };
