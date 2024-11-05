import { BsFillPinFill } from "react-icons/bs";
import { TbRepeat } from "react-icons/tb";

import ProfilePic from "../components/ProfilePic";

import MayonkProfilPic from "../assets/images/profile/profile-picture.webp";
import SDEMayonkProfilPic from "../assets/images/profile/sde-mayonk-profil-pic.jpeg";
import ArtMayonkProfilPic from "../assets/images/profile/art-mayonk-profile-pic.webp";
import OpensourceMayonkProfilPic from "../assets/images/profile/opensource-mayonk-profil-pic.webp";
import BlenderWidzardProfilePic from "../assets/images/profile/Blender-widzard-profile-pic.webp";

import AmazonAnimatedLogo from "../assets/images/profile/amazon-animated-logo.gif";

import Art1 from "../assets/images/art/IMG_1.webp";
import Art2 from "../assets/images/art/IMG_2.webp";
import Art3 from "../assets/images/art/IMG_3.webp";
import Art4 from "../assets/images/art/IMG_4.webp";
import Art5 from "../assets/images/art/IMG_5.webp";
import Art6 from "../assets/images/art/IMG_6.webp";
import Art7 from "../assets/images/art/IMG_7.webp";
import Art8 from "../assets/images/art/IMG_8.webp";
import Art9 from "../assets/images/art/IMG_9.webp";

import Blender1 from "../assets/videos/blender/Blender1.mp4";
import Blender2 from "../assets/videos/blender/Blender2.mp4";
import Blender3 from "../assets/videos/blender/Blender3.mp4";
import Blender4 from "../assets/videos/blender/Blender4.mp4";

import ThumbnailBlender1 from "../assets/videos/blender/thumbnails/Blender1.webp";
import ThumbnailBlender2 from "../assets/videos/blender/thumbnails/Blender2.webp";
import ThumbnailBlender3 from "../assets/videos/blender/thumbnails/Blender3.webp";
import ThumbnailBlender4 from "../assets/videos/blender/thumbnails/Blender4.webp";

import ResumeImage from "../assets/Mayonk_Kumar_Behera_Resume.webp";

import AmazonInternCertificate from "../assets/images/certificate/amazon-internship.webp";
import FiniteToInfiniteTechCertificate from "../assets/images/certificate/finiteToInfiniteTech-certificate.webp";
import ICPCCertificate from "../assets/images/certificate/ICPC.webp";

const postTypeIconStyles = "text-[#828181] text-sm";

// if you chnage the spelling of any of these types then make sure to
// update the same in Profile.jsx <Content /> & <Posts />
export const contentType = ["Post", "Resume", "Opensource", "Media"];

export const profilePosts = [
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "21 Jan",
    type: "Pinned",
    typeIcon: <BsFillPinFill className={`${postTypeIconStyles}`} />,
    description: (
      <p>
        || Software Engineer, 🖥️ 3D Enthusiast, 🎨 Artist, 📚 Reader ||
        <br />
        <br />I am a software engineer who loves creating modern, elegant, and
        interactive websites and apps. Being a passionate developer, I enjoy
        taking up challenging projects and come up with interesting and creative
        solutions. I'm deeply passionate about open source initiatives.
        <br />
        When I'm not on my keyboard, I am busy painting emotions and narratives
        on canvas, delving into a world of diverse books, and crafting
        imaginative 3D universes. Join me on this journey where art, literature,
        technology, and open collaboration converge! 🌟✨
      </p>
    ),
    hashTags:
      "#SoftwareEngineer #OpenSource #Art #Books #Blender #CreativityInTech",
    imageList: null,
    videoList: null,
    links: null,
  },
  {
    profilPic: <ProfilePic profilePic={SDEMayonkProfilPic} />,
    name: "SDE Mayonk",
    userName: "@SDEMayonk",
    date: "23 June",
    type: "Reposted",
    typeIcon: <TbRepeat className={`${postTypeIconStyles}`} />,
    description: (
      <p>
        Just wrapped up an exciting internship as an SDE at Amazon India, where
        I developed a robust Java API for PII detection and revamped UI for a
        better customer experience. Thrilled to have made a real impact! 🚀
      </p>
    ),
    hashTags: "#SoftwareEngineering #Amazon #TechIntern",
    imageList: [
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={AmazonAnimatedLogo}
        alt="Amazon Logo"
      />,
    ],
    videoList: null,
    links: null,
  },
  {
    profilPic: <ProfilePic profilePic={OpensourceMayonkProfilPic} />,
    name: "Open-source MK",
    userName: "@CommunityCoder",
    date: "23 June",
    type: "Reposted",
    typeIcon: <TbRepeat className={`${postTypeIconStyles}`} />,
    description: (
      <p>
        Passionate about open-source! 🌟 Recently, I contributed to Rezume and
        PlanZap, making user data input more efficient and adding Google Book
        API integration. Excited to give back to the community! 🙌
      </p>
    ),
    hashTags: "#OpenSource #Contributions #TechCommunity",
    imageList: null,
    videoList: null,
    links: [
      {
        url: "https://github.com/CatsInTech/Rezume/pull/114",
        hyperlinkText: "Rezume contribution link",
      },
      {
        url: "https://github.com/SaraswatGit/PlanZap/pull/244",
        hyperlinkText: "PlanZap contribution link",
      },
      {
        url: "https://drive.google.com/file/d/1ZTzOmnCSSVAW_56VhhH6HmHirZl24hR-/view",
        hyperlinkText: "Certificate",
      },
    ],
  },
  {
    profilPic: <ProfilePic profilePic={ArtMayonkProfilPic} />,
    name: "Mayonk Art",
    userName: "@MadCanvas_",
    date: "19 Aug",
    type: "Reposted",
    typeIcon: <TbRepeat className={`${postTypeIconStyles}`} />,
    description: (
      <p>
        🎨 Embracing my creative side! Sharing a glimpse into my world of
        sketches and paintings. From intricate details to vibrant colors, each
        stroke tells a story. Art is my way of expressing the unspoken. 🖌️✨
      </p>
    ),
    hashTags: "#ArtisticJourney #Sketches #Paintings #CreativityUnleashed",
    imageList: [
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={Art5}
        alt="Art 5"
      />,
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={Art6}
        alt="Art 6"
      />,
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={Art7}
        alt="Art 7"
      />,
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={Art9}
        alt="Art 9"
      />,
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={Art1}
        alt="Art 1"
      />,
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={Art2}
        alt="Art 2"
      />,
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={Art3}
        alt="Art 3"
      />,
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={Art4}
        alt="Art 4"
      />,
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={Art8}
        alt="Art 8"
      />,
    ],
    videoList: null,
    links: null,
  },
  {
    profilPic: <ProfilePic profilePic={BlenderWidzardProfilePic} />,
    name: "3D Render Mayonk",
    userName: "@BlenderWizard",
    date: "23 July",
    type: "Reposted",
    typeIcon: <TbRepeat className={`${postTypeIconStyles}`} />,
    description: (
      <p>
        🎬 Stepping into the world of 3D artistry with Blender! Check out my
        latest realistic videos, where imagination meets reality. Dive into the
        world of 3D magic! 🌟🎥
      </p>
    ),
    hashTags: "#BlenderArt #3DAnimation #CreativeVisuals",
    imageList: null,
    videoList: [
      <video
        preload="none"
        className="aspect-video object-cover"
        src={Blender1}
        loop
        controls
        muted
        poster={ThumbnailBlender1}
      />,
      <video
        preload="none"
        className="aspect-video object-cover"
        src={Blender2}
        loop
        controls
        muted
        poster={ThumbnailBlender2}
      />,
      <video
        preload="none"
        className="aspect-video object-cover"
        src={Blender3}
        loop
        controls
        muted
        poster={ThumbnailBlender3}
      />,
      <video
        preload="none"
        className="aspect-video object-cover"
        src={Blender4}
        loop
        controls
        muted
        poster={ThumbnailBlender4}
      />,
    ],
    links: null,
  },
];

export const profileResume = [
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "12 Oct",
    type: null,
    typeIcon: null,
    description: (
      <p>
        🌟 Excited to share my updated resume! 🌟 🔍 Take a peek at my skills,
        experience, and passion 🚀 I'm open to exciting opportunities and
        collaborations! Let's connect! 🌐
      </p>
    ),
    hashTags: "#Resume #JobSeeker #CareerOpportunity",
    imageList: [
      <a
        href="https://drive.google.com/file/d/1Epj5hMtQt0SZ-xzSp1yKjwrpIyq6Sn8k/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          loading="lazy"
          src={ResumeImage}
          className="object-cover w-full min-h-48"
          alt="Resume"
        />
      </a>,
    ],
    videoList: null,
    links: [
      {
        url: "https://drive.google.com/file/d/1Epj5hMtQt0SZ-xzSp1yKjwrpIyq6Sn8k/view?usp=sharing",
        hyperlinkText: "Resume",
      },
    ],
  },
];

export const profileMedia = [
  {
    profilPic: <ProfilePic profilePic={SDEMayonkProfilPic} />,
    name: "SDE Mayonk",
    userName: "@SDEMayonk",
    date: "23 June",
    type: null,
    typeIcon: null,
    description: <p>Amazon SDE Internship certificate</p>,
    hashTags: "#SoftwareEngineering #Amazon #TechIntern",
    imageList: [
      <img
        loading="lazy"
        src={AmazonInternCertificate}
        alt="Amazon internship certificate"
        className="w-full"
      />,
    ],
    videoList: null,
    links: null,
  },
  {
    profilPic: <ProfilePic profilePic={SDEMayonkProfilPic} />,
    name: "SDE Mayonk",
    userName: "@SDEMayonk",
    date: "15 July, 2022",
    type: null,
    typeIcon: null,
    description: <p>FiniteToInfiniteTechnology Internship certificate</p>,
    hashTags: "#OpenSource #Contributor #ReactJS",
    imageList: [
      <img
        loading="lazy"
        src={FiniteToInfiniteTechCertificate}
        alt="FiniteToInfiniteTechnology internship certificate"
        className="w-full"
      />,
    ],
    videoList: null,
    links: null,
  },
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "14 Aug, 2021",
    type: null,
    typeIcon: null,
    description: <p>ACM ICPC certificate</p>,
    hashTags: "#CP #ICPC #DSA",
    imageList: [
      <img
        loading="lazy"
        src={ICPCCertificate}
        alt="ICPC certificate"
        className="w-full"
      />,
    ],
    videoList: null,
    links: null,
  },
];
