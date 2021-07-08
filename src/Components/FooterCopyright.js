import React from 'react';

function FooterCopyright() {
    return (
        <div className="footer_bot">
            <div className="footer_bot_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            Copyright © 2021 <span className="cp">Hitachi Solutions</span> all rights reserved.
                            </div>
                        <div className="col-lg-6 col-md-12 col-12 col_2">
                            <ul id="footer-menu" className="clearfix">
                                <li className="menu-item">
                                    <a href="shop-filter-options.html">Shop</a>
                                </li>
                                <li className="menu-item">
                                    <a href="about-us.html">About Us</a>
                                </li>
                                <li className="menu-item">
                                    <a href="contact-us.html">Contact</a>
                                </li>
                                <li className="menu-item">
                                    <a href="blog-grid.html">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default FooterCopyright;