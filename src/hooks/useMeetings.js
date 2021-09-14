import { useEffect, useState } from 'react';

import httpClient from 'networking/httpClient';

export const useMeetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        setIsLoading(true);

        const { data } = await httpClient.get('/users/me/meetings');

        setMeetings(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  return {
    error,
    isLoading,
    meetings,
  };
};
