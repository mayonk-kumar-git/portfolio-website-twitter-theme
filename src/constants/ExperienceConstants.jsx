import ProfilePic from "../components/ProfilePic";

import MayonkProfilPic from "../assets/images/profile/profile-picture.webp";
import AmazonAnimatedLogo from "../assets/images/profile/amazon-animated-logo.gif";

export const experienceList = [
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "23 June",
    type: null,
    typeIcon: null,
    description: (
      <p>
        🌟Thrilled to share my experience at Amazon, where every day was a dive
        into innovation and excellence!💼🚀 <br />
        <br />
        👨‍💻 SDE Intern | Java, React, AWS, CSS, HTML, TypeScript <br />
        🕒 Jan 2023 - June 2023
        <br />
        <br />
        🔍 <u>Developed a scalable API</u> using Java to detect personally
        identifiable information (PII) within text contents, significantly{" "}
        <u>enhancing customer privacy</u> and trust.
        <br />
        <br />
        🎨 <u>Improved user experience</u> in an internal Amazon website by
        resolving duplicate headings, converting plain text links into
        interactive hyperlinks, and fixing & enhancing broken hyperlinks through
        the
        <u>implementation of algorithms</u> for content formatting.
        <br />
        <br />
        🔐 <u>Implemented impactful UI improvements</u> by integrating robust
        validation checks and precise warning messages and strengthened website
        security by implementing CSRF token headers.
        <br />
        <br />
        💼 Achieved significant customer impact by saving{" "}
        <u>50%-70% of users</u>
        (customer support) over <u>3+ hours daily</u>.
      </p>
    ),
    hashTags: "#Amazon #SoftwareEngineer #CodingAdventures",
    imageList: [
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={AmazonAnimatedLogo}
        alt="Amazon Logo"
      />,
    ],
    videoList: null,
    links: [
      {
        url: "https://drive.google.com/file/d/1gFNp3bPKQQyI8ElXTvpc_FZtifFUUfAK/view",
        hyperlinkText: "Certificate",
      },
    ],
  },
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "15 July, 2022",
    type: null,
    typeIcon: null,
    description: (
      <p>
        💼Thrilled to have interned at FiniteToInfinite Technologies!🚀
        <br />
        <br />
        👨‍💻 Frontend Developer | ReactJS, HTML, CSS, JavaScript <br />
        🕒 June 2022 - July 2022
        <br />
        <br />
        🖥️ Engineered and developed the entire frontend of the website for both
        mobile and desktop platforms, leveraging ReactJS and applying advanced
        concepts to ensure optimal user interaction.
        <br />
        <br />
        💡 Collaborated seamlessly with the backend team, orchestrating the
        integration of backend APIs with the frontend to establish a robust and
        responsive user experience.
      </p>
    ),
    hashTags: "#FrontendDeveloper #TechInnovation #CodingJourney",
    imageList: null,
    videoList: null,
    links: [
      {
        url: "https://drive.google.com/file/d/1RB-iiV8intKieFxrm-qL2dfnP5ebL7YI/view",
        hyperlinkText: "Certificate",
      },
    ],
  },
];
