import { CSSProperties } from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: ({ label }: ButtonProps) => JSX.Element;

type Questionary = {
    id: number;
    video: string;
    text?: string;
    questions?: Questionary[];
};
type VideoConfig = {
    onFinish?: () => void;
    containerStyle?: CSSProperties;
    videoStyle?: CSSProperties;
    videoClassName?: string;
    containerClassName?: string;
    orientation?: 'horizontal' | 'vertical';
    textContainerStyle?: CSSProperties;
    textContainerClassName?: string;
};

interface VideoQuizProps {
    questionary: Questionary;
    width?: string | number;
    height?: string | number;
    config: VideoConfig;
}
declare const VideoQuiz: ({ questionary, width, height, config }: VideoQuizProps) => JSX.Element;

export { Button, VideoQuiz };
