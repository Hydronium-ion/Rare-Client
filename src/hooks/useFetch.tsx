import { useState, useEffect } from 'react';

interface IFetchStatus {
  loading: boolean;
  error: boolean;
}

async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body.response;
}

const useFetch = <T,>(callback: Function, url: string) => {
  const [fetchStatus, setFetchStatus] = useState<IFetchStatus>({ loading: false, error: false });

  const fetchInitialData = async () => {
    setFetchStatus(prev => ({ ...prev, loading: true }));
    const fetchData = await http<T>(url);
    setFetchStatus({
      loading: false,
      error: false
    });
    callback(fetchData);
  };

  useEffect(() => {
    try {
      fetchInitialData();
    } catch (e) {
      setFetchStatus({
        error: true,
        loading: false
      });
    }
  }, []);

  return fetchStatus;
};

export default useFetch;
