const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not okay`);
  }

  // you don't have to await here, if you do, it adds a "tick" (a moment of latency)
  return apiRes.json();
};

export default fetchBreedList;
