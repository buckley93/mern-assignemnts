import React, { useState } from 'react';

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const { boxColors, setBoxColors } = props;


    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxColors([...boxColors, color]);
        setColor("");
    }

    // const allBoxes = Boxes.concat(color);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Color </label>
                <textarea
                    rows="1"
                    col="10"
                    placeholder=""
                    onChange={(e) => setColor(e.target.value)}
                    value={color}
                ></textarea>

                <input type="submit" value="create box" />
            </form>
            
            </div>

    )
}

export default BoxForm;