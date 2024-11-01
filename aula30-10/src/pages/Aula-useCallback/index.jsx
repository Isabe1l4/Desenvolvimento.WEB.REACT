import React, { useCallback, useState } from 'react' //componente nativo do react
import { Container } from "./style";
// (() => {}) isso é uma arow function

export const AulaUseCallback = () => {

  const [count, setCount] = useState(0);

  const aumentar = useCallback(() => {
  setCount(prevState => prevState +1); //forma de Callback
  //setCount(count+1) forma literal

  }, [])
  
  return (
    <Container>
      <h1> AulaUseCallback </h1>
      <h> Contador: {count} </h>
      <button onClick={() => setCount(count+1)}> Aumentar Botão 1</button>

      <FilhoDoCalback/>
    </Container>

  )
}

const FilhoDoCallback = React.memo(() => {
  console.log('FilhoDoCallback')
    return(
      <div> Olá </div>
    )
})

//React.memo() useCallback + memo, não repete no site