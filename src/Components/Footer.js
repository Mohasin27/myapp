import React from 'react';
import FooterLinks from './FooterLinks';
import FooterCopyright from './FooterCopyright';


function FooterSection() {
    return (
        <footer className="footer">
            <FooterLinks />
            <FooterCopyright />
         </footer>
        )
}

export default FooterSection;