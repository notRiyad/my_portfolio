import { SourceCode } from "eslint";

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://notRiyad.github.io/my_portfolio/',
  title: 'RE.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Riyad El Yacoubi',
  role: 'CS Student at EPITA',
  description:
  "Devoted to ongoing learning, I embrace the latest tech trends while balancing a life enriched by passions for football and gaming. In my coding adventures, VIM's grip on me is akin to a captivating video game—you just can't quit once you're in.",
  resume: 'https://raw.githubusercontent.com/notRiyad/my_portfolio/main/assets/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/riyad-el-yacoubi-aa67b821a/',
    github: 'https://github.com/notRiyad/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'JWS & Creeps',
    description:
      'Crafted "Creeps," a Java-based gaming experience that blends strategy, resource management, and territorial expansion, enriching gameplay through achievement validation. Additionally, engineered a RESTful backend for an online Bomberman game, employing Quarkus and Hibernate ORM frameworks to establish a layered architecture and facilitate smooth client interaction with multiple endpoints.',
    stack: ['Java', 'JUnit', 'Hibernate ORM', 'Quarkus', 'Unirest'],
  },
  {
    name: 'TIGER',
    description:
      'Developed a compiler for the Tiger programming language, leveraging C++ alongside tools like Flex, Bison, LLVM, and Clang. The project encompassed the creation of lexical, syntactic, and semanticanalyzers to parse and process Tiger source code efficiently.',
    stack: ['C++', 'Tiger Language', 'LLVM', 'Clang', 'Flex', 'Bison'],
  },
  {
    name: '42SH',
    description:
      'Collaborated within a group to construct a Unix-like shell in C, emulating core functionalities including command execution, input/output redirection, and background process management.',
    stack: ['C', 'GDB', 'Valgrind', 'Unix Shell'],
  },
  {
    name: 'Tic Tac Toe',
    description:
    'Created as my inaugural project in HTML and CSS, Tic Tac Toe is a humble yet instructive endeavor. This simplistic game serves as an entry point into the world of web development, allowing me to grasp foundational concepts in HTML and CSS. While modest in scale, this project underscores my enthusiasm for learning and my commitment to mastering the fundamentals of web development.',
    stack: ["HTML", "CSS", "Javascript"],
    SourceCode: 'https://github.com/notRiyad/TTT',
  },
  {
    name: 'Malloc',
    description:
      'Implemented and optimized a thread-safe memory allocation library in C, ensuring efficiency and reliability through extensive testing.',
    stack: ['C', 'Linux', 'GDB', 'Valgrind'],
  },
  {
    name: 'HTTPD',
    description:
      'Implemented core features for an HTTP daemon, learning network programming, asynchronous programming, and advanced Linux system calls. Handled necessary system operations for it to run as a Linux service.',
    stack: ['C', 'Linux', 'Network Programming', 'Asynchronous Programming'],
  }
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C/C++',
  'Java',
  'Javascript',
  'PostgreSQL',
  'HTML',
  'CSS',
  'OCaml',
  'Python',
  'Linux/Shell',
  'Docker',
  'JUnit',
  'Jest',
  'UniRest',
  'Axios',
  'Fetch',
  'Express',
  'Node.js',
  'Hibernate ORM',
  'Quarkus',
  'Socket.io',
  'Swagger',
  'VITE'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'riyad.el-yacoubi@epita.fr',
}

export { header, about, projects, skills, contact }
