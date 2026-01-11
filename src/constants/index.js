import {
    language,
    graduation,
    softdev,
    gpa,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    github,
    github_dark,
    docker,
    jays,
    hitachi,
    atari,
    bookstore,
    weather,
    dice,
    threejs,
    cpp,
    c,
    java ,
    kubernetes,
    linux,
    office,
    powershell,
    python,
    sql,
    ubuntu,
    vite,
    vscode,
    vstudio,
    ieee,
    udemy,
    hitachicoop,
    stadiumstar,
    pokeith,
    dean2022,
    dean2023,
    dean2024,

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
      title: "Software Developer",
      content: null,
      icon: softdev,
    },
    {
      title: "English & Spanish",
      content: null,
      icon: language,
    },
    {
      title: "Graduation: ",
      content: "May 2026",
      icon: graduation,

    },
    {
      title: "GPA: ",
      content: "4.12/4.33",
      icon: gpa,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  ];
  
  const environments = [
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: github_dark,
    },
    {
      name: "powershell",
      icon: powershell,
    },
    {
      name: "linux",
      icon: linux,
    },
    {
      name: "office",
      icon: office,
    },
    {
      name: "Visual Code",
      icon: vscode,
    },
    {
      name: "nodejs",
      icon: nodejs,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "Usher",
      company_name: "Toronto Blue Jays",
      icon: jays,
      iconBg: "#05255c",//#383E56",      
      date: "Summer 2022; Summer 2023",
      points: [
        "Ensured a secure and enjoyable experience for fans through consistent implementation of stadium policies.",
        "Collaborated with staff to manage crowd control efforts, fostering collaboration and a smooth event experience.",
        "Responded effectively to unexpected challenges, delivering high-quality support to both fans and staff.",
        "Recognized for great performance with a Golden Pin in the 2022 season, and Employee of the Month in August 2023.",
        ],        
    },
    {
      title: "Software Analyst (Co-op)",
      company_name: "Hitachi Rail",
      icon: hitachi,
      iconBg: "#F2ECEB",
      date: "June 2024 - August 2025",
      points: [
        "Built an OOP-based Python automation tool for software deployment on train components, improving reliability and reducing deployment effort by 80%.",
        "Created PowerShell scripts to automate software installation across environments, cutting manual execution time by 75%.",
        "Performed functional and integration testing on C++ train simulation software, analyzing logs to identify defects and support debugging.",
        "Adapted quickly to dynamic project requirements, collaborating with teams to apply software engineering principles and deliver high-quality solutions within tight deadlines."
      ],
    },
  ];
  
  const certificates = [
    {
      name:"Hitachi Rail – Internship Program Certificate of Achievement",
      description: "Completed the Internship Program at Hitachi Rail, contributing to software development and system validation activities while applying engineering best practices in a professional environment.",
      image: hitachicoop,
    },
    {
      name:"Professional C++ Programming Course",
      description: "Completed an in-depth course covering foundational to advanced concepts in C++ programming, with a focus on practical application and software development techniques.",
      image: udemy,
    },    
    {
      name:"IEEE CSTMC’s 2023-2024 Software Fundamentals Workshop",
      description: "Completed the IEEE CSTMC Software Fundamentals Workshop, gaining hands-on experience with essential technologies and programming languages, including Unix, Python, SQL, and Git.",
      image: ieee,
    },
  ];

  const awards = [
    {
      name:" Po Keith Achievement Award ",
      description: "Award given to a second-year computer engineering student who has shown academic achievement and has obtained a minimum CGPA of 3.67.",
      image: pokeith,
    },
    {
      name:"2021-2022 Dean's List",
      description: "Award given to students who have achieved an overall GPA higher than 3.5 for the academic year.",
      image: dean2022,
    },
    {
      name:"2022-2023 Dean's List",
      description: "Award given to students who have achieved an overall GPA higher than 3.5 for the academic year.",
      image: dean2023,
    },
    {
      name:"2023-2024 Dean's List",
      description: "Award given to students who have achieved an overall GPA higher than 3.5 for the academic year.",
      image: dean2024,
    },
    {
      name:"Blue jays - Employee of the Month",
      description: "Recognition for my exceptional performance as Employee of the Month in August 2023",
      image: stadiumstar,
    },
  ]
  
  const testimonials = [
    {
      testimonial:"",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Die Detection Tool",
      description:
        "A computer vision application that captures images of a six-sided die and compares multiple recognition techniques (OCR, CNN, and GPT-4o) to identify the number on its top face.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "vs code",
          color: "green-text-gradient",
        },
      ],
      image: dice,
      source_code_link: "https://github.com/MasterPancho/Die-Detection",
    },
    
    {
      name: "Weather Data Analysis",
      description:
        "A program that analyzes daily surface data from the National Oceanic and Atmospheric Administration (NOAA) database, using multiple functions to compute temperature metrics and present results in a structured format",
      tags: [
        {
          name: "c",
          color: "blue-text-gradient",
        },
        {
          name: "geany",
          color: "green-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/MasterPancho/Weather-Data-Analysis",
    },

    {
      name: "Atari Pong Game",
      description:
        "A 1v1 multiplayer game, where each player must hit the ball with a racket aiming to score points. This game incorporates mechanics including collision detection, racket control, and a scoring system.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pycharm",
          color: "green-text-gradient",
        },
      ],
      image: atari,
      source_code_link: "https://github.com/MasterPancho/Atari-Pong-Game",
    },



    // {
    //   name: "Bookstore Application",
    //   description:
    //     "An application with functionalities for administrators and customers. Logging in as an admin enables the addition or removal of books and customers from the app. In contrast, logging in as a customer allows for purchasing books only.",
    //   tags: [
    //     {
    //       name: "java",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "netbeans",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "javafx",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: bookstore,
    //   source_code_link: "https://github.com/MasterPancho/Book-Store-Application/tree/main",
    // },

  ];
  
  export { services, technologies, environments, experiences, certificates, awards, testimonials, projects };
  