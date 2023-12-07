import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  html5,
  css3,
  html55,
  css33,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  django,
  github,
  elephant,
  bootstrap,
  flstudio,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  einstein,
  emma,
  converter,
  authorg,
  planets,
  iphone3d,
  jobit,
  tripguide,
  threejs,
  logo,
  javascriptjs,
  node,
  react,
  tailwindcss,
  polygon,
  threew,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html55,
  },
  {
    name: "CSS 3",
    icon: css33,
  },
  {
    name: "JavaScript",
    icon: javascriptjs,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: react,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
  },
  {
    name: "Node JS",
    icon: node,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threew,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "elephant",
    icon: elephant,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "flstudio",
    icon: flstudio,
  },
];

const experiences = [
  {
    title: "Polyvalent worker",
    company_name: "Saveurs & Délices (Netanya)",
    icon: logo,
    iconBg: "#383E56",
    date: "April 2022 - January 2023",
    points: [
      "Managed cooking operations, ensuring the preparation of high-quality products.",
      "Oversaw inventory and effectively maintained the cold storage rooms.",
      "Implemented efficient stock management practices, resulting in optimized inventory control.",
    ],
  },
  {
    title: "Business Development Manager",
    company_name: "Adiscos (Paris)",
    icon: logo,
    iconBg: "#383E56",
    date: "July 2013 - August 2021",
    points: [
      "Drove the company's commercial growth through effective business development strategies.",
      "Managed both commercial and administrative aspects, ensuring smooth operations.",
      "Led and motivated the sales team, contributing to their professional development and achieving targets.",
    ],
  },
  {
    title: "Financial Products Advisor",
    company_name: "Aviva (Paris)",
    icon: logo,
    iconBg: "#383E56",
    date: "March 2012 - June 2013",
    points: [
      "Actively developed a client portfolio of individuals and professionals through targeted prospecting strategies.",
      "Successfully proposed and sold savings, investment, and provident solutions, meeting diverse financial needs of clients.",
      "Managed both commercial and administrative aspects, ensuring smooth operations.",
    ],
  },
  {
    title: "Sales Manager",
    company_name: "Santeo (Paris)",
    icon: logo,
    iconBg: "#383E56",
    date: "September 2009 - March 2012",
    points: [
      "Fueled the company's commercial growth, leading to sustained revenue increases.",
      "Developed and implemented innovative sales tools and techniques, enhancing team performance and client engagement.",
      "Managed and mentored a high-performing sales team, fostering a collaborative and productive work environment.",
    ],
  },
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Einstein Tribute",
    description:
      "A website in tribute to Einstein, offering a unique interactive journey through his life and discoveries. You can learn many interesting facts about physics by clicking on the headings in the sidebar, or by hovering over photos of Einstein.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
    ],
    image: einstein,
    source_code_link: "https://github.com/",
  },
  {
    name: "The Curse of Emma",
    description:
      "A text-based adventure game in which you play the role of a heroine in a scenario over which you have complete control. As the story unfolds, you'll be able to choose what happens next. The scenario, illustrations, and music will adapt to your choices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: emma,
    source_code_link: "https://github.com/",
  },
  {
    name: "Auth-Org",
    description:
      "Auth-Org is an application that enables secure authentication, as well as the creation of organizations from a secure space, followed by the addition of members using their email addresses.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "orange-text-gradient",
      },
    ],
    image: authorg,
    source_code_link: "https://github.com/",
  },
    {
    name: "Eco-Converter",
    description:
      "Eco-Converter is an tool that employs a variety of everyday life conversion units. Designed to engage and enlighten, it aims to raise awareness about the importance of conserving water by illustrating how everyday activities impact water usage.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: converter,
    source_code_link: "https://github.com/",
  },
  {
    name: "Planets",
    description:
      "An interactive educational platform providing in-depth knowledge about our solar system's planets, offering an engaging and informative experience for learners of all ages to expand their understanding of these celestial bodies.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: planets,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Animation Iphone",
    description:
      "A 3D Animation using 3D models to display them on the website with WebGi. Then, using React and GSAP to create a 3D animation of that model. Finally, when clicking on 'Try me,' the user also has the ability to manipulate the iPhone in 3D from every angle.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "WebGi",
        color: "pink-text-gradient",
      },
      {
        name: "GSAP",
        color: "orange-text-gradient",
      },
    ],
    image: iphone3d,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };