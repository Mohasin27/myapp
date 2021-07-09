import React from 'react';
import HomeCategoryBanner from './HomeCategoryBanner';
import HomeBestsellers from './HomeBestsellers';
import NewsletterSubscription from './Newsletter';
import ShippingInfo from './HomeShippingInfo';


function HomeSection() {
    return (
        <div id="nt_content" className="homecontent">
            <HomeCategoryBanner />
            <HomeBestsellers />
            <NewsletterSubscription />
            <ShippingInfo />
        </div>
    )
}

export default HomeSection;
