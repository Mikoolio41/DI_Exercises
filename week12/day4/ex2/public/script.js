const johnDoe = async () => {
  const response = await fetch("http://localhost:3000");
  console.log(response);
  const json = response.json;
  console.log(json);
};
johnDoe();
