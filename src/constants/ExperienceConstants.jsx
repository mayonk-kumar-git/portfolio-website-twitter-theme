import ProfilePic from "../components/ProfilePic";

import MayonkProfilPic from "../assets/images/profile/profile-picture.webp";
import AmazonAnimatedLogo from "../assets/images/profile/amazon-animated-logo.gif";
import MsigmaIOSAppPreview from "../assets/images/profile/msigma-ios-app.webp";

export const experienceList = [
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "1 Nov, 2024",
    type: null,
    typeIcon: null,
    description: (
      <p>
        🚀 Moving on to my next career adventure! Had an amazing time at Msigma
        Gokulam. Proud to look back on some amazing projects during my time at
        Msigma Gokulam! 💻🚀
        <br />
        <br />
        👨‍💻 iOS Developer | SwiftUI, MVVM, MVS, VLCKit, React Native, TypeScript,
        Redux <br />
        🕒 Dec 2023 - Oct 2024
        <br />
        <br />
        <strong>• Mahaguru Institute mobile app</strong> (ReactNative, Redux,
        Typescript)
        <br />
        <br />
        🛠️ Led cross-platform mobile app development, with a modular
        architecture for streamlined maintenance.
        <br />
        <br />
        📈 Consolidated four apps into one,{" "}
        <u>reducing feature implementation time by 53% and effort by 76%.</u>
        <br />
        <br />
        <strong>• Msigma Gokulam iOS app</strong> (SwiftUI, MVVM, MVS, VLCKit)
        <br />
        <br />
        📲 Transitioned the app from UIKit to SwiftUI, ensuring compatibility
        with iPads, dark mode, and multiple device orientations.
        <br />
        <br />
        🎞️ Engineered a custom video player using VLCKit,{" "}
        <u>expediting feature delivery by 38 days.</u>
        <br />
        <br />
        🚀 <u>Enhanced app performance by 37%</u> and{" "}
        <u>reduced crash rates by 88%</u> through strategic optimizations and
        meticulous troubleshooting efforts.
      </p>
    ),
    hashTags: "#MsigmaGokulam #iOS #Swift",
    imageList: [
      <img
        loading="lazy"
        className="aspect-video object-cover"
        src={MsigmaIOSAppPreview}
        alt="Msigma iOS app preview"
      />,
    ],
    videoList: null,
    links: [
      {
        url: "https://drive.google.com/file/d/1Vdgw1RAz5Kkpm1BHPSOsHMWAP8R82CgV/view?usp=sharing",
        hyperlinkText: "Experience certificate",
      },
    ],
  },
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "23 June, 2023",
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
