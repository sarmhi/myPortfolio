import tempown from "../assets/projects/tempown.png";
import tempownEnt from "../assets/projects/tempownEnt.png";
import imagePizzle from "../assets/projects/imagePizzle.png";
import sammiUrl from "../assets/projects/sammiUrl.png";
import property from "../assets/projects/property2.png";

const data = [
  {
    name: "Tempown",
    image: tempown,
    stack: "React.js, Javascript, HTML5, CSS3, TailwindCss, Node.js, Typescript, Mongoose, Mongodb",
    link: "https://www.tempown.com/",
    subtitle: "Peer-to-peer e-commerce site",
    description: `A peer-to-peer e-commerce site that connects lenders and borrowers of a particular item together for a small fee.`
  },
  {
    name: "Property",
    image: property,
    stack: "React.js, HTML5, styled-components",
    link: "https://thepropertyapp.netlify.app/",
    subtitle: "Real-estate and property-listing platform",
    description: `Property is a platform to sell, rent, short let and acquire properties, lands,
            flats and houses in Nigeria. It also allows real estate companies access better funding options 
            which lets them complete projects and make homes more affordable.`
  },

  {
    name: "imagePizzle",
    image: imagePizzle,
    stack: "React.js, Javascript, HTML5, CSS3, Node.js, Express.js",
    link: "https://imagepie.onrender.com/",
    subtitle: "Image manipulation application",
    description: `This application provides means to make your image file responsive on the web, android and ios with different specifications pertaining to different platforms.`
  },
  {
    name: "Sammi-Url",
    image: sammiUrl,
    stack: "React.js, styled-components, Node.js, Express.js, Postgres, Typeorm",
    link: "https://sammi-url.onrender.com/url",
    subtitle: "Url Shortener",
    description: `
    This application enables users to customize their long url into a shorter version that can be put into forms and it also shows a list of all urls that have been shortened when a user logs in.`
  },
  {
    name: "Tempown Enterprise",
    image: tempownEnt,
    status: "pending",
    stack: "React.js, Javascript, HTML5, CSS3, TailwindCss, Node.js, Typescript, Mongoose, Mongodb",
    link: "https://www.tempown.com/enterprise",
    subtitle: "Peer-to-peer e-commerce site, Enterprise version",
    description: `The enterprise version of the peer-to-peer e-commerce site that connects lenders and borrowers of a particular item together for a small fee.`
  },
  // {
  //    "name": "Adela",
  //   "image": adela,
  //     "stack": "HTML5, CSS3, Javascript",
  //   "link": "https://ty-codes.github.io/adela",
  //   "subtitle": "Product landing page",
  //    "description": "Landing page for Adela, a cosmetic company that provides skin and body care products. "
  // },
  
];
export default data;
