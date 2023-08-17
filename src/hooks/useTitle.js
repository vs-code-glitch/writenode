import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - writeNode`;
  }, [title]);

  return null;
};
