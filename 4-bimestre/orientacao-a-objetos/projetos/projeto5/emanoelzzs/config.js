function carregarConfig(){
    
return{
  porta: Number(process.env.PORT || 3000), 
  servico: process.env.SERVICO || "papelaria",
 ambiente: process.env.AMBIENTE || "desenvolvimento",
}
}

module.exports = { carregarConfig }