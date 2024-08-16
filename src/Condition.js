// Condition.js
import React from "react";

const Condition = () => {
    let age = 28;
     return (
        <>
        {/* Ternary operator */}
        <div>{age>18 ? <h1>Eligible For Vote</h1> 
        : <h1>Not Eligible For Vote</h1>}</div>
        </>
    );    
};
export default Condition;