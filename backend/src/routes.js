const express=require('express')
const routes=express.Router()
const jogador=require('./controllers/jogador')
const dia_jogo=require('./controllers/diaJogo')
const dia_jogador=require('./controllers/diajogador')

routes.get('/',(req,res)=>{
    return res.send('Peladeiros2');
})

routes.post('/jogador',jogador.create);
routes.get('/jogadores',jogador.show);
routes.get('/jogador/:id',jogador.showJogador);

routes.get('/dia',dia_jogo.create)
routes.get('/dias',dia_jogo.show)
routes.delete('/dia/:id',dia_jogo.deletar)

routes.post('/partidas/:id/convocar',dia_jogador.convocar)
routes.get('/partidas/:id',dia_jogador.show)


module.exports=routes;