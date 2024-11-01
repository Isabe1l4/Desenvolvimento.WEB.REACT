import { Container } from "./style";

export const AulaUseRef = () => {

  //const inputRef = React.useRef() forma antiga de usar um componente nativo
  const inputRef =  ufeRef();
    
  const focusInput = () => {
    inputRef.current.focus(); // a borda preta em cima do cursor para digitar

  }

  const [timer, setTimer] = useState (0);
  const timerInitial = useRef();

  const darInicioAoTimer = () => {
    timerInitial.current = setInterval(() => {
    setTimer(prevSeconds => prevSeconds + 1)

    }, 1000)

  }

  const pararTimer = () => {
    clearInterval(timerInitial.current)

  }

  return (
    <Container>
      <p id="tituloaula">Aula useRef</p>

      <input ref={inputRef} type="text" placeholder = "Digite seu email"/>

      <button onClick={focusInput}> Click </button>

      <h2> Tempo correndo: {timer}</h2>
      <button onClick ={darInicioAoTimer}> Iniciar </button>
      <button onClick ={pararTimer}> Pausar </button>
   
    </Container>

  )
}