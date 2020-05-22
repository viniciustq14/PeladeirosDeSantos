const connection=require('../database/connection')

module.exports={
    async create(req,res){
        try {
            const dt=new Date()
           
            await connection('dia_jogos').insert({dt_jogo:dt.getDate(),ic_ativo:true})
            const [teste]=await connection('dia_jogos').select('id_jogo')
            res.redirect(`/partidas/${teste}`)
        } catch (error) {
            res.send(`erro ${error}`)
        }
    },

    async show(req,res){
        try {
            const jogos=await connection('dia_jogos').select('*')
            res.send(jogos)
        } catch (error) {
            res.send(`erro ${error}`)
        }
    }
}