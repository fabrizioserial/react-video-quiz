import { Questionary, VideoConfig } from "../../types/types";
interface VideoQuizProps {
    questionary: Questionary;
    width?: string | number;
    height?: string | number;
    config: VideoConfig;
}
declare const VideoQuiz: ({ questionary, width, height, config }: VideoQuizProps) => JSX.Element;
export default VideoQuiz;
