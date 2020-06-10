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

        res.send(tabelas)
    },

    async escalar(req,res){
        const times=[
            timeA=  [],
            timeB=[]
        ]
        const {id}=req.params
        console.log(id)
        const escalado=await connection('diaJogadores').where('diaJogadores.id_diaJogo',id).
        innerJoin('jogadores','diaJogadores.id_jogador','=','jogadores.id_jogador').
        select('jogadores.nm_jogador').limit(4).
        orderBy([{column:'qt_partidas'},{column:'dt_escalado'}]);

        escalado.map(jogadores=>{
            const jogador= connection('jogadores').where('nm_jogador',jogadores.nm_jogador).select('*');
             console.log(jogador);
        })

        return res.send(escalado);
    }
}