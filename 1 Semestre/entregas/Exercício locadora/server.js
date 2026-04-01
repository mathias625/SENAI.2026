require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


 const TurmasRotas = require("./src/routes/turmas.routes");
 app.use("/turmas", TurmasRotas);


const porta = process.env.PORT_APP || 3000;

app.listen(porta, () => {
    console.log(`Online na porta ${porta}`);
});