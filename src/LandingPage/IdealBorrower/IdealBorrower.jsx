import React from 'react'
import handShake from "../../assets/images/hand_shake-01.svg";
export default function IdealBorrower() {
 return (
   <section className="full-view text-center fourth-view  container-fluid  p-0 items-group position-relative">
          <div className="row text-center w-100 mx-0">
            <div className="col-md-6 col-11 pb-3 text-white flex-column d-flex align-items-center justify-content-center">
              <h2 className="mt-3">How our ideal borrower looks like</h2>
              <ul className="mt-3">
                <li>Career Experience</li>
                <li>Monthly Income</li>
                <li>Financial History</li>
                <li>Type of Loan</li>
              </ul>
            </div>
            <div className="col-md-6 col-12  my-1">
              <img src={handShake} className="hand-shake" alt="" />
              <p>
                Our distinctive approach to our online credit scoring model
                looks at number of fundamental factors when being considered for
                a loan including:
              </p>
            </div>
          </div>
        </section>
 )
}
