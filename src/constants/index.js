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
      content: "4.11/4.33",
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
        "Collaborated with staff to coordinate crowd control efforts, fostering collaboration and a smooth event experience.",
        "Responded effectively to unexpected challenges, delivering high-quality support to both fans and staff.",
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
        "Developed an OOP-based Python tool to automate DHCP server setup, optimizing reliability and workflows with positive client feedback.",
        "Created PowerShell scripts to automate installation and application processes, improving time efficiency by 40%.",
        "Integrated and tested C++ code with third-party software, ensuring accurate simulation outputs and seamless application performance.",
        "Adapted quickly to dynamic project requirements, collaborating with teams to apply software engineering principles and deliver high-quality solutions within tight deadlines."
      ],
    },
  ];
  
  const certificates = [
    {
      name:"IEEE CSTMC’s 2023-2024 Software Fundamentals Workshop",
      description: "Completed the IEEE CSTMC Software Fundamentals Workshop, gaining hands-on experience with essential technologies and programming languages, including Unix, Python, SQL, and Git.",
      image: ieee,
    },
    {
      name:"Professional C++ Programming Course",
      description: "Completed an in-depth course covering foundational to advanced concepts in C++ programming, with a focus on practical application and software development techniques.",
      image: udemy,
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
      name: "Weather Data Analysis",
      description:
        "This program uses various functions to analyze daily surface data from the database of the National Oceanic and Atmospheric Administration.",
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
      source_code_link: "https://github.com/MasterPancho/Weather-Data-Analysis/tree/main",
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
  ];
  
  export { services, technologies, environments, experiences, certificates, awards, testimonials, projects };
  