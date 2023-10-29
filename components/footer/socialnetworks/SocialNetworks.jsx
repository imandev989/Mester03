import {getSocials} from "./socialData.js";

const SocialNetworks = () => {
  const Socials = getSocials();
  return (
    <div className=" container mx-auto my-4">
      <div className="flex  justify-center  w-100">
        <div className="flex flex-col justify-between w-1/2 md:flex-row gap-2">
          <div className="flex-col gap-1">
            <p className="text-sm text-center">
              شرکت:{" "}
              <span className="text-orange-500">{Socials.supprotPhone}</span>
            </p>
            <p className="text-sm text-center ">
              پشتیبانی:{" "}
              <span className="text-orange-500">{Socials.companyPhone}</span>
            </p>
          </div>

          <div className="flex mt-2 text-center justify-center gap-2">
            {Socials.SocialsLinks.map((link, index) => (
              <span key={index} className="text-gray-500  text-xs ">
                {link.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialNetworks;
