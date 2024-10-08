import {useState} from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }    

    function limparEmail() {
        setUserEmail('')
    }

    return (        
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Digite aqui seu e-mail'></input>
            </form>
            <button onClick={enviarEmail}>
                Enviar e-mail
            </button>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
    )
}

export default Condicional