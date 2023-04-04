import React from "react"
import {
    Category,
    Component,
    Variant,
    Palette,
} from "@react-buddy/ide-toolbox"
import {ComputersCanvas} from "../components/index.js";
import {BallCanvas} from "../components/index.js";

export const PaletteTree = () => (
    <Palette>
        <Category name="Canvas">
            <Component name="Computer">
                <Variant>
                    <ComputersCanvas />
                </Variant>
            </Component>
            <Component name="Ball">
                <Variant>
                    <BallCanvas />
                </Variant>
            </Component>
        </Category>
    </Palette>
)
