

export default function Register(){
    
    return(
        <LoginScreen>
            <img src="../images/Group8.png" alt="" />
            <form action="">
                <input type="text"  value={nameUser} 
                                    placeholder={'Email'} 
                                    onChange={ (e) => setNameUser(e.target.value) }/>
                <input type="text"  value={passwordUser} 
                                    placeholder={'Senha'} 
                                    onChange={ (e) => setPasswordUser(e.target.value) }/>
                <button> Entrar </button>
            </form>
            <Link to={`/cadastro`}> <span> Ainda não possui Cadastro ? Cadastre-se </span> </Link>
        </LoginScreen>
    )
}