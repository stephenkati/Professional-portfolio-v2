import reactIcon from '../assets/Icons/react.svg'
import reduxIcon from '../assets/Icons/redux.svg'
import javascriptIcon from '../assets/Icons/javascript.svg'
import viteIcon from '../assets/Icons/vite-svgrepo-com.svg'
import nodeJs from '../assets/Icons/icons8-nodejs.svg'
import htmlIcon from '../assets/Icons/html5.svg'
import cssIcon from '../assets/Icons/css3.svg'
import tailwindIcon from '../assets/Icons/tailwind-css.svg'
import bootstrapIcon from '../assets/Icons/bootstrap.svg'
import rubyIcon from '../assets/Icons/ruby.svg'
import railsIcon from '../assets/Icons/Rails.png'
import postgresIcon from '../assets/Icons/postgresql.svg'
import mysqlIcon from '../assets/Icons/mysql.svg'
import gitIcon from '../assets/Icons/git.svg'
import githubIcon from '../assets/Icons/github-142-svgrepo-com.svg'
import netlifyIcon from '../assets/Icons/netlify.svg'
import jestIcon from '../assets/Icons/jest-svgrepo-com.svg'
import webpackIcon from '../assets/Icons/icons8-webpack.svg'
import figmaIcon from '../assets/Icons/figma.svg'
import photoshopIcon from '../assets/Icons/photoshop.svg'
import illustratorIcon from '../assets/Icons/illustrator.svg'

const skillGroups = [
  {
    title: 'Product interfaces',
    blurb: 'React ecosystems, animations, accessibility, and design systems.',
    items: [
      { icon: reactIcon, label: 'React' },
      { icon: reduxIcon, label: 'Redux' },
      { icon: javascriptIcon, label: 'JavaScript' },
      { icon: viteIcon, label: 'Vite' },
      { icon: htmlIcon, label: 'HTML' },
      { icon: cssIcon, label: 'CSS' },
      { icon: tailwindIcon, label: 'Tailwind' },
      { icon: bootstrapIcon, label: 'Bootstrap' }
    ]
  },
  {
    title: 'Back-end & data',
    blurb: 'APIs, auth, and databases that stay maintainable.',
    items: [
      { icon: nodeJs, label: 'Node.js' },
      { label: 'Express' },
      { label: 'MongoDB' },
      { icon: rubyIcon, label: 'Ruby' },
      { icon: railsIcon, label: 'Rails' },
      { icon: postgresIcon, label: 'Postgres' },
      { icon: mysqlIcon, label: 'MySQL' }
    ]
  },
  {
    title: 'Tooling & craft',
    blurb: 'From CI to design handoff--everything that speeds iteration.',
    items: [
      { icon: gitIcon, label: 'Git' },
      { icon: githubIcon, label: 'GitHub' },
      { icon: netlifyIcon, label: 'Netlify' },
      { icon: jestIcon, label: 'Jest' },
      { icon: webpackIcon, label: 'Webpack' },
      { icon: figmaIcon, label: 'Figma' },
      { icon: photoshopIcon, label: 'Photoshop' },
      { icon: illustratorIcon, label: 'Illustrator' }
    ]
  },
  {
    title: 'DevOps & cloud',
    blurb: 'Linux-to-Kubernetes workflows, AWS automation, and AI-assisted pipelines.',
    items: [
      { label: 'Linux & server management' },
      { label: 'Networking fundamentals' },
      { label: 'Vagrant environments' },
      { label: 'YAML / JSON' },
      { label: 'Bash scripting' },
      { label: 'Python automation' },
      { label: 'Git & GitOps' },
      { label: 'GitHub Actions' },
      { label: 'GitLab CI/CD' },
      { label: 'Jenkins' },
      { label: 'Nexus & SonarQube' },
      { label: 'Terraform' },
      { label: 'Ansible' },
      { label: 'Docker' },
      { label: 'Kubernetes' },
      { label: 'Helm (AI-assisted)' },
      { label: 'AWS (IAM, EC2, S3, RDS, Lambda, VPC)' },
      { label: 'CodePipeline & Beanstalk' },
      { label: 'Route 53 & CloudWatch' },
      { label: 'Amazon Q' },
      { label: 'GitHub Copilot' },
      { label: 'Lens observability' }
    ]
  }
]

const Skills = () => {
  return (
    <section className="section-shell" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Toolbox</p>
          <h3>Everything needed to move from idea to shipped experience.</h3>
          <p>These are the frameworks and tools I reach for daily to keep projects stable, fast, and delightful.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <div>
                <h4>{group.title}</h4>
                <p>{group.blurb}</p>
              </div>
              <div className="skill-pill-group">
                {group.items.map((item) => (
                  <span key={item.label} className="skill-pill">
                    {item.icon && <img src={item.icon} alt="" aria-hidden="true" />}
                    {item.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
