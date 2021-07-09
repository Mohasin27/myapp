// JavaScript source code
import React from 'react';

function ShippingInfo() {
    return (
        <div className="shipping">
            <div className="shipping-info container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-25">
                        <div className="row no-gutters">
                            <div className="col-auto icon"><i className="las la-plane"></i></div>
                            <div className="col content">
                                <h3 className="title">Free Shipping</h3>
                                <p>Free shipping for all US order</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-25">
                        <div className="row no-gutters al_center_">
                            <div className="col-auto icon"><i className="las la-life-ring"></i></div>
                            <div className="col content">
                                <h3 className="title">Support 24/7</h3>
                                <p className="mg__0">we support 24 hours a day</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-25">
                        <div className="row no-gutters">
                            <div className="col-auto icon"><i className="las la-sync-alt"></i></div>
                            <div className="col content">
                                <h3 className="title">30 days return</h3>
                                <p>you have 30 days to return</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-25">
                        <div className="row no-gutters al_center_">
                            <div className="col-auto icon"><i className="las la-shield-alt"></i></div>
                            <div className="col content">
                                <h3 className="title">Payment 100% Secure</h3>
                                <p>Payment 100% Secure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default ShippingInfo;