const connection=require('../database/connection')

module.exports={
    async create(req,res){
        try {
            const dt=new Date()
           console.log(`${dt.getDate()}/${(dt.getMonth()+1)}/${dt.getFullYear()}`);
            const [dia]=await connection('dia_jogos').insert({dt_jogo:`${dt.getDate()}/${(dt.getMonth()+1)}/${dt.getFullYear()}`,
            ic_ativo:true})
            console.log(dia)
            res.send({dia})
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
    },

    async deletar(req,res){
       
            const {id}=req.params
            console.log(id);
      
        
        try {
            
            await connection('dia_jogos').where('id_jogo', id).delete();
            res.send('deletado');
        } catch (error) {
            res.send(`${error}`);
        }
    },
}