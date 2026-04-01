const prisma = require("../data/prisma")

const limiteInscricoes = async(eventosId) => {
    const evento = await prisma.eventos.findUnique({
        where: { id : eventosId },
        include: {
            inscricoes: true
        }
    });

    const numeroInscricoes = evento.inscricoes.filter(inscricao => inscricao.status == "CONFIRMADA").length;

    if(numeroInscricoes == evento.capacidade_maxima) {
        return "LISTA_ESPERA";
    } else {
        return "";
    }
};

const inscricaoDuplicada = async (usuarioId, eventoId) => {
    const evento = await prisma.eventos.findUnique({
        where: { id : eventoId },
        include: {
            inscricoes: true
        }
    });

    const inscrito = evento.inscricoes.filter(inscricao => inscricao.usuariosId == usuarioId).length;

    if(inscrito == 1) {
        throw new Error("Usuario ja inscrito no evento");
    }
};

const limiteVinteQHoras = async (eventoId) => {
    const evento = await prisma.eventos.findUnique({
        where: { id: eventoId }
    });

    const agora = new Date();
    const dataEvento = new Date(evento.data_evento);

    const diferenca = dataEvento - agora;
    const horas = diferenca / (1000 * 60 * 60);

    if(horas < 24) {
        throw new Error("Cancelamento não permitido. Prazo de 24 horas já passou.");
    }
};

const promoverListaEspera = async (eventoId) => {
    const proximo = await prisma.inscricoes.findFirst({
        where: {
            eventosId: eventoId,
            status: "LISTA_ESPERA"
        },
        orderBy: {
            id: "asc"
        }
    });

    if(proximo) {
        await prisma.inscricoes.update({
            where: { id: proximo.id },
            data: { status: "CONFIRMADA" }
        });
    }
};

const encerrarListaEspera = async (eventoId) => {
    await prisma.inscricoes.updateMany({
        where: {
            eventosId: eventoId,
            status: "LISTA_ESPERA"
        },
        data: {
            status: "CANCELADA"
        }
    });
};

module.exports = {
    limiteInscricoes,
    inscricaoDuplicada,
    limiteVinteQHoras,
    promoverListaEspera,
    encerrarListaEspera
}