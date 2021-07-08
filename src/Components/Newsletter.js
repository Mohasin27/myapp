// JavaScript source code
import React from 'react';

function NewsletterSubscription() {
    return (
        <div className="newsletter">
            <div className="nt_bg_overlay">
                <div className="container">
                    <div className="wrap_title">
                        <h3 className="section-title ">
                            <span>subscribe our newsletter</span>
                        </h3>
                        <span className="section-subtitle">Sign up for our newsletter to be updated on the latest designs, exclusive offers, inspiration and tips!</span>
                    </div>
                    <form method="post" action="#" className="newsletter-form">
                        <div className="form-fields">
                            <div className="signup-newsletter-form row no-gutters ">
                                <div className="col-md col-12 col_email">
                                    <input type="email" name="email" placeholder="Your email address" className="input-text" required="required" />
                                </div>
                                <div className="col-md-auto col-12">
                                    <button type="submit" className="submit-btn truncate">
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default NewsletterSubscription;