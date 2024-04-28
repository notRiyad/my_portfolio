const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'notRiyad.github.io',
  title: 'RE.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Riyad El Yacoubi',
  role: 'CS Student at EPITA',
  description:
    'Keen on staying abreast of the latest technologies, I integrate continuous learning into my coding pursuits, finding relaxation and inspiration in my interests in football and video games.',
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
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Git',
  'Jest',
  'C',
  'Java',
  'C++',
  'Python',
  'PostgreSQL',
  'Docker',
  'OCaml',
  'Linux/Shell',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'riyad.el-yacoubi@epita.fr',
}

export { header, about, projects, skills, contact }
