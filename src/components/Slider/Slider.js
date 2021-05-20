import React, { useState, useEffect } from "react";

function RangeSlider(props) {
    const [income, setIncome] = React.useState(0)
    const [value, onChange] = useState(1);

    useEffect(() => {
        const ele = document.querySelector('.buble');
        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    })

    const valueChange = (e) => {
        setIncome(e.target.value)
        onChange(e.target.value)
        props.data.getIncome(e.target.value)
    }

    return (
        <>
            <div class="input-group mb-3" style={{ width: "150px" }}>
                <h5>Monthly Income</h5>
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Rs.</span>
                </div>
                <input
                    type="number"
                    value={income}
                    onChange={(e) => valueChange(e)}
                    class="form-control"
                    aria-describedby="basic-addon1"
                />
            </div>
            <h6>Basic salary + Dearness Allowance</h6>
            <div className="slider-parent">
                <input id="slider" type="range" min="1" max="100000" value={value}
                    onChange={({ target: { value: radius } }) => {
                        onChange(radius, setIncome(radius));
                    }}
                    style={{ width: "500px" }}
                />
                <div className="buble">
                    {value}
                </div>
            </div>
        </>
    );
}

export default RangeSlider
