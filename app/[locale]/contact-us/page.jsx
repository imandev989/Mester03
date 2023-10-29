import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactSocial from "./ContactSocial";
import ContactAdress from "./ContactAdress";

const ContactUs = () => {
  // console.log("SSR")
  return (
    <>
      <div>
        <Image
          src="/images/contactus/01.jpg"
          priority={true}
          width={1980}
          height={300}
          alt="تماس با ما"
        />
      </div>
      <div className="container mx-auto mt-8">
        <ContactAdress />
        <ContactSocial />
        <ContactForm />
      </div>
    </>
  );
};

export default ContactUs;
