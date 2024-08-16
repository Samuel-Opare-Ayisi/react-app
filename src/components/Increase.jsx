import { useState } from "react";

const Increase = () => {
    const [value, setValue] = useState(0);

    
    return (
    <>
    <button className="btn btn-warning" onClick={() => {setValue(value + 1)}}>+</button>
    <input type="text" className="" />
    <button className="btn btn-danger">-</button>
    
    </>
    )
}

export default Increase;