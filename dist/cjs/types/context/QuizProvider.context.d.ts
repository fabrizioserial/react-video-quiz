import React, { ReactNode } from 'react';
type ContextType = {
    currentOption: number[];
    updateCurrentOption: (option?: number) => void;
};
export declare const Context: React.Context<ContextType>;
interface QuizProviderProps {
    children: ReactNode;
}
declare const QuizProvider: ({ children }: QuizProviderProps) => JSX.Element;
export default QuizProvider;
