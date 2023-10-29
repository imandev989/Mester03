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
        icon: <BsTelegram className="text-2xl" />,
        link: "",
      },
      {
        name: "YouTube",
        icon: <BsYoutube className="text-2xl" />,
        link: "",
      },
      {
        name: "Instagram",
        icon: <BsInstagram className="text-2xl" />,
        link: "",
      },
      {
        name: "LinkedIn",
        icon: <BsLinkedin className="text-2xl" />,
        link: "",
      },
      {
        name: "GooglePlus",
        icon: <BsGoogle className="text-2xl" />,
        link: "",
      },
      {
        name: "Twitter",
        icon: <BsTwitter className="text-2xl" />,
        link: "",
      },
      {
        name: "Facebook",
        icon: <BsFacebook className="text-2xl" />,
        link: "",
      },
      {
        name: "Whatsapp",
        icon: <BsWhatsapp className="text-2xl" />,
        link: "",
      },
    ],
  };


export const getSocials = () => {
    return Socials;
}