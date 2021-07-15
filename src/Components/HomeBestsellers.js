import React from 'react';
import { BsArrowDown } from "react-icons/bs";

function HomeBestsellers() {
    return (
        <div className="bestselling-product-wrap">
            <div className="bestselling-product-inner">
                <div className="wrap_title">
                    <h3 className="section-title">
                        <span>best selling products</span>
                    </h3>
                    <span className="section-subtitle">Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor!</span>
                </div>
                <div>
                    <div className="row products">
                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="./images/pr-09.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>form egg slicer</a></h3>
                                    <span className="price">$35.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="images/pr-01.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>cymbal pendant</a></h3>
                                    <span className="price"><del>$35.00</del><ins>$25.00</ins></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="images/pr-03.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>chair wood legs</a></h3>
                                    <span className="price">$30</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="images/pr-05.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>light oil lamp</a></h3>
                                    <span className="price">$60</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="images/pr-07.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>line cocktail shaker</a></h3>
                                    <span className="price">$65</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="images/pr-11.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>piep show</a></h3>
                                    <span className="price">$15</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="images/pr-13.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>herit chair</a></h3>
                                    <span className="price">$55</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="images/pr-15.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>buddy table lamp</a></h3>
                                    <span className="price">$35</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="images/pr-17.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>picto wall clock</a></h3>
                                    <span className="price">$15</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="images/pr-19.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>brush set small</a></h3>
                                    <span className="price">$65</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="images/pr-21.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>cru thermos jug</a></h3>
                                    <span className="price">$45</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="product-inner">
                                <div className="product-image">
                                    <a><img src="images/pr-23.jpg" /> </a>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"> <a>urkiola bowl</a></h3>
                                    <span className="price">$85</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products-footer">
                        <a className="product-btn" href="#">Load More <BsArrowDown/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBestsellers;