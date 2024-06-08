export const generateMetadata = async ({ params }) => {
  const query = decodeURIComponent(params.name);

  return {
    title: "Поиск " + query,
  };
};

export default function layout({ children }) {
  return <div>{children}</div>;
}
