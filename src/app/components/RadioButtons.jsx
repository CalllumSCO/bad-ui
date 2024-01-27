'use client';

import React, { useState } from 'react';

function RadioButtonsComponent() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const radioButtons = [];

    for (let i = 0; i < 1000; i++) {
        const value = i.toString().padStart(2, '0');
        radioButtons.push(
            <label key={i}>
                {value}
                <input
                    type="radio"
                    value={value}
                    checked={selectedValue === value}
                    onChange={handleChange}
                />
            </label>
        );
    }

    return (
        <div>
            {radioButtons}
        </div>
    );
}

export default RadioButtonsComponent;