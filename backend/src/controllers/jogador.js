const connection = require('../database/connection');

module.exports = {
    async create(req,res) {
       
            const {nm_jogador,cd_telefone} = req.body
            if(nm_jogador)
                console.log(nm_jogador)
            
       
        
        try {
            await connection('jogadores').insert({
                nm_jogador,
                cd_telefone,
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
            //console.log(id)
       
        try {
            const jogador= await connection('jogadores').where('id_jogador',id).select('*');
            //console.log(jogador[0].id_jogador)
            if(jogador[0] !=null){
                return res.send(jogador);

            }
            else{
                return res.send('jogador nao existe' );
            }
        } catch (error) {
            console.log(`erro na busca ${error}`)
        }

    },
};