const connection=require('../database/connection')

module.exports={
    async convocar(req,res){
        const id_jogo=req.params;
        const {id_jogador}=req.body;

        console.log(id_jogador)
        console.log(id_jogo)

        try {
            await connection('diaJogadores').insert({
                id_diaJogo:id_jogo.id,
                id_jogador,
                qt_partidas:0
            })

           // const jogadores=await connection('diaJogadores').where('id_diaJogo',id_jogo).select('*')
            res.send('convocado')
        } catch (error) {
            res.send(` erroo : ${error}`);
        }

    },

    async show(req,res){
        const id_jogo=req.params;
        console.log(id_jogo.id);

        const tabelas=await connection('diaJogadores').select('*');
        console.log(tabelas)

        res.send(`dia de jogo ${id_jogo.id}`)
    }
}