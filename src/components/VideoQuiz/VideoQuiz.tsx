import React from 'react';
import {Questionary, VideoConfig} from "../../types/types";
import VideoComponent from "../VideoComponent";
import QuizProvider from "../../context/QuizProvider.context";

interface VideoQuizProps {
    questionary: Questionary,
    width?: string | number,
    height?: string | number,
    config: VideoConfig
}

const VideoQuiz = ({questionary, width = '300px', height = '600px', config}: VideoQuizProps) => {
    return (
        <QuizProvider>
            <div style={{width: width, height: height, objectFit: 'cover', overflow: "hidden", ...config?.containerStyle}} className={config?.containerClassName}>
                <VideoComponent
                    questionary={questionary}
                    config={config}
                />
            </div>
        </QuizProvider>
    )
}

export default VideoQuiz;
