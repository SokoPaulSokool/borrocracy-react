import React from 'react';
import "./LoansVariety.scss";
import educationLoan from "../../assets/images/icons/education-loan-580x533.jpg";
import businessLoan from "../../assets/images/icons/boda.png";
import homeLoan from "../../assets/images/icons/HOME-LOAN-580x533.jpg";
import personalLoan from "../../assets/images/icons/personal-loans-580x532.jpg";

export default function LoansVariety() {
 return (
  <section className="full-view sixth-view  container-fluid  p-0">
          <div className="row w-100 m-0 text-center my-5">
            <h1 className="col-12 text-center">
              There are a variety of loans for you to choose from
            </h1>
            <p className="col-12 text-center">
              of the advanced architecture of system we use to provide
            </p>
          </div>
          <div className="container text-center">
            <div className="row justify-content-around  items-group">
              <ul className="col-12 d-flex justify-content-around">
                <li className="card my-2">
                  <img src={educationLoan} className="rounded" alt="" />
                  <h5 className="">
                    Education Loans
                    <i className="fa fa-angle-right font-weight-bold"></i>
                  </h5>
                  <div className="cover"></div>
                </li>
                <li className="card my-2">
                  <img src={businessLoan} className="rounded" alt="" />
                  <h5 className="">
                    Bussiness Loans
                    <i className="fa fa-angle-right font-weight-bold"></i>
                  </h5>
                  <div className="cover"></div>
                </li>
                <li className="card my-2">
                  <img src={homeLoan} className="rounded" alt="" />
                  <h5 className="">
                    Home Loans
                    <i className="fa fa-angle-right font-weight-bold"></i>
                  </h5>
                  <div className="cover"></div>
                </li>
                <li className="card my-2">
                  <img src={personalLoan} className="rounded" alt="" />
                  <h5 className="">
                    Personal Loans
                    <i className="fa fa-angle-right font-weight-bold"></i>
                  </h5>
                  <div className="cover"></div>
                </li>
              </ul>
            </div>
          </div>
        </section>

 )
}
