export const METADATA = {
  title: "Portfolio | Sosena Mulu",
  description:
    "A versatile professional with expertise spanning full-stack web and blockchain developer React | Node | Django | Solidity.",
  siteUrl: "https://sosena-mulu.vercel.app/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  }, 
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I am a Full Stack Web and Block Chain Developer",
  "I develop modern React websites",
  "I build Scalable Django back end APIS",
  "I develop very fast and secure Node Backend",
  "I make very Complex and Advanced Smart Contracts",
  "I design and develop beautiful UI UX figma designs",
];

export const EMAIL = "sosenamulu1212@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ezra-yeneneh-a07203260/",
  medium: "https://medium.com/@ezrayeneneh1992",
  instagram: "https://www.instagram.com/ezrablackfish/",
  facebook: "https://www.facebook.com/profile.php?id=61556500766435",
  twitter: "https://twitter.com/0x_Ezra",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
	{
    name: "Steelo",
    image: "/projects/works/31-1.PNG",
    blurImage: "/projects/blur/31-1-blurred.jpg",
    description: "Full Stack Developer React | Node | Solidity",
    gradient: ["#245B57", "#004741"],
    url: "https://steelo.io/",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },
  {
    name: "Hanout Boutique",
    image: "/projects/works/hanoul.PNG",
    blurImage: "/projects/blur/hanoul-blurred.jpg",
    description: "React/Django Developer for Hanout Boutique E-commerce Site",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.hanoutboutique.com/",
    tech: ["react", "nodejs", "javascript", "postgresql",],
  },
  {
    name: "Dogue",
    image: "/projects/works/douge.PNG",
    blurImage: "/projects/blur/douge-blurred.jpg",
    description: "Full-Stack Node React Developer for DOGUE E-commerce Platform",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dogue.com.au/",
    tech: ["react", "django", "python", "mysql",],
  },
{
    name: "Big Blanket",
    image: "/projects/works/bigblanket.PNG",
    blurImage: "/projects/blur/bigblanket-blurred.jpg",
    description: "Node.js Developer for Big Blanket Co E-commerce Platform",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://bigblanket.com/",
    tech: ["react", "django", "mongodb", "python"],
  },
  {
    name: "Condado",
    image: "/projects/works/candado.PNG",
    blurImage: "/projects/blur/candado-blurred.jpg",
    description: "Full Stack MERN Developer",
    gradient: ["#245B57", "#004741"],
    url: "https://condadotacos.com/",
    tech: ["react", "nodejs", "mongodb", "express", "next"],
  }
  
  ];

export const SKILLS = {
  frontend: [
    "solidity",
    "blockchain",
    "metamask",
    "web3",
    "solana",
    "rust",
    "figma",
    "shopify",
    "javascript",
    "php",
    "typescript",
    "wordpress",
    "react",
    "redux",
    "next",
    "material",
    "bootstrap",
    "tailwind",
    "sass",
    "html",
    "css",
  ],
  backend: [
	"solidity",
	"blockchain",
    	"metamask",
    	"web3",
	"solana",
	"rust",
	"shopify",
	"django",
	"postgresql",
	"woocommerce",
	"mysql",
	"express",
        "python",
    	"nodejs",
	"mongodb",
	"firebase",
	"prisma",
  ],
  mobile: [
	"reactnative",
	"firebase",
	"mysql",
	"postgresql",
	"mongodb",
  ],
  userInterface: ["figma", "xd"],
  other: ["git", "postman", "cpanel", "vercel", "netlify", "docker"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (Current)",
    size: ItemSize.SMALL,
    subtitle: "Working on flipkart wholesale platform 😎",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Motion Graphics (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Motion Graphics content for Product Launch 🚀",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    image: "/timeline/akgec.svg",
    slideImage: "/timeline/farewell.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student lead at SDC-SI",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle:
      "Competed against 20+ teams for design and development of web project from scratch",
    slideImage: "/timeline/ims-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    slideImage: "/timeline/js-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Design, ABES ACM",
    size: ItemSize.SMALL,
    subtitle:
      "Competed in web and graphic design challenge with 100+ participants.",
    slideImage: "/timeline/abes-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/timeline/web-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/timeline/ims-16.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-start.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Recognized Themer",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/timeline/xda-rt.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
