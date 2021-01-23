import { useState } from 'react';

type IRequestResult<T> = {
  data: T;
  loading: boolean;
  error?: string;
};

type IRequestOptions = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
};

export function useLazyRequest<T, V>(
  fetcher: (variables: V) => Promise<T>,
  options?: IRequestOptions,
): [fetch: (variables: V) => Promise<void>, result: IRequestResult<T>] {
  const [data, setData] = useState<T>(undefined!);
  const [error, setError] = useState(undefined);
  const [loading, setIsLoading] = useState(false);

  const fetchData = async (variables: V) => {
    setIsLoading(true);
    setError(undefined);

    try {
      const res = await fetcher(variables);
      if (options?.onSuccess) options.onSuccess();
      setData(res);
    } catch (error) {
      if (options?.onError) options.onError(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, { data, error, loading }];
}
