'use client'
import FooterOffers from "./footerOffers/FooterOffers";
import AboutContacts from "./footerAboutAndContatcUs/AboutContacts";
import FooterDescriptions from "./footerdescriptions/FooterDescriptions";
import SocialNetworks from "./socialnetworks/SocialNetworks";
import Subscription from "./subscription/Subscription";
import { usePathname } from 'next/navigation';


export function FooterComponent() {
  const pathname = usePathname();

  return (
    <div className="mt-8">
      <div className="container mx-auto">
        <div>
          <FooterOffers />
          <div className="hidden sm:block">
            <AboutContacts />
          </div>

          <SocialNetworks />
        </div>
      </div>
      <Subscription />
      <FooterDescriptions />
    </div>
  )
}

const Footer = () => {
  return (
    // { pathname === "/en/map" ? ("") : (<FooterComponent />)} 
    <FooterComponent/>
  )
    
  
};
export default Footer;


