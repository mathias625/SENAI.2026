const prisma = require("../data/prisma");
const { limiteInscricoes, inscricaoDuplicada, limiteVinteQHoras, promoverListaEspera } = require("../services/inscricoes.services");

const cadastrar = async (req, res) => {
    try {
        const data = req.body;

        await inscricaoDuplicada(data.usuariosId, data.eventosId)

        const status = await limiteInscricoes(data.eventosId);

        if(status != "") data.status = status;

        const item = await prisma.inscricoes.create({
            data
        });

        res.json(item).status(201).end();
    }catch (error) {
        res.json(error.toString()).status(500).end();
    }
};

const listar = async (req, res) => {
    const lista = await prisma.inscricoes.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.inscricoes.findUnique({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const item = await prisma.inscricoes.update({
        where: { id : Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    try {
        const { id } = req.params;

        const inscricao = await prisma.inscricoes.findUnique({
            where: { id: Number(id) }
        });

        await limiteVinteQHoras(inscricao.eventosId);

        const item = await prisma.inscricoes.delete({
            where: { id : Number(id) }
        });

        if(inscricao.status == "CONFIRMADA") {
            await promoverListaEspera(inscricao.eventosId);
        }

        res.json(item).status(200).end();
    } catch (error) {
        res.json(error.message).status(400).end();
    }
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}