const connection=require('../database/connection')

module.exports={
    async convocar(req,res){
        const {id_jogo}=req.params;
        const {id_jogador}=req.body;

        try {
            await connection('diaJogadores').insert({
                id_diaJogo:id_jogo,
                id_jogador,
                qt_partidas:0
            })

            const jogadores=await connection('diaJogadores').where('id_diaJogo',id_jogo).select('*')
            res.send('convocado',jogadores)
        } catch (error) {
            res.send(` erroo : ${error}`);
        }

    },

    async show(req,res){
        const {id_jogo}=req.params
        res.send(`dia de jogo ${id_jogo}`)
    }
}