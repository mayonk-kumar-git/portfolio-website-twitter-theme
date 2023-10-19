import React from "react";

import ProfilePic from "../components/ProfilePic";

import OpensourceMayonkProfilPic from "../assets/images/profile/opensource-mayonk-profil-pic.webp";
import Opensource1 from "../assets/images/opensource/opensource1.webp";
import Opensource2 from "../assets/images/opensource/opensource2.webp";

export const opensource = [
  {
    profilPic: <ProfilePic profilePic={OpensourceMayonkProfilPic} />,
    name: "Open-source MK",
    userName: "@CommunityCoder",
    date: "25 May, 2022",
    type: null,
    typeIcon: null,
    description: (
      <p>
        Excited to share my recent contribution to Rezume, the online
        resume-building tool! 🌟 Designed sleek user data input forms, optimized
        data storage, and crafted a polished single-column resume theme using
        ReactJS. Elevating the resume-building experience. Check out the GitHub
        pull request
      </p>
    ),
    hashTags: "#OpenSource #Contributor #ReactJS",
    imageList: [
      <a
        href="https://github.com/CatsInTech/Rezume/pull/114"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img loading="lazy" src={Opensource1} alt="Screenshort" />
      </a>,
    ],
    videoList: null,
    links: [
      {
        url: "https://github.com/CatsInTech/Rezume/pull/114",
        hyperlinkText: "GitHub pull request",
      },
    ],
  },
  {
    profilPic: <ProfilePic profilePic={OpensourceMayonkProfilPic} />,
    name: "Open-source MK",
    userName: "@CommunityCoder",
    date: "25 May, 2022",
    type: null,
    typeIcon: null,
    description: (
      <p>
        Exciting news! Contributed to PlanZap, the open-source productivity app,
        by seamlessly integrating a new feature. Now users can search and add
        book details to their wish list using the Google Book API, transforming
        it into a holistic productivity solution! 📚✨
      </p>
    ),
    hashTags: "#OpenSource #Productivity #ReactJS",
    imageList: [
      <a
        href="https://github.com/SaraswatGit/PlanZap/pull/244"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img loading="lazy" src={Opensource2} alt="Screenshort" />
      </a>,
    ],
    videoList: null,
    links: [
      {
        url: "https://github.com/SaraswatGit/PlanZap/pull/244",
        hyperlinkText: "GitHub pull request",
      },
    ],
  },
];
