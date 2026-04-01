const prisma = require("../data/prisma")

const validarExclusaoEvento = async (eventoId) => {
    const evento = await prisma.eventos.findUnique({
        where: { id: eventoId },
        include: {
            inscricoes: true
        }
    });

    const agora = new Date();
    const dataEvento = new Date(evento.data_evento);

    if(agora > dataEvento) {
        throw new Error("Evento já aconteceu e não pode ser excluído");
    }

    const confirmados = evento.inscricoes.filter(i => i.status == "CONFIRMADA").length;

    if(confirmados > 0) {
        throw new Error("Evento possui participantes e não pode ser excluído");
    }
};

module.exports = {
    validarExclusaoEvento
}