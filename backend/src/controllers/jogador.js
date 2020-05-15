const connection = require('../database/connection');

module.exports = {
    async create(req,res) {
       
            const {nm_jogador} = req.body
            if(nm_jogador)
                console.log(nm_jogador)
            
       
        
        try {
            await connection('jogadores').insert({
                nm_jogador,
                domingos_mes_passado: 0,
                domingos_este_mes: 0,
            })
            console.log('certo')
            return res.send('Sucesso')
        } catch (error) {
            console.log(`erro no banco  ${error}`)
        }
    },

    async show(req,res){
        const jogadores= await connection('jogadores').select('*');

        return res.send(jogadores);
    },
    async showJogador(req,res){
       
            const {id}=req.params;
            console.log(id)
       
        try {
            const jogadores= await connection('jogadores').where('id_jogador',id).select('*').fist();
            return res.send(jogadores);
            
        } catch (error) {
            console.log(`erro na busca ${error}`)
        }

    },
};