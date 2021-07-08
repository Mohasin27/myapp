import React from 'react';

import NewsletterSubscription from './Newsletter';
import ShippingInfo from './HomeShippingInfo';

function HomeSection() {
    return (
        <div id="nt_content" className="homecontent">
            <NewsletterSubscription />
            <ShippingInfo />
        </div>
        )
}

export default HomeSection;
