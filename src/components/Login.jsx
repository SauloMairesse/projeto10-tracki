export default function Login(){
    return(
        <>
            <img src="" alt="" />
            <form action="">
                <input type="text"  value={nameUser} 
                                    placeholder={'Nome Usuario'} 
                                    onChange={ (e) => setNameUser(e.target.value) }/>
                <input type="text"  value={passwordUser} 
                                    placeholder={'Senha'} 
                                    onChange={ (e) => setPasswordUser(e.target.value) }/>
            </form>
            <span> Ainda não possui Cadastro ? Cadastre-se </span>
        </>
    )
}