import { Project } from "../types/project";
import terralityThumbnail from "../assets/img/projects/terrality.jpg";
import tactileThumbnail from "../assets/img/projects/tactile.png";
import xrcThumbnail from "../assets/img/projects/xrc.png";
import faradayThumbnail from "../assets/img/projects/faraday.jpg";
import boltcamThumbnail from "../assets/img/projects/boltcam.jpg";
import icxrPortalThumbnail from "../assets/img/projects/icxrportal.png";
import fireThumbnail from "../assets/img/projects/fire.jpg";

export const PROJECTS_LIST: Project[] = [
  {
    title: "Faraday Lightning Safety",
    description:
      "A mixed-reality game I built that teaches lightning safety and the best places to take shelter during a thunderstorm. You guide a tiny owl named Spark to safety by physically moving it around a virtual tabletop environment.",
    thumbnail: faradayThumbnail,
    link: {
      text: "View on Meta Quest Store",
      url: "https://www.meta.com/experiences/faraday-lightning-safety/8916168031765951/",
    },
  },
  {
    title: "Boltcam",
    description:
      "A DIY weather camera built from a Raspberry Pi and a camera module. It continuously monitors the sky for lightning strikes to verify the measurements of a lightning measurement system based in Washington D.C. A web interface enables users to view the camera feed and download historical clips.",
    thumbnail: boltcamThumbnail,
    link: {
      text: "View Website",
      url: "https://boltcam-public-website.pages.dev",
    },
  },
  {
    title: "Terrality",
    description:
      "I built this application at the University of Maryland Earth System Science Interdisciplinary Center. It is capable of visualizing weather datasets and displaying them on a globe. I also built the control-panel user-interface to allow users to customize properties about the visualization.",
    thumbnail: terralityThumbnail,
    link: {
      text: "View Video",
      url: "https://youtu.be/3fcFcEk5Qxw",
    },
  },
  {
    title: 'A "Fire" Training App',
    description:
      'A group of friends and I attended MIT Reality Hack 2024 and built A "Fire" Training App, which lets you practice fire evacuations in your own home using the power of mixed-reality. We ended up winning the Enhanced Education track! I am the one with the fox beanie in the video :)',
    thumbnail: fireThumbnail,
    link: {
      text: "View Video",
      url: "https://www.youtube.com/watch?v=fMpgtK0AlfQ",
    },
  },
  {
    title: "ICXR Portal",
    description:
      "I built a web portal for Intercollegiate XR (ICXR) which allows the community team to easily create events and have them announced within our Discord server and calendar. It uses TypeScript, React, and Payload CMS.",
    thumbnail: icxrPortalThumbnail,
  },
  {
    title: "Tactile",
    description:
      'As I have built Unity applications, I have created a group of useful libraries that I call Tactile. These include a command console, helpful extension methods, animation functions, and more. You can check them out under my "Figsware" GitHub organization.',
    thumbnail: tactileThumbnail,
    link: {
      text: "View GitHub",
      url: "https://github.com/Figsware",
    },
  },
  {
    title: "XR Club Website",
    description:
      "I made the website for the XR Club at the University of Maryland. It not only looks cool, but it connects to a internal database to take our dynamic content (events, roster, etc.) and build lightweight static webpages with Astro.",
    thumbnail: xrcThumbnail,
    link: {
      text: "View Website",
      url: "https://xr.umd.edu",
    },
  },
];
