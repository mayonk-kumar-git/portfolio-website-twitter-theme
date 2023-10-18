import ProfilePic from "../components/ProfilePic";

import MayonkProfilPic from "../assets/images/profile/profile-picture.png";

import Project1Img1 from "../assets/images/Project1/Project1-1.jpeg";
import Project1Img2 from "../assets/images/Project1/Project1-2.jpeg";
import Project1Img3 from "../assets/images/Project1/Project1-3.jpeg";
import Project1Img4 from "../assets/images/Project1/Project1-4.jpeg";
import Project1Img5 from "../assets/images/Project1/Project1-5.jpeg";
import Project1Img6 from "../assets/images/Project1/Project1-6.jpeg";
import Project1Img7 from "../assets/images/Project1/Project1-7.jpeg";
import Project1Img8 from "../assets/images/Project1/Project1-8.jpeg";
import Project1Img9 from "../assets/images/Project1/Project1-9.jpeg";
import Project1Img10 from "../assets/images/Project1/Project1-10.jpeg";
import Project1Img11 from "../assets/images/Project1/Project1-11.jpeg";
import Project1Img12 from "../assets/images/Project1/Project1-12.jpeg";

import Project2Img1 from "../assets/images/Project2/Project2-1.png";
import Project2Img2 from "../assets/images/Project2/Project2-2.png";

export const projects = [
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "23 June",
    type: null,
    typeIcon: null,
    description: (
      <p>
        ||Social Media App for Real Estate||
        <br />
        React Native, Firebase, Flask, Machine Learning
        <br />
        <br />
        🏡 Excited to share our latest project: a Social Media App for Real
        Estate! 🏡
        <br />
        <br />
        📱 Developed <u>React Native</u> front end for the mobile application,
        delivering a visually appealing and <u>responsive UI</u>.
        <br />
        <br />
        🔐 Integrated <u>Firebase Authentication</u> for a secure user
        authentication system.
        <br />
        <br />
        📂 Devised <u>CRUD</u> operations using{" "}
        <u>Firebase Storage and Firestore</u> to enable seamless post-sharing.
        <br />
        <br />
        🤖 Deployed a <u>machine-learning</u> model for accurate price
        predictions.
        <br />
        <br />
        🚀 Established a <u>REST API</u> with Flask to connect the backend
        machine learning model with the React app.
      </p>
    ),
    hashTags: "#RealEstateApp #ReactNative #MachineLearning",
    imageList: [
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img1}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img2}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img3}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img4}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img5}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img6}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img7}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img8}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img9}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img10}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img11}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-auto object-cover"
        src={Project1Img12}
        alt="Screenshort"
      />,
    ],
    videoList: null,
    links: [
      {
        url: "https://github.com/mayonk-kumar-git/rearo",
        hyperlinkText: "GitHub Repo",
      },
    ],
  },
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "25 May, 2022",
    type: null,
    typeIcon: null,
    description: (
      <p>
        ||♟️ Chess Game with AI Opponent ♟️||
        <br />
        JAVA, min-max algorithm
        <br />
        <br />
        ✨ Java-based Multiplayer Chess Game! Immerse yourself in strategic
        battles with our intuitive GUI and challenge your skills against an AI
        opponent driven by the min-max algorithm. ✨
        <br />
        <br />
        🎮 Constructed a GUI-based multiplayer chess game using Java. Used{" "}
        <u>Java Swing</u> framework for the user interface.
        <br />
        <br />
        🤖 Developed an <u>AI</u> opponent utilizing the{" "}
        <u>min-max algorithm</u>, enhancing gameplay with AI opponents.
        <br />
        <br />
        🔍 Incorporated industry-standard <u>design pattern concepts</u> such as
        factory-design, builder-design, etc...
      </p>
    ),
    hashTags: " #ChessMasterpiece #JavaGaming #AIChallenge",
    imageList: [
      <img
        loading="lazy"
        className="aspect-video object-fit"
        src={Project2Img1}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-video object-fit"
        src={Project2Img2}
        alt="Screenshort"
      />,
    ],
    videoList: null,
    links: [
      {
        url: "https://github.com/mayonk-kumar-git/Chess-Game",
        hyperlinkText: "GitHub Repo",
      },
    ],
  },
];
