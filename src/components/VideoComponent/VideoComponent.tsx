import React, {useContext, useEffect, useRef, useState} from 'react'
import './styles.scss'
import {Questionary, VideoConfig} from "../../types/types";
import {Context} from "../../context/QuizProvider.context";
import classNames from "classnames";

interface VideoComponentProps {
    questionary?: Questionary;
    config: VideoConfig
}

const VideoComponent = ({questionary, config}: VideoComponentProps) => {
    const context = useContext(Context);
    const ref = useRef(null)
    const {
        onFinish,
        textContainerClassName,
        textContainerStyle,
        videoClassName,
        videoStyle,
        orientation
    } = config

    const [isFinished, setFinished] = useState(false)
    const [disappear, setDisappear] = useState(false)
    const [play, setPlay] = useState(false)

    const optionSelected = context.currentOption.find(item => item === questionary?.id)
    const option1Selected = optionSelected && context.currentOption?.find(item => item === questionary?.questions?.[0]?.id)
    const option2Selected = optionSelected && context.currentOption?.find(item => item === questionary?.questions?.[1]?.id)

    const selectedOnly1 = option1Selected && !option2Selected
    const selectedOnly2 = !option1Selected && option2Selected

    const isLeaf = !(questionary?.questions && questionary?.questions?.length > 0)

    useEffect(() => {
        const timer = setTimeout(() => isFinished && setDisappear(true), 1000);
        return () => clearTimeout(timer);
    }, [isFinished]);

    useEffect(() => {
        if (!play && context.currentOption.find(item => item === questionary?.id)) {

            setPlay(true)
            setTimeout(() => {
                //@ts-ignore
                ref.current.play();
                //@ts-ignore
                ref.current.muted = false;
            }, 1000)

        }
    }, [ref, context.currentOption])


    return (
        <div className={classNames('videoContainer')}>
            {
                questionary?.questions && questionary?.questions?.length > 0 &&
                <div className={
                    classNames(
                        `option1 option1-${orientation}`,
                        {
                            [`open-${orientation}`]: isFinished,
                            [`full-${orientation}`]: selectedOnly1,
                            [`close-${orientation}`]: selectedOnly2
                        }
                    )
                }>
                    <div
                        className={
                            classNames(
                                'text-container',
                                {
                                    'close': option1Selected,
                                    [`${textContainerClassName}`]: !!textContainerClassName
                                }
                            )}
                        style={textContainerStyle}
                        onClick={() => {
                            context.updateCurrentOption(questionary?.questions?.[0]?.id)
                        }}
                    >
                        <h3 style={{color: 'white'}}>{questionary?.questions?.[0].text}</h3>
                    </div>
                    {questionary?.questions?.length > 0 && <VideoComponent questionary={questionary?.questions?.[0]} config={config}/>}

                </div>
            }
            <div className={
                classNames(
                    'video',
                    {
                        'close': isFinished && !isLeaf,
                        [`close-${orientation}`]: isFinished && !isLeaf,
                        'disappear': disappear && !isLeaf,
                        [`${videoClassName}`]: !!videoClassName
                    }
                )}>
                <video
                    onEnded={() => {
                        if (isLeaf) {
                            onFinish && onFinish()
                        } else {
                            setFinished(true)
                        }
                    }}
                    style={videoStyle}
                    preload="auto"
                    muted
                    ref={ref}
                    width={'100%'} height={'100%'}
                    src={questionary?.video}/>

            </div>
            {
                questionary?.questions && questionary?.questions?.length > 0 &&
                <div className={
                    classNames(
                        `option2 option2-${orientation}`,
                        {
                            [`open-${orientation}`]: isFinished,
                            [`full-${orientation}`]: selectedOnly2,
                            [`close-${orientation}`]: selectedOnly1

                        }
                    )
                }>
                    <div
                        className={
                            classNames(
                                'text-container',
                                {
                                    'close': option2Selected,
                                    [`${textContainerClassName}`]: !!textContainerClassName

                                }
                            )}
                        style={textContainerStyle}
                        onClick={() => {
                            context.updateCurrentOption(questionary?.questions?.[1]?.id)
                        }}
                    >
                        <h3 style={{color: 'white'}}>{questionary?.questions?.[1].text}</h3>
                    </div>
                    {questionary?.questions?.length > 0 && <VideoComponent questionary={questionary?.questions?.[1]} config={config}/>}

                </div>
            }

            <button style={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                backgroundColor: "transparent",
                borderRadius: 12,
                cursor: "pointer",
                color: 'white',
                borderStyle: 'none',
                display: context.currentOption.length === 0 ? 'block' : 'none'
            }} onClick={() => context.updateCurrentOption(1)} title={'Play'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                    <path
                        d="M22.9243 12.1368C24.3586 12.9649 24.3586 15.035 22.9243 15.8631L3.56213 27.0419C2.12789 27.8699 0.335093 26.8348 0.335093 25.1787L0.335094 2.82119C0.335094 1.16508 2.12789 0.130005 3.56213 0.958062L22.9243 12.1368Z"
                        fill="white"/>
                </svg>
            </button>
        </div>
    )
}

export default VideoComponent
