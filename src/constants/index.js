import {
    graduation,
    backend,
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
    tripguide,
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
      icon: softdev,
    },
    {
      title: "Graduation: May 2026",
      icon: graduation,
    },
    {
      title: "",
      icon: backend,
    },
    {
      title: "GPA: 3.80/4.00",
      icon: gpa,
    },
  ];
  
  const technologies = [
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "C++",
      icon: cpp,
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
      name: "powershell",
      icon: powershell,
    },
    // {
    //   name: "Kubernetes",
    //   icon: kubernetes,
    // },
  ];
  
  const environments = [
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "github",
      icon: github_dark,
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
      name: "Visual Studio",
      icon: vstudio,
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
        "Ensured a positive and safe environment for the fans by enforcing the stadium policies and procedures.", 
        "Collaborated with staff to maintain crowd control, promptly resolve issues, and build a productive work environment.",
        "Recognized for great performance with a Golden Pin in the 2022 season, and Employee of the Month in August 2023.",
      ],
    },
    {
      title: "Software Analyst Internship",
      company_name: "Hitachi Rail",
      icon: hitachi,
      iconBg: "#F2ECEB",
      date: "June 2024 - Current",
      points: [
        "Developed an OOP-based Python solution to configure and automate the setup of a device's DHCP server, enhancing reliability and improving user-friendliness. This tool significantly optimized workflows, as noted in client feedback.",
        "Currently adapting my program to the Electron framework, shifting from Python to JavaScript, Node.js, and React.",
        "Analyzed test data to identify and diagnose software issues, ensuring efficient troubleshooting and resolution.",
        "Created PowerShell scripts to automate installation and application processes, improving time efficiency by 40%.",
        "Conducted functional testing on C++ simulation software to ensure accurate and reliable real-time data processing.",
        "Applied software engineering principles to real-world scenarios, adhering to company protocols and OOP standards.",
        "Integrated C++ code with third-party software, ensuring seamless application performance and reliability.",
      ],
    },
  ];
  
  const certificates = [
    {
      name:"IEEE CSTMC’s 2023-2024 Software Fundamentals Workshop",
      description: "Completed the IEEE CSTMC Software Fundamental Workshop",
      image: ieee,
    },
    {
      name:"C++ course",
      description: "Completed 30hr course dealing with C++",
      image: ieee,
    },
  ];

  const awards = [
    {
      name:"Dean's List",
      description: "Nominated on the Dean's list for three consecutive years.",
      image: ieee,
    },
    {
      name:" Po Keith Achievement Award ",
      description: "Nominated on the Dean's list for three consecutive years.",
      image: ieee,
    },
    {
      name:"Entrance Scholarship",
      description: "Nominated on the Dean's list for three consecutive years.",
      image: ieee,
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
      source_code_link: "https://github.com/MasterPancho/Atari-Pong-Game/tree/main",
    },
    {
      name: "Bookstore Application",
      description:
        "An application with functionalities for administrators and customers. Logging in as an admin enables the addition or removal of books and customers from the app. In contrast, logging in as a customer allows for purchasing books only.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "netbeans",
          color: "green-text-gradient",
        },
        {
          name: "javafx",
          color: "pink-text-gradient",
        },
      ],
      image: bookstore,
      source_code_link: "https://github.com/MasterPancho/Book-Store-Application/tree/main",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, environments, experiences, certificates, awards, testimonials, projects };
  