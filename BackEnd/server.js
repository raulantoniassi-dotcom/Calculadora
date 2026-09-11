import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor da Calculadora funcionando!");
});

// Rota do Cálculo
app.post("/calculo", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const operacao = req.body.operacao;

  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ erro: "Números inválidos fornecidos." });
  }

  if (operacao === "+") {
    resultado = num1 + num2;
  } else if (operacao === "-") {
    resultado = num1 - num2;
  } else if (operacao === "*") {
    resultado = num1 * num2;
  } else if (operacao === "/") {
    if (num2 === 0) {
      return res.json({ resultado: "Erro: Divisão por 0" });
    }
    resultado = num1 / num2;
  } else if (operacao === "%") {
    resultado = num1 % num2;
  } else {
    return res.status(400).json({ erro: "Operação inválida." });
  }

  res.json({ resultado: resultado });
});

app.listen(port, () => {
  console.log(`Calculadora API rodando com sucesso na porta ${port}`);
});
