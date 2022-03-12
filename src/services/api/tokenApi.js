export default async function getTokenApi() {
  const result = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = result.json();
  return data;
}
