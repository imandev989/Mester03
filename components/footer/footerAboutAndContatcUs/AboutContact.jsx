import Link from "next/link";

const AboutContact = ({ index, content }) => {
  // console.log(content);
  return (
    <div className="flex-col mx-2 divide-y-2 divide-blue-300">
      <div>
        <p className="mb-4">{content.title}</p>
      </div>
      {/* <Divider /> */}
      <div>
        <ul>
          {content.subtitles.map((sub, index) => (
            <li className="my-2" key={index}>
              <Link href={sub.link}>
                <span className="text-sm text-gray-400">{sub.subtitle}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutContact;
