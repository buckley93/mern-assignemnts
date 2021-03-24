import React, { useState } from 'react';

const ShowBox = (props) => {
    const { boxColors } = props;


    return (
        <div>
            {   
                boxColors.map((color, c) => (
                    <div key={c} style={{
                        display: 'inline-block',
                        height: "50px",
                        width: "50px",
                        backgroundColor: color,
                    }}>
                    </div>
                ))
            }
        </div>
    )
}

export default ShowBox;