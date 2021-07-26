import React from 'react';
import DemoCarousel from './HomeMainBanner';
import HomeCategoryBanner from './HomeCategoryBanner';
import HomeBestsellers from './HomeBestsellers';
import NewsletterSubscription from './Newsletter';
import ShippingInfo from './HomeShippingInfo';


function HomeSection() {
    return (
        <div id="nt_content" className="homecontent">
            <DemoCarousel />
            <HomeCategoryBanner />
            <HomeBestsellers />
            <NewsletterSubscription />
            <ShippingInfo />
        </div>
    )
}

export default HomeSection;
