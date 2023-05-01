import {CSSProperties} from "react";

export type Questionary = {
    id: number;
    video: string;
    text?: string;
    questions?: Questionary[];
}

export type VideoConfig = {
    onFinish?: () => void;
    containerStyle?: CSSProperties;
    videoStyle?: CSSProperties;
    videoClassName?: string;
    containerClassName?: string;
    orientation?: 'horizontal' | 'vertical';
    textContainerStyle?: CSSProperties;
    textContainerClassName?: string;
}
