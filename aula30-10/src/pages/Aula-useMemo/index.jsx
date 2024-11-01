import { Container } from "./style";

export const AulaUseMemo = () => {
  
  const arrayruits = ['Uva', 'Maca', 'Banana', 'Melao', 'Morango', 'Melancia']

  const [valueInput, setValueInput] = useState( ' ')

  const frutasFiltradas = useMemo (() => {
    return futras.filter(fruta => fruta.toLowerCase().includes(valueInput.toLowerCase()));
    }, [valueInput])


  return (
    <Container>
      <p>Aula useMemo</p>

      <input
      type = "text"
      placeholder = 
    </Container>
  );
};