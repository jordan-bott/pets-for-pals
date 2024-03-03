const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not okay`);
  }

  // you don't have to await here, if you do, it adds a "tick" (a moment of latency)
  return apiRes.json();
};

export default fetchPet;
