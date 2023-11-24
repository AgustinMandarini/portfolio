const logotext = "Agustin Mandarini";
const meta = {
  title: "Agustin Mandarini",
  description:
    "I'm Agustin Mandarini, a developer and a neverending seeker of innovative, simple and creative solutions.",
};

const introdata = {
  title: "Hi, I'm Agustin Mandarini",
  animated: {
    first: "Fullstack Developer",
    second: "Analyst",
    third: "Devoted Programmer",
    fourth: "Team Player",
    fifth: "Fullstack Developer",
    // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
  },
  description:
    "I'm a dedicated developer with an insatiable curiosity, and genuine passion for fostering robust team relationships. Aspiring to lead teams while participating in the intricacies of business tech solutions is my ultimate goal.",
  your_img_url: "./img/agustin_guitarra.jpg",
};

const dataabout = {
  title: "Who am I?",
  aboutme: `I am a Fullstack Developer and a passionate, goal-oriented individual. When taking on new projects, I actively work to create collaborative work environments, foster unity, synergy, and strong interpersonal relationships within the team to produce excellent code and end products.`,
  myInterests: `My Interests:
    Professionally, I'm interested in contributing to innovative projects that offer simple and efficient solutions for clients. I seek to continually learn new technologies and implement novel software architectures and design patterns.
    
    Personally, I have an interest in nature, the mountains, healthy living, nurturing meaningful relationships, and sharing my life with family and friends.`,
};
const worktimeline = [
  {
    jobtitle: "Electronic Security Technician",
    where: "Ejército Argentino (Army)",
    date: "2015 to present",
  },
  {
    jobtitle: "Student Teaching Assistant",
    where: "Soy Henry",
    date: "Aug 2023 to present",
  },
  {
    jobtitle: "Fullstack javascript developer",
    where: "MSC Amoblamientos",
    date: "Aug 2023 to Nov 2023",
  },
  {
    jobtitle: "Python Developer",
    where: "Baldor SRL",
    date: "2022 to present",
  },
];

const skills = [
  {
    name: "Javascript",
  },

  {
    name: "Node",
  },

  {
    name: "React",
  },

  {
    name: "Redux",
  },
  {
    name: "Postgres",
  },

  {
    name: "Python",
  },
];

const dataportfolio = [
  {
    img: "./img/msc_amoblamientos_portada.png",
    description:
      "MSC Amoblamientos is an ecommerce platform build for an independent entrepreneur and has all basic functiontalities of a SAAS proyect.",
    link: "https://msc-amoblamientos.vercel.app/",
  },
  {
    img: "./img/doggypedia.png",
    description:
      "Search for up to 246 dogs breeds by consuming an external API",
    link: "https://doggypedia-nu.vercel.app/",
  },
  {
    img: "./img/rugit_imagen.jpeg",
    description:
      "DataLogger software for Baldor SRL's Rugit sound level meter equipment. This is a desktop proyect developed on Python.",
    link: "https://github.com/AgustinMandarini/Vibrac",
  },
];

const contactConfig = {
  YOUR_EMAIL: "agustinmandarini47@gmail.com",
  description: "Looking forward to hearing from you!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: process.env.REACT_APP_YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID: process.env.REACT_APP_YOUR_TEMPLATE_ID,
  YOUR_USER_ID: process.env.REACT_APP_YOUR_USER_ID,
};

const socialprofils = {
  github: "https://github.com/AgustinMandarini",
  linkedin: "https://www.linkedin.com/in/agustin-mandarini-8a73a4225/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
