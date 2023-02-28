const calcularAleatorio = (numAleatorio) => {
  const randoms = Array.from({ length: numAleatorio }, () =>
    Math.floor(Math.random() * 1001)
  );
  const response = {};
  for (const num of randoms) {
    response[num] = response[num] ? response[num] + 1 : 1;
  }
  return response;
};
process.on("message", (numAleatorio) => {
  const response = calcularAleatorio(numAleatorio);
  process.send(response);
});
