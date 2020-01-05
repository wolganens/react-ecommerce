import React from 'react';

import './form-input.styles.scss';

export default ({label, handleChange, ...otherProps}) => (
    <div className="group">
        <input
            className="form-input"
            onChange={handleChange} 
            {...otherProps}
        />
        {
            label ? (
                <label className={`${otherProps.value.length ? 'srhink' : ''} form-input-label`}>
                    {label}
                </label>
            ) : null
        }
    </div>
)