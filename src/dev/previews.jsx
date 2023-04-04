import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {BallCanvas} from "../components/index.js";
import {technologies} from "../constants/index.js";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/BallCanvas">
                <BallCanvas icon={technologies[0].icon}/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews