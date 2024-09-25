import React from 'react';


const KeyboardDetails = ({ model, overview, specifications, features, setupInstructions, troubleshooting, maintenance, support ,greet}) => {
    return (
        <div>
            <h3>{model}</h3>
            <img
        src="KeyBoard.jfif"
        alt="KBX-1000"
        className="keyboard-image"
        width={150}
        height={150}
            />
            <p>{overview}</p>
            <h4>Specifications:</h4>
            <ul>
                {specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                ))}
            </ul>
            <h4>Key Features:</h4>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <h4>Setup Instructions:</h4>
            <p>{setupInstructions}</p>
            <h4>Troubleshooting:</h4>
            <p>{troubleshooting}</p>
            <h4>Maintenance and Care:</h4>
            <p>{maintenance}</p>
            <h4>Warranty and Support:</h4>
            <p>{support}</p>
            <br></br>
            <p>{greet}</p>
        </div>
    );
};

export default KeyboardDetails;