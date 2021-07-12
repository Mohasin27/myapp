import React from 'react';



function HomeCategoryBanner() {
    return (
        <div className="cat-banner-wrap">
            <div className="cat-banner-container">
                <div className="row cat-space">                         
                <div className="cat-banne-layout-top-left cat_space_item col-lg-4 col-md-4 col-12">
                    <div className="banner_hzoom">
                        <div className="banner_img cat-banner1"></div>
                        <a href="#url"></a>
                        <div className="banner_html">
                            <h3>lighting collections</h3>
                            <h4>Explorer</h4>
                        </div>
                    </div>
                </div>
                <div className="cat-banner-layout-bottom-right cat_space_item col-lg-4 col-md-4 col-12">
                    <div className="banner_hzoom">
                        <div className="banner_img cat-banner2"></div>
                        <a href="#url"></a>
                        <div className="banner_html">
                            <h3>audio decor</h3>
                            <h4>view collections</h4>
                        </div>
                    </div>
                </div>
                <div className="cat-banner-layout-top-left-black cat_space_item col-lg-4 col-md-4 col-12">
                    <div className="banner_hzoom" >
                        <div className="banner_img cat-banner3"></div>
                        <a href="#url"></a>
                        <div className="banner_html">
                            <h3>new arrivals</h3>
                            <h4>shop now</h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeCategoryBanner;
