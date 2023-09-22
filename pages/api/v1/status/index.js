function Status(request, response) {
  response.status(200).json({
    chave: "valor",
  });
}

export default Status;
