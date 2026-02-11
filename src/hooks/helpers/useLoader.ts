import { useState, useEffect } from "react";

export function useLoader<T>(asyncFn: () => Promise<T>) {
  
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    asyncFn()
      .then((res) => {
        if (!mounted) return;
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError((err as Error).message || "Something went wrong");
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [asyncFn]);

  return { data, loading, error };
}
