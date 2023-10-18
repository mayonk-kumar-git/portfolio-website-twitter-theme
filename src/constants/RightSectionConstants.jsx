import ThumbnailBlender1 from "../assets/videos/blender/thumbnails/Blender1.webp";
import ThumbnailBlender2 from "../assets/videos/blender/thumbnails/Blender2.webp";

import Art3 from "../assets/images/art/IMG_3.webp";
import Art4 from "../assets/images/art/IMG_4.webp";
import Art5 from "../assets/images/art/IMG_5.webp";
import Art7 from "../assets/images/art/IMG_7.webp";

import AmazonAnimatedLogo from "../assets/images/profile/amazon-animated-logo.gif";
import ICPCCertificate from "../assets/images/certificate/ICPC.webp";

const KnowMeImage = ({ imageSrc }) => {
  return <img src={imageSrc} className="w-12 h-12 rounded-md aspect-square" />;
};

export const knowMe = [
  {
    section: "experience",
    heading: "Experience",
    subheading: "SDE | Fullstack web dev | Mobile dev",
    image: <KnowMeImage imageSrc={AmazonAnimatedLogo} />,
  },
  {
    section: "projects",
    heading: "Projects",
    subheading: "20+ projects",
    image: null,
  },
  {
    section: "achievements",
    heading: "Achievements",
    subheading: "ICPC | Hash-code | DSA",
    image: <KnowMeImage imageSrc={ICPCCertificate} />,
  },
  {
    section: "hobbies",
    heading: "Hobbies",
    subheading: "Sketching | Painting | 3D rendring",
    image: null,
  },
  {
    section: "opensource",
    heading: "Open-source",
    subheading: "Back to community",
    image: null,
  },
];

export const media = [
  <img
    src={Art3}
    alt="Art"
    className="aspect-square object-cover rounded-2xl"
  />,
  <img
    src={Art4}
    alt="Art"
    className="aspect-square object-cover rounded-2xl"
  />,
  <img
    src={Art5}
    alt="Art"
    className="aspect-square object-cover rounded-2xl"
  />,
  <img
    src={ThumbnailBlender1}
    alt="Art"
    className="aspect-square object-cover rounded-2xl"
  />,
  <img
    src={Art7}
    alt="Art"
    className="aspect-square object-cover rounded-2xl"
  />,
  <img
    src={ThumbnailBlender2}
    alt="Art"
    className="aspect-square object-cover rounded-2xl"
  />,
];
