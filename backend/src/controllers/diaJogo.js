const connection=require('../database/connection')

module.exports={
    async create(req,res){
        try {
            const dt=new Date()
           console.log(`${dt.getDate()}/${(dt.getMonth()+1)}/${dt.getFullYear()}`);
            const dia=await connection('dia_jogos').insert({dt_jogo:`${dt.getDate()}/${(dt.getMonth()+1)}/${dt.getFullYear()}`,
            ic_ativo:true})
            
            res.redirect(`/partidas/${dia}`)
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