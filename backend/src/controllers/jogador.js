const connection=require('../database/connection');

module.exports={
    async create(req,res) {
        const nm_jogador=req.body.name
        const id=crypto.randomBytes(4).toString('HEX')
try {
    await connection('jogadores').insert({
        id,
        nm_jogador,
        domingos_mes_passado:0,
        domingos_este_mes:0
    })

    return res.send('Sucesso')
} catch (error) {
    return res.send(error)
}
}
};