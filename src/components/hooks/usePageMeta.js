import { useEffect } from "react";

const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);
};

export default usePageMeta;