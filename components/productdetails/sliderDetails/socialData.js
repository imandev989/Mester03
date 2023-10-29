import {
    BsInstagram,
    BsTelegram,
    BsWhatsapp,
    BsGoogle,
    BsFacebook,
    BsTwitter,
    BsYoutube,
    BsLinkedin,
  } from "react-icons/bs";
  
  
  

const Socials = {
    supprotPhone: "051-32614775",
    companyPhone: "09152614775",
    SocialsLinks: [
      {
        name: "Telegram",
        icon: <BsTelegram  />,
        link: "",
      },
      {
        name: "YouTube",
        icon: <BsYoutube  />,
        link: "",
      },
      {
        name: "Instagram",
        icon: <BsInstagram  />,
        link: "",
      },
      {
        name: "LinkedIn",
        icon: <BsLinkedin  />,
        link: "",
      },
      {
        name: "GooglePlus",
        icon: <BsGoogle  />,
        link: "",
      },
      {
        name: "Twitter",
        icon: <BsTwitter  />,
        link: "",
      },
      {
        name: "Facebook",
        icon: <BsFacebook  />,
        link: "",
      },
      {
        name: "Whatsapp",
        icon: <BsWhatsapp  />,
        link: "",
      },
    ],
  };


export const getSocials = () => {
    return Socials;
}