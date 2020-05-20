const express=require('express')
const routes=express.Router()
const jogador=require('./controllers/jogador')
const dia_jogo=require('./controllers/diaJogo')


routes.get('/',(req,res)=>{
    return res.send('Peladeiros2');
})

routes.post('/jogador',jogador.create);
routes.get('/jogadores',jogador.show);
routes.get('/jogador/:id',jogador.showJogador);

routes.get('/dia',dia_jogo.create)
routes.get('/dias',dia_jogo.show)


module.exports=routes;