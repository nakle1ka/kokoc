import { useState, useEffect } from "react";

export const useInfiniteScroll = (fetchMore: () => void, loading: boolean) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading &&
      !isFetching
    ) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, isFetching]);

  useEffect(() => {
    if (!isFetching) return;

    fetchMore();
    setIsFetching(false);
  }, [isFetching, fetchMore]);

  return [isFetching];
};
