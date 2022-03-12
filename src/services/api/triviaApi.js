export default async function fetchTriviaApi(token) {
  const ENDPOINT = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
}
