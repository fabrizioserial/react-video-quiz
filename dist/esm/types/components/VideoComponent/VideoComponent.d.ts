import './styles.scss';
import { Questionary, VideoConfig } from "../../types/types";
interface VideoComponentProps {
    questionary?: Questionary;
    config: VideoConfig;
}
declare const VideoComponent: ({ questionary, config }: VideoComponentProps) => JSX.Element;
export default VideoComponent;
