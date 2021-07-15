import React from 'react';
import { BsArrowRight } from "react-icons/bs";


function HomeMainBanner() {
    return (
        <div className="type_image_text_overlay">
            <div className="slide-banner">
                <div className="row">
                    <div className="col-12">
                        <div className="banner-middle-center">
                            <div className="banner-img"></div>
                            <div className="txt_content">
                                <div className="banner-txts">
                                    <h3 className="h1">interior decorations</h3>
                                    <div className="space_banner"></div>
                                    <h4 className="h1_libre">looking for furniture for your living room</h4>
                                    <div className="imt_space"></div>
                                    <a className="banner-btn" href="#url">shop now <BsArrowRight/></a>
                                </div>
                            </div>
                            <a href="shop-hidden-sidebar.html" className="pa t__0 l__0 b__0 r__0"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMainBanner;
