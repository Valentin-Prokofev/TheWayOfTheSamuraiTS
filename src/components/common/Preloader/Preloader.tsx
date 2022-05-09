import React from 'react';
import loading from "../../../Image/Hourglass.gif";

export const Preloader = () => {
    return (
        <div>
            <img src={loading} alt={"loading"}/>
        </div>
    );
};

