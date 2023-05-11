import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    shopify,
    mongodb,
    python,
    sql,
    threejs,
    bootstrap,
    aastey,
    internshala,
    todolist,
    newsletter,
    drumkit,
    linkedin,
    leetcode,
    instagram,
    hackerrank,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "ReactJS Developer",
      icon: backend,
    },
    {
      title: "SEO",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Shopify",
      icon: shopify,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "WEB Development",
      company_name: "Internshala",
      icon: internshala,
      iconBg: "#383E56",
      date: "September 2021 - November 2021",
      points: [
        "Learnt HTML, CSS, Bootstrap, Javascript.",
        "Explored the basics of PHP, DBMS, React.",
        "Made a portfolio website as the project.",
        "Learnt how to deploy the website.",
      ],
    },
    {
      title: "Web Analytics Intern",
      company_name: "Aastey",
      icon: aastey,
      iconBg: "#E6DEDD",
      date: "July 2022 - September 2022",
      points: [
        "Made the whatsapp popup box at the frontend using HTML, CSS, Javascript.",
        "Created Emailers which hasto be forwarded to their customers daily.",
        "Created the Popup and Widget forshowing the integration of aastey with other company using HTML, CSS, Javascript, liquid.",
        "Participated in code reviews and providing constructive feedback to other teammates.",
      ],
    },
  ];
  
  const certificates = [
    {
      description:
        "Learnt the basics of python like Data Types, Data Structures and Control Flow.",
      title: "Programming for Everybody",
      company: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/DEZTD766A7G8",
    },
    {
      description:
        "Learnt about the Data Structures in python like List, String, Binary Tree, Linked List, Stack.",
      title: "Python Data Structure",
      company: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/U7JK3ABVT7ME",
    },
    {
      description:
        "Learnt about the different elements and tags of HTML and their functionalities.",
      title: "Introduction to HTML",
      company: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/QBBEGWCBXLR2",
    },
  ];
  
  const projects = [
    {
      name: "News Letter",
      description:
        "Made a Newsletter signup page using HTML, CSS, Javascript, Bootstrap, NODEjs which is linked with Mailchimp API. When user enters his/her details like first name, last name, email address etc. and clicks on submit button then the data get stored on Mailchimp.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "mailchimp",
          color: "pink-text-gradient",
        },
      ],
      image: newsletter,
      source_code_link: "https://github.com/cutecontriver/newsLetterSignup",
    },
    {
      name: "To-Do List",
      description:
        "Made a to-do list using HTML, CSS, Javascript, Bootstrap, NODEjs, MongoDB. When user enters his/her whole day task then it get stored in a database which is created using MongoDB.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/cutecontriver/todolist",
    },
    {
      name: "Drum Kit",
      description:
        "Made Drum Kit game using the HTML, CSS, Javascript and Bootstrap. It can be played with both keyboard and mouse.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: drumkit,
      source_code_link: "https://github.com/cutecontriver/drumkit",
    },
  ];

  const socials=[
    {
      name:"LinkedIn",
      icon:linkedin,
      url:"https://www.linkedin.com/in/niikkk/"
    },
    {
      name:"Leetcode",
      icon:leetcode,
      url:"https://leetcode.com/niikkk/"
    },
    {
      name:"HackerRank",
      icon:hackerrank,
      url:"https://www.hackerrank.com/cutedeveloper021"
    },
    {
      name:"Instagram",
      icon:instagram,
      url:"https://www.instagram.com/panneeeer/"
    },
  ];
  
  export { services, technologies, experiences, certificates, projects, socials };