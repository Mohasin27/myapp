import React from 'react';
import logo from '../images/logo.png';

function HeaderSection() {
    return (
        <header id="ntheader" className="ntheader">
            <div className="header-wrapper">
                <div className="container">
                    <div className="row al-center">
                        <div className="col-lg-5 col-md-4 col-6 ">
                            <a href="#" className="push-menu-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="26" viewBox="0 0 30 16">
                                    <rect width="30" height="1.5"></rect>
                                    <rect y="7" width="20" height="1.5"></rect>
                                    <rect y="14" width="30" height="1.5"></rect>
                                </svg>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 ">
                            <div className="branding">
                                <a className="dib" href="#">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4 col-lg-3 al-rt">
                            <div className="header-action">
                                <a className="icon_search" href="#"><i className="las la-search"></i></a>

                                <div className="my-account">
                                    <a href="#"><i className="las la-user"></i></a>
                                </div>
                                <a className="icon_like" href="#">
                                    <i className="lar la-heart pr"><span className="tcount">5</span></i>
                                </a>
                                <div className="icon_cart pr">
                                    <a href="#">
                                        <i className="las la-shopping-cart pr"><span className="tcount">3</span></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default HeaderSection;
