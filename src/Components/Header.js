import React from 'react';
import logo from '../images/logo.png';
import * as BsIcon from "react-icons/bs";
import SideNavigation from "../Components/Toolbar/SideNavigation";
import { IoCartOutline } from "react-icons/io5";

const HeaderSection = props =>  (
        <header id="ntheader" className="ntheader">
            <div className="header-wrapper">
                <div className="container">
                    <div className="row al-center">
                        <div className="col-lg-5 col-md-4 col-6 ">
                            <SideNavigation />
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
                                <a className="icon_search" href="#"> <BsIcon.BsSearch/> </a>

                                <div className="my-account">
                                    <a href="#"><BsIcon.BsPerson/></a>
                                </div>
                                <a className="icon_like" href="#">
                                    <BsIcon.BsHeart/><span className="tcount">5</span>
                                </a>
                                <div className="icon_cart pr">
                                    <a href="#">
                                        <IoCartOutline/> <span className="tcount">3</span> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )


export default HeaderSection;
