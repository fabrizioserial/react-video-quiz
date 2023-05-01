import React, {createContext, ReactNode, useState} from 'react';

type ContextType = {
    currentOption: number[];
    updateCurrentOption: (option?: number) => void;
}

export const Context = createContext<ContextType>(
    {
        currentOption: [],
        updateCurrentOption: () => {
        },
    });

interface QuizProviderProps {
    children: ReactNode;
}

const QuizProvider = ({children}:QuizProviderProps) => {
    const [currentOption, setCurrentOption] = useState<number[]>([]);

    const updateCurrentOption = (option?: number): void => {
        option && setCurrentOption([...currentOption, option]);
    }
    return (
        <Context.Provider value={{updateCurrentOption, currentOption}}>
            {children}
        </Context.Provider>
    )
}

export default QuizProvider;
