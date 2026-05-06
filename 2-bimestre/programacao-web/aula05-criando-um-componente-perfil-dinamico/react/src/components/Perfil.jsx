function Perfil() {
    let usuario = {
        nome: "Leticia",
        idade: 18,
        profissao: "cabelereira"
    }
    let verificaidade = 0
    if(usuario.idade >= 18){
        verificaidade = 1
    } else {
        verificaidade = 0
    }
    return (
        <>
        <h1>olá, esse é seu nome {usuario.nome}</h1>
        <h1>você tem {usuario.idade} anos</h1>
        <h1>essa é sua profissão {usuario.profissao}</h1>
        {verificaidade ? <p>você é maior de idade</p> : <p>você é menor de idade</p>}
        </>
    )
}

export default Perfil