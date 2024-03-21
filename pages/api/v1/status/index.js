import database from "infra/database.js";

async function Status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  response.status(200).json({
    chave: "valor",
  });
}

export default Status;
