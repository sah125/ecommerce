import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d-flex">
          <div className="left row">
            <section className="detail-info">
              <i className="fa fa-phone"></i>
              <label>+27 69 856 9893</label>
              <i className="fa fa-envelope"></i>
              <label>sah.sakhile@gmail.com</label>
            </section>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>✅</span>
            <label htmlFor="">EN</label>
            <span>✅</span>
            <label htmlFor="">ZAR</label>
          </div>
        </div>
      </section>
    </>
  );
};
export default Head;
