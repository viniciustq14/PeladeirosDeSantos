const express=require('express')
const routes=express.Router()
const jogador=require('./controllers/jogador')

routes.get('/',(req,res)=>{
    return res.send('Peladeiros2');
})

routes.post('/jogador',jogador.create);
routes.get('/jogadores',jogador.show);


module.exports=routes;