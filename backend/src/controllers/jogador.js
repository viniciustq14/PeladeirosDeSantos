const connection = require('../database/connection');

module.exports = {
    async create(req,res) {
        try {
            const nm_jogador = req.body
            if(nm_jogador)
                console.log(nm_jogador)
            
        } catch (error) {
            console.log(`erro no recebimento *${error}*`)
            return false
        }
        
        try {
            await connection('jogadores').insert({
                nm_jogador,
                domingos_mes_passado: 0,
                domingos_este_mes: 0
            })
            console.log('certo')
            return res.send('Sucesso')
        } catch (error) {
            console.log(`erro no banco  ${error}`)
        }
    },
};