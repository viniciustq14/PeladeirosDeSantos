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
        } catch (error) {
            res.send(` erroo : ${error}`);
        }

    },

    show(req,res){
        res.send(`dia de jogo ${req.params}`)
    }
}