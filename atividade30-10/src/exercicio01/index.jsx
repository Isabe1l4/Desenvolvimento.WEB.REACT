import { useReducer } from "react";

export const ExercicioReducer = () => {
    const estadoInicial = { count: 0 };

    function usandoReducer(state, action) {
        switch (action.type) {
            case 'Aumentar':
                return { count: state.count + 1 };
            case 'Diminuir':
                return { count: state.count - 1 };
            case 'Resetar':
                return estadoInicial;
            default:
                throw new Error(`Ação desconhecida: ${action.type}`); 
            }
        }
    
        const [state, dispatch] = useReducer(usandoReducer, estadoInicial);
    
        return (
            <div>
                <span>Contador: {state.count}</span>
                <button onClick={() => dispatch({ type: 'Aumentar' })}>Aumentar</button>
                <button onClick={() => dispatch({ type: 'Diminuir' })}>Diminuir</button>
                <button onClick={() => dispatch({ type: 'Resetar' })}>Resetar</button>
            </div>
        );
    };