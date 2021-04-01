import React from 'react';

const Home = props => {
    console.log(props);
    if (!props.id) {
        return (
            <div>
                <h2>Welcome</h2>
            </div>
        );
    } if (isNaN(props.id)) {
        return (
            <div>
                <p style={props.fc
                    ? { color: props.fc, backgroundColor: props.bc }
                    : null
                }>
                    {props.id}
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <p>{props.id}</p>
            </div>
        );
    };
}

export default Home;