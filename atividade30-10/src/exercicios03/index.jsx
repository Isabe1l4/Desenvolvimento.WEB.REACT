// 3 - Criar um componente que mantém um contador do número de vezes que um botão foi clicado, mostre 
// o número de cliques na tela, use a forma literal do useState para fazer essa contagem.
import { useState } from "react"

export const exercicio03 = () => {

    const[estadoInicial, setEstadoInicial] = useState(0)

    function contar(){

        setEstadoInicial(estadoInicial + 1)
        //setEstadoInicial(prevState => prevState + 1)
        
    }

    return(
        <div>
        <span> Contou:{estadoInicial}</span>
        <button onClick={contar}>Contador</button>
    </div>
    )


}