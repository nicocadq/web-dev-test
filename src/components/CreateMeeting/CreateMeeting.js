import { useForm } from 'react-hook-form';

import { Layout } from 'components/Layout';
import { useCreateMeeting } from 'hooks/useCreateMeeting';

import styles from './CreateMeeting.module.css';

const CreateMeeting = () => {
  const { create, error, isLoading } = useCreateMeeting();

  const { register, handleSubmit } = useForm();

  return (
    <Layout>
      <div className={styles.container}>
        <h2>Schedule Meeting</h2>
        <form onSubmit={handleSubmit(create)}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="topic">
              Topic:
            </label>
            <input
              className={styles.input}
              type="text"
              id="topic"
              {...register('topic')}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="start_time">
              Start Time:
            </label>
            <input
              className={styles.input}
              type="date"
              id="start_time"
              {...register('start_time')}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="duration">
              Duration:
            </label>
            <input
              className={styles.input}
              type="number"
              id="duration"
              {...register('duration')}
            />
          </div>
          <button className={styles.button} type="submit">
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>
        {error && <p>{error.message}</p>}
      </div>
    </Layout>
  );
};

export { CreateMeeting };
