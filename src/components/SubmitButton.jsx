import React, { useState } from "react";


function SubmitButton() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(0)

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
            if ((count - 1) % 5 === 0) {
                setColor(2)
            } else {
                setColor(-1)
            }
        }

    }
    const addCount = () => {
        setCount(count + 1);
        if ((count + 1) % 5 === 0) {
            setColor(2)
        } else {
            setColor(1)
        }

    }

    return (
        <div>
            <hr />
            <h1>Count : <span className={color === 1 ? "text-success" : color === 2 ? "text-info" : "text-danger"}>{count}</span> </h1>
            <div className="d-flex gap-5 justify-content-center mt-5">
                <button className="btn btn-lg btn-danger" onClick={decreaseCount} > Decrease </button>
                <button className="btn btn-lg btn-success" onClick={addCount} > Increase </button>
            </div>
        </div>
    )
}

export default SubmitButton
