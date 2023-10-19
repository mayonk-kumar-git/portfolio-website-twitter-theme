import React from "react";

import ProfilePic from "../components/ProfilePic";
import MayonkProfilPic from "../assets/images/profile/profile-picture.webp";

import HashcodeScreenshot from "../assets/images/certificate/hash-code-screenshot.webp";
import HashcodeCertificate from "../assets/images/certificate/hash-code-certificate.webp";

import ICPCCertificate from "../assets/images/certificate/ICPC.webp";

export const achievements = [
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "3 May",
    type: null,
    typeIcon: null,
    description: (
      <p>
        | 🌐 <u>Google Hash Code</u> Online Qualifier Round:
        <br />| 🏆 All India Rank: #227 <br />| 🌍 World Rank: #1354 <br />| 🚀
        Pushing boundaries and coding excellence!🖥️🏅
      </p>
    ),
    hashTags: "#GoogleHashCode #CodingAchievement ",
    imageList: [
      <img
        loading="lazy"
        src={HashcodeScreenshot}
        alt="Hashcode leaderboard screenshot"
        className="aspect-video object-cover"
      />,
      <img
        loading="lazy"
        src={HashcodeCertificate}
        alt="Hashcode certificate"
        className="aspect-video object-cover"
      />,
    ],
    videoList: null,
    links: null,
  },
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "3 May",
    type: null,
    typeIcon: null,
    description: (
      <p>
        | 🌟 ICPC Asia Regional Contest 2020:
        <br />| 🥉 Rank: #445 <br />| 🧠 Challenging minds, embracing
        competition! 🏆👩‍💻
      </p>
    ),
    hashTags: "#ICPC2020 #CodingChallenge",
    imageList: [
      <img loading="lazy" src={ICPCCertificate} alt="ICPC lcertificate" />,
    ],
    videoList: null,
    links: null,
  },
  {
    profilPic: <ProfilePic profilePic={MayonkProfilPic} />,
    name: "Mayonk Kumar Behera",
    userName: "@MayonkKumar",
    date: "4 Aug",
    type: null,
    typeIcon: null,
    description: (
      <p>
        | 📚 Xth Board: <u>92.3% ICSE!</u> <br />| 🎓 XIIth Board:{" "}
        <u>95.6% CBSE!</u> <br />| 🏆 B.tech CSE <u>CGPA: 9.1</u>
      </p>
    ),
    hashTags: "#StudentLife #KnowledgeIsPower #GraduationJourney",
    imageList: null,
    videoList: null,
    links: null,
  },
];
