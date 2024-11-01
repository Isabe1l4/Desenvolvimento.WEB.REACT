import { ButtonComp } from "../../components/ButtonComp"
import { ContainerText } from "../../components/ContainerText"


export const Home = () => {

    function entrarNaPagina() {
        alert('Essa função é para logar')
    }
    function esqueciMinhaSenha() {
        alert('Essa função é de esqueci minha senha')
    }
    function cadastrarUsuario() {
        alert('Essa função é para cadastrar')
    }
    
    return (
        <div>
            
            <ContainerText nome="Isabella">
                <span>
                    Olá, eu sou o filho
                </span>
            </ContainerText>

            <ButtonComp
                nome="Cadastrar"
                funcao={cadastrarUsuario}
            />

            <ButtonComp
                nome="Entrar"
                funcao={entrarNaPagina}
            />

            <ButtonComp
                nome="Esqueci minha senha"
                funcao={esqueciMinhaSenha}
            />

        </div>
    )
}