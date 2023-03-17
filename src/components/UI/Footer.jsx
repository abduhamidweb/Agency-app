import React from "react";
import "./styleFooter.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-12 footerInfoWrapp mx-auto">
              <h1 className="footerLogo m-0">LOGO</h1>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 mx-auto d-flex justify-content-center align-items-center">
                <span className="adressIcon d-flex justify-content-center align-items-center">
                <i class="bi bi-geo-alt fs-3"></i>
                </span>
              <div className="adressText ms-3">
              <p className="footerAddress m-0">
                Manzil: Toshkent shahri, Sergeli tumani, Navro’z ko’cha 3-uy.
              </p>
              <p className="footerAddress m-0">
                Mo’ljal: “ASIA AUTO” avtosalon ichki qismi
              </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mx-auto telWrapp">
              <a href="tel:+998 99 999 99 99" className="my-2"><i class="bi bi-telephone"></i>+998 99 999 99 99</a>
              <a href="tel:+998 99 999 99 99" className="my-2"><i class="bi bi-telephone"></i>+998 99 999 99 99</a>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 mx-auto msgWrapp ">
              <div className="footerMesengers fs-2 ">
                <a href="#" className="mx-2">
                  <i class="bi bi-telegram"></i>
                </a>
                <a href="#" className="mx-2">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" className="mx-2">
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
