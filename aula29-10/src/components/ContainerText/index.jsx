import { ButtonComp } from "../ButtonComp"

export const ContainerText = (children, nome) => {

  return (

    <div>
        <ButtonComp nome="Botao no ContainerText"/>

            Esse é o componente ContainerText do {nome}
    
            {children}    
    </div>

  )
}
