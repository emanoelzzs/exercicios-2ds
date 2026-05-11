import "../styles/profile.css"

function Profile({nome, idade, profissao, imagem, descricao}) {
        return(
            <>
            <div className="profile-card">
                <div className="card">
                    <img src={imagem} alt={descricao} />
                    <p className="nome">{nome}</p>
                    <div className="infos">
                    <p>Idade: {idade}</p>
                    <p>Profissão: {profissao}</p>
                    </div>
                </div>
            </div>
            </>
        )
}

export default Profile