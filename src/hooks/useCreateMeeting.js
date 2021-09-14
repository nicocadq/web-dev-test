import { useCallback, useState } from 'react';

import httpClient from 'networking/httpClient';

export const useCreateMeeting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = useCallback(async (values) => {
    try {
      console.log(values);
      setIsLoading(true);

      await httpClient.post('/users/me/meetings', values);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    create,
    error,
    isLoading,
  };
};
