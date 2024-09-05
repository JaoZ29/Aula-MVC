import express  from "express";
import cors from 'cors';
import { DatabaseModel } from "./model/DatabaseModel";
const port: number =3333

const server = express();
server.use(cors());
server.use(express.json());


server.get('/',(req, res) => {
    res.json({mensagem:"Olá mundo,esta é a minha primeira aplicação web"});
});


server.get('/pessoas',(req, res) => {
    res.json({mensagem:"Aqui será armazenado os dados das pessoas."});
});

new DatabaseModel().testeConexao().then((resdb) => {
    if (resdb) {
    console.log("Conexao com o banco de dados realizada com sucesso!");

    server.listen(port, ()=> {
        console.log(`Servidor iniciando no endereço http://localhost:${port}`);
    });
}else { 
    console.log(`Servidor rodando no endereço http://localhost:${port}`);
    }
});