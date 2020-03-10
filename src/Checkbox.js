import React from 'react';

function Checkbox(properties) {
    return (
        <input type="checkbox" checked={properties.stat} disabled={properties.disabled}></input>
    );
}

export default Checkbox;