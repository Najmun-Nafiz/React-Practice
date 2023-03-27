import React from "react";


function First(props) {
    const { name, village } = props;
    return <div>
                <h1>{name}</h1>
                <h1>{village}</h1>
            </div>
}

export default First;