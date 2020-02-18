import React from 'react'

export default function Summary() {
 return (
   <section className="full-view second-view items-group  container-fluid  p-0">
          <img
            className="back-accent"
            src="../../assets/images/kool-curve-02.svg"
            alt=""
          />
          <div className="row w-100 m-0 text-center mt-5">
            <h1 className="col-12 text-center">
              You need a loan? We have you covered
            </h1>
            <p className="col-12 text-center">
              Borrocracy helps to easily connect you to Lenders who are willing
              to invest in you.
            </p>
            <p className="col-12 text-center">
              WE OFFER A TOTALLY NEW WAY OF BORROWING BASED
            </p>
          </div>
          <div className="row justify-content-around px-2  items-group">
            <div className=" col-md-3 col-sm-8 col-11 my-3 cards text-center">
              <div className="card card__front w-100 text-center ">
                <div className=" bg-white text-center">
                  <i className="fa fa-chart-area fa-3x red-text"></i>
                  <h5 className=" mt-3">Integrity</h5>
                </div>
                <div className="read-more">Read</div>
              </div>
              <div className="card card__back ">
                <i className="fa fa-area-chart fa-3x red-text"></i>
                <h5 className=" mt-3 ">Integrity</h5>
                <p>
                  Our first focus is to connect you to lenders using the right
                  means. The right way gives a piece of mind and safty thats why
                  we connect you to get safe loans
                </p>
              </div>
              <div className="read-more">Read</div>
            </div>
            <div className=" col-md-3 col-sm-8 col-11 my-3  cards">
              <div className="card card__front">
                <div className=" bg-white text-center">
                  <i className="fa fa-book fa-3x cyan-text"></i>
                  <h5 className=" mt-3">Easy Online Experience</h5>
                </div>
                <div className="read-more">Read</div>
              </div>
              <div className="card card__back text-center">
                <i className="fa fa-book fa-3x cyan-text"></i>
                <h5 className=" mt-3">Easy Online Experience</h5>
                <p>
                  With our simple steps, in a few seconds Lenders are able to
                  view your request to give you a loan
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-8 col-11 my-3  cards">
              <div className="card card__front">
                <div className=" bg-white text-center">
                  <i className="fa fa-comments-dollar fa-3x orange-text"></i>
                  <h5 className=" mt-3">Quality</h5>
                </div>
                <div className="read-more">Read</div>
              </div>
              <div className="card card__back text-center">
                <i className="fa fa-comments-o fa-3x orange-text"></i>
                <h5 className=" mt-3">Quality</h5>
                <p>
                  We analyse you with our AI to make sure that you are getting
                  the loan you need.
                </p>
              </div>
            </div>
          </div>
        </section>

 )
}
