export const getComments = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    {
      method: "GET",
    }
  );
  return await response.json();
};
