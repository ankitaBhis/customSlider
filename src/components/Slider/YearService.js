import React, { useState, useEffect } from "react";

function ServiceYear(props) {
    const [year, setYear] = React.useState(0)
    const [value, onChange] = useState(1);
    const [gratuity, setGratuity] = React.useState(0)

    useEffect(() => {
        const ele = document.querySelector('.buble');
        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    })

    const valueChange = (e) => {
        setYear(e.target.value)
        onChange(e.target.value)
        setGratuity(15*props.data*e.target.value/26)    
    }

    return (
        <>
            <div class="input-group mb-3" style={{ width: "150px" }}>
                <h5>Years Of Service</h5>
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Years</span>
                </div>
                <input
                    value={year}
                    type="number"
                    onChange={(e) => valueChange(e)}
                    class="form-control"
                    aria-describedby="basic-addon1"
                />
            </div>
            <div className="slider-parent">
                <input id="slider" type="range" min="1" max="50" value={value}
                    onChange={({ target: { value: radius } }) => {
                        onChange(radius, setYear(value),setGratuity((15*props.data*radius)/26));
                    }}
                    style={{ width: "500px" }}
                />
                <div className="buble">
                    {value}
                </div>
                <h5>Total Gratuity Payable To You {gratuity}</h5>
            </div>
        </>
    );
}

export default ServiceYear
