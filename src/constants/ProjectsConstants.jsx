import ProfilePic from "../components/ProfilePic";

import MayonkProfilPic from "../assets/images/profile/profile-picture.webp";

import Project1Img1 from "../assets/projects/Project1/Project1-1.webp";
import Project1Img2 from "../assets/projects/Project1/Project1-2.webp";
import Project1Img3 from "../assets/projects/Project1/Project1-3.webp";
import Project1Img4 from "../assets/projects/Project1/Project1-4.webp";
import Project1Img5 from "../assets/projects/Project1/Project1-5.webp";
import Project1Img6 from "../assets/projects/Project1/Project1-6.webp";
import Project1Img7 from "../assets/projects/Project1/Project1-7.webp";
import Project1Img8 from "../assets/projects/Project1/Project1-8.webp";
import Project1Img9 from "../assets/projects/Project1/Project1-9.webp";
import Project1Img10 from "../assets/projects/Project1/Project1-10.webp";
import Project1Img11 from "../assets/projects/Project1/Project1-11.webp";
import Project1Img12 from "../assets/projects/Project1/Project1-12.webp";

import Project2Img1 from "../assets/projects/Project2/Project2-1.webp";
import Project2Img2 from "../assets/projects/Project2/Project2-2.webp";

import Project3Img1 from "../assets/projects/Project3/project3-1.webp";
import Project3Img2 from "../assets/projects/Project3/project3-2.webp";
import Project3Img3 from "../assets/projects/Project3/project3-3.webp";
import Project3Img4 from "../assets/projects/Project3/project3-4.webp";
import Project3Img5 from "../assets/projects/Project3/project3-5.webp";

import Project4Thumbnail from "../assets/projects/Project4/project4-thumbnail.webp";
import Project4Video from "../assets/projects/Project4/project4-video.mp4";

import Project5Thumbnail from "../assets/projects/Project5/project5-thumbnail.jpeg";
import Project5Video from "../assets/projects/Project5/project5-video.mp4";

import Project6Thumbnail from "../assets/projects/Project6/project6-thumbnail.webp";
import Project6Video from "../assets/projects/Project6/project6-video.mp4";

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
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "20 Aug",
    type: null,
    typeIcon: null,
    description: (
      <p>
        ||🛍️E-commerce Website🛍️||
        <br />
        Typescript, React, Redux, Firebase
        <br />
        <br />✅ Product Listing with filters <br />✅ Interactive Shopping Cart{" "}
        <br />✅ Smooth Checkout Process <br />✅ Fully Responsive Design <br />
        ✅ User Authentication implemented
      </p>
    ),
    hashTags: "#WebDevelopment #ReactJS #Firebase #CodingAchievement",
    imageList: [
      <img
        loading="lazy"
        className="aspect-video object-fit"
        src={Project3Img1}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-video object-fit"
        src={Project3Img2}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-video object-fit"
        src={Project3Img3}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-video object-fit"
        src={Project3Img4}
        alt="Screenshort"
      />,
      <img
        loading="lazy"
        className="aspect-video object-fit"
        src={Project3Img5}
        alt="Screenshort"
      />,
    ],
    videoList: null,
    links: [
      {
        url: "https://github.com/mayonk-kumar-git/ecommerce-website",
        hyperlinkText: "GitHub Repo",
      },
      {
        url: "https://64edc48b3b05b700087c1088--dreamy-daffodil-a61d4e.netlify.app/",
        hyperlinkText: "Hosted Link",
      },
    ],
  },
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "25 May, 2021",
    type: null,
    typeIcon: null,
    description: (
      <p>
        ||Chat Application||
        <br />
        Javascript, HTML, CSS, nodeJS, socket <br />
        <br />
        Expanding boundaries into the back end web development. Here's an
        awesome web-based chat application created using nodeJS and socket.
        io(Socket. io enables real-time, bidirectional, and event-based
        communication).
      </p>
    ),
    hashTags: "#NodeJS #SocketIO #WebDevelopment #ChatApplication",
    imageList: null,
    videoList: [
      <video
        preload="none"
        className="object-cover"
        src={Project4Video}
        loop
        controls
        muted
        poster={Project4Thumbnail}
      />,
    ],
    links: [
      {
        url: "https://github.com/mayonk-kumar-git/chat-application-using-nodeJS-and-socketIO",
        hyperlinkText: "GitHub Repo",
      },
      {
        url: "https://www.linkedin.com/posts/mayonk-kumar_nodejs-socketio-htmlcss-activity-6701597087970275328-UUb4?utm_source=share&utm_medium=member_desktop",
        hyperlinkText: "LinkedIn post",
      },
    ],
  },
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "15 Oct, 2020",
    type: null,
    typeIcon: null,
    description: (
      <p>
        ||Face & emotion detection web app||
        <br />
        Javascript, HTML, CSS
        <br />
        <br />
        This is a fun face and expression detection web app that I have built
        during this pandemic lockdown (special thanks to the bat eater😂😂)
        using face-api.js. I didn’t realize that this project would be so simple
        to build until I finally built it. Thanks to face-api.js and
        TensorFlow.js that have already done the harder part of implementing
        convolutional neural networks to solve for face detection and
        recognition of faces and face landmarks. <br />
        <br /> Do check out my project. (As it is not fully optimized, it may
        take quite some time to load up). <br />
        <br />I would be more than happy to receive any improvement suggestions
        for my project
      </p>
    ),
    hashTags: "#JS #WebDevelopment #FaceDetection",
    imageList: null,
    videoList: [
      <video
        preload="none"
        className="object-cover"
        src={Project5Video}
        loop
        controls
        muted
        poster={Project5Thumbnail}
      />,
    ],
    links: [
      {
        url: "https://github.com/mayonk-kumar-git/face_detection_app",
        hyperlinkText: "GitHub Repo",
      },
      {
        url: "https://zealous-shockley-3d40a7.netlify.app",
        hyperlinkText: "Hosted link",
      },
      {
        url: "https://www.linkedin.com/posts/mayonk-kumar_this-is-a-fun-face-and-expression-detection-activity-6690716455056490496-hZGI?utm_source=share&utm_medium=member_desktop",
        hyperlinkText: "LinkedIn post",
      },
    ],
  },
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "25 Nov, 2020",
    type: null,
    typeIcon: null,
    description: (
      <p>
        ||Face & emotion detection web app||
        <br />
        JS, HTML, CSS
        <br />
        <br />
        Just playing around with the HTML canvas element. Created a small
        project using HTML canvas element and vanilla JavaScript that uses a
        base64 image and divides it into multiple particles that react to a
        mouse hover. <br />
        <br /> You MUST try it yourself once [through the hosted link below] its
        FUN
      </p>
    ),
    hashTags: "#JS #WebDevelopment #HTMLcanvas",
    imageList: null,
    videoList: [
      <video
        preload="none"
        className="object-cover"
        src={Project6Video}
        loop
        controls
        muted
        poster={Project6Thumbnail}
      />,
    ],
    links: [
      {
        url: "https://github.com/mayonk-kumar-git/particle_picture",
        hyperlinkText: "GitHub Repo",
      },
      {
        url: "https://wonderful-joliot-1fd335.netlify.app",
        hyperlinkText: "Hosted link",
      },
      {
        url: "https://www.linkedin.com/posts/mayonk-kumar_just-playing-around-with-the-html-canvas-activity-6693605736850702336-zPWF?utm_source=share&utm_medium=member_desktop",
        hyperlinkText: "LinkedIn post",
      },
    ],
  },
];
