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
  resume: '/home/riyad/my_portfolio/assets/resume.pdf',
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
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
