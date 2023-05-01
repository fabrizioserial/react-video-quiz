
# 📼 React Video Quiz 📼

```typescript
import {VideoQuiz} from "react-video-quiz";
```

<br/>
<br/>

## 🧾 TODO
- [x] Continuous Delivery
- [ ] Add prettier
---
- [ ] Test in different browsers
- [ ] Test with different video sources
- [ ] Test in mobile and tablet
- [ ] Add tests
---
- [ ] Add more documentation
- [ ] Add more examples

<br/>
<br/>
<br/>

## 🖥️ Install

To install the library, please run the following code in your terminal:
```bash
npm install react-video-quiz
```
<br/>
<br/>

## 🧾 Props

`<VideoQuiz>` component:

Property | Type              | Default | Required | Description
-------- |-------------------|--------|----------|-----------
questionary | `Object`          | none   | yes      | The questionary object, see the questionary API below
width | `string` `number` | '300px' | no       | Possible values for width can be 100% or 300px or 300
height | `string` `number` | '600px' | no       | Possible values for width can be 100% or 600px or 600
config | `Object`          | none   | no       | The configuration object, see the options API below

<br/>
<br/>

## 🧾 Questionary API

```tsx
type Questionary = {

    id: number;

    video: string;

    text?: string;

    questions?: Questionary[];

}
```
<br/>
<br/>

## 🧾 Configuration API

```tsx
 type VideoConfig = {
    
    onFinish?: (args?: any) => ( void | {} );
    
    containerStyle?: CSSProperties;
    
    videoStyle?: CSSProperties;
    
    videoClassName?: string;
    
    containerClassName?: string;
    
    orientation?: 'horizontal' | 'vertical';
    
    textContainerStyle?: CSSProperties;
    
    textContainerClassName?: string;
    
}

```


### `onFinish`
Type: `(args?: any) => ( void | {} )`

Callback function that will be called when the user finishes the quiz.

### `orientation`
Type: `'horizontal' | 'vertical'`

Orientation of the component, can be horizontal or vertical.

### `containerStyle`
Type: `CSSProperties`

Style object for the container of the component.

### `containerClassName`
Type: `string`

Class name for the container of the component.

### `videoStyle`
Type: `CSSProperties`

Style object for the video element.

### `videoClassName`
Type: `string`

Class name for the video element.

### `textContainerStyle`
Type: `CSSProperties`

Style object for the text container.

### `textContainerClassName`
Type: `string`

Class name for the text container.



## 🧪 Example

```tsx
import React from 'react';
import { VideoQuiz } from 'react-video-quiz';

export function MyApp() {
    const questionary = {
        id: 1,
        video: VideoShort,
        questions: [
            {
                id: 2,
                video: VideoShort,
                text: "opcion 2",
                questions: [
                    {
                        id: 4,
                        video: VideoShort,
                        text: "opcion 4",
                    },
                    {
                        id: 5,
                        video: VideoShort,
                        text: "opcion 5",
                    }
                ]
            },
            {
                id: 3,
                video: VideoShort,
                text: "opcion 3",
                questions: [
                    {
                        id: 6,
                        video: VideoShort,
                        text: "opcion 6",
                    },
                    {
                        id: 7,
                        video: VideoShort,
                        text: "opcion 7",
                    }
                ]
            }
        ]
    }
    
    return(
        <VideoQuiz
            questionary={questionary}
            width={300}
            height={600}
            config={{
                onFinish: () => {
                    console.log('Quiz finished');
                }
            }}
        />
    )
}

```
<br/>
<br/>

## 🏛️ License

React Video Quiz is released under MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.

