import NotFoundContent from "../components/NotFound/NotFoundContent";
import usePageMeta from "../components/hooks/usePageMeta";

export const NotFound = () => {
  usePageMeta(
    "Page Not Found | Canien Tech",
    "The requested page could not be found."
  );

  return <NotFoundContent />;
};