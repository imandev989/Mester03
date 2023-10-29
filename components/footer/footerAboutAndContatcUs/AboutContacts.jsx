import AboutContact from "./AboutContact";
import {getContacts} from "./aboutData.js";

const AboutContacts = () => {
  const contents= getContacts();
    // console.log(contents)
    // console.log(contents[0])
  return(<div className="flex justify-around my-6">
    {
    contents.map((content, index) => (
      <AboutContact 
      key={index}
      content={content}
      />
      
    ))
    }
  </div>)
  
};

export default AboutContacts;
