const connection=require('../database/connection')

module.exports={
    async create(req,res){
        try {
            await connection('dia_jogos').insert({})
            res.send('sucesso')
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