export interface IProject {
  title: string,
  imagePath: string,
  date: string,
  projectSummary: string,
  skillSummary: string,
}

export const projects = [
  {
    title: 'Website with Blog',
    imagePath: 'hello',
    date: 'January 2022',
    projectSummary: 'A personal website with the core purpose of sharing learnings to be useful in a small way. It has the added benefit of posing as an online resume in addition to an easy portal for feedback, showing proof of concept, and attracting curious friends.',
    skillSummary: 'Angular framework, SEO optimization, SCSS, web-optimization (reducing Javascript, decreasing file size, cacheing), json'
  },
  {
    title: 'Website with Animations',
    imagePath: 'hello',
    date: 'April 2021',
    projectSummary: 'A personal website with the core purpose of being visually appealing and fun to scroll through.',
    skillSummary: 'React framework, SCSS, UX/UI Design'
  }
]
