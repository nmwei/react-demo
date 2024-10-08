import React, { useState } from 'react';
import template from "./performance-problem-template.png";
import data_management from "./data_management.svg";
import { Select } from "antd"

const App = () => {
    const [value, setValue] = useState("normal");

    return (
        <div style={{background: "red"}}>
            <h1 style={{
                position: "absolute",
                top: "100px",
                background: "blue",
                color: "orange",
                mixBlendMode: value
            }}
            >
                一级标题 一级标题 一级标题 一级标题 一级标题 一级标题 一级标题
            </h1>
            <img src={template} width={500}/>
            <img src={data_management}/>
            <div>
                <Select
                    style={{
                        width: 200
                    }}
                    onChange={v => setValue(v)}
                    value={value}
                    options={[
                        {value: "normal", label: "normal 正常"},
                        {value: "multiply", label: "multiply 正片叠底"},
                        {value: "screen", label: "screen 滤色"},
                        {value: "overlay", label: "overlay 叠加"},
                        {value: "darken", label: "darken 变暗"},
                        {value: "lighten", label: "lighten 变亮"},
                        {value: "color-dodge", label: "color-dodge 颜色减淡"},
                        {value: "color-burn", label: "color-burn 颜色加深"},
                        {value: "hard-light", label: "hard-light 强光"},
                        {value: "soft-light", label: "soft-light 柔光"},
                        {value: "difference", label: "difference 差值"},
                        {value: "exclusion", label: "exclusion 排除"},
                        {value: "hue", label: "hue 色相"},
                        {value: "saturation", label: "saturation 饱和度"},
                        {value: "color", label: "color 颜色"},
                        {value: "luminosity", label: "luminosity 亮度"},
                    ]}
                />
            </div>
        </div>
    );
};

export default App;
