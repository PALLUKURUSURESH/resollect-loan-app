import React from "react";
import './index.css'

const LoanCard=({data})=>{
    const {loanNo,loanType,borrower,borrowerAddress,coBorrowerName,coBorrowerAddress,currentDPD,sanctionAmount,region}=data
    return(
        <div className="loanCard">
            <input type="checkbox"/>
            <p>{loanNo}</p>
            <p>{loanType}</p>
            <p>{borrower}</p>
            <p>{borrowerAddress}</p>
            <p>{coBorrowerName}</p>
            <p>{coBorrowerAddress}</p>
            <p>{currentDPD}</p>
            <p>{sanctionAmount}</p>
            <p>{region}</p>
        </div>
    )
}

export default LoanCard