const formatEndpoint = (token, settings) => {
  const formattedUrl = Object.keys(settings).reduce(
    (acc, currSetting) => `${acc}${currSetting}=${settings[currSetting]}&`,
    'https://opentdb.com/api.php?',
  );
  return `${formattedUrl}token=${token}`;
};

export default async function fetchTriviaApi(token, settings) {
  const ENDPOINT = formatEndpoint(token, settings);
  console.log(ENDPOINT);
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
}
