

export default function Register(){

    return(
        <RegisterScreen>
            <img src="../images/Group8.png" alt="" />
            <form action="">
                <input type="text"  value={nameUser} 
                                    placeholder={'Email'} 
                                    onChange={ (e) => setNameUser(e.target.value) }/>
                <input type="text"  value={passwordUser} 
                                    placeholder={'Senha'} 
                                    onChange={ (e) => setPasswordUser(e.target.value) }/>
                <input type="text"  value={nameUser} 
                                    placeholder={'Email'} 
                                    onChange={ (e) => setNameUser(e.target.value) }/>
                <input type="text"  value={passwordUser} 
                                    placeholder={'Senha'} 
                                    onChange={ (e) => setPasswordUser(e.target.value) }/>
                <button> Cadastrar </button>
            </form>
        </RegisterScreen>
    )
}