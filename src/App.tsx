import './App.css';
import photo from './assets/image.jpg';
import my_cv from '../public/Rahil_Huseynov_CV.pdf';
import HTML from './assets/HTML5.png';
import CSS from './assets/CSS.png';
import SCSS from './assets/Sass.png';
import Javascript from './assets/Javascript.png';
import Typescript from './assets/Typescript.png';
import ReactIcon from './assets/React.png';
import Redux from './assets/Redux.svg';
import Skills from './assets/skills.png';
import Education from './assets/education.png';
import StepIT from './assets/StepIT.png';
import AACU from './assets/AACU.png';
import Portfolio from './assets/portfolio.png';
import Project from './assets/project.png';
import MyProject from './assets/Myproject.png';
import { useGetUserReposQuery } from './services/GIthubAPI'; 
import { useState } from 'react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  created_at:string
}

const App: React.FC = () => {
  const username = 'Rahil-Huseynov';
  const { data: repos = [] } = useGetUserReposQuery(username);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 3;

  const nextRepos = () => {
    if (currentIndex + itemsPerPage < repos.length) {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    }
  };

  const prevRepos = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
    }
  };

  return (
    <>
      <header>
        <div className='header_container'>
          <div className='my_name_container'>
            <p className='my_name'>Rahil Huseynov</p>
          </div>
          <div>
            <ul className='navbar_items'>
              <li>HELLO</li>
              <li>SKILLS</li>
              <li>EXPERIENCE</li>
              <li>EDUCATION</li>
              <li>PORTFOLIO</li>
              <li>FEEDBACK</li>
              <li>CONTACT ME</li>
            </ul>
          </div>
        </div>
      </header>
      <div className='divide'></div>

      <section>
        <div className='first_section_container'>
          <div className='section_my_about_container'>
            <div>
              <h1 className='my_about_header'>I am Rahil Huseynov</h1>
              <p className='my_about_text'>
                A motivated and dedicated front-end developer intern looking to use my skills in JavaScript, TypeScript, Redux, HTML, CSS, SCSS, and React to contribute to dynamic projects and further develop my expertise in web development.
              </p>
              <div className='about_contact_container'>
                <div className='about_contact'>
                  <p className='contact'>PHONE</p>
                  <p className='contact'>EMAIL</p>
                  <p className='contact'>ADDRESS</p>
                  <p className='contact'>SOCIAL</p>
                </div>
                <div className='about_contact'>
                  <p className='contact_answer'>+994(51)-710-82-46</p>
                  <p className='contact_answer'>huseynov.rahil.05@gmail.com</p>
                  <p className='contact_answer'>-</p>
                  <p className='contact_answer'>-</p>
                </div>
              </div>
              <div className='download_container'>
                <button className='contact_me'>CONTACT ME</button>
                <a className='Download_CV' href={my_cv} download>Download CV</a>
              </div>
            </div>
          </div>
          <div className='photo_container'>
            <img className='photo' src={photo} alt="" />
          </div>
        </div>
      </section>
      <div className='divide'></div>

      <section>
        <div className='skills_container'>
          <div className='skills_header_container'>
            <div>
              <img className='skills_icon' src={Skills} alt="" />
            </div>
            <div>
              <h2 className='skills'>Skills<span className='point'>.</span></h2>
              <p className='my_skills_about'>I am inspired by creating great work with people who are as passionate as I am about building something awesome.</p>
            </div>
          </div>
          <div className='all_my_skills_container'>
            {[
              { src: HTML, label: "HTML" },
              { src: CSS, label: "CSS" },
              { src: SCSS, label: "SCSS" },
              { src: Javascript, label: "JavaScript" },
              { src: Typescript, label: "TypeScript" },
              { src: ReactIcon, label: "React" },
              { src: Redux, label: "Redux" },
            ].map(skill => (
              <div className='my_skills_container' key={skill.label}>
                <img className='icon_my_skills' src={skill.src} alt={skill.label} />
                <p>{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='divide'></div>

      <section>
        <div className='skills_container'>
          <div className='skills_header_container'>
            <div>
              <img className='skills_icon' src={Education} alt="" />
            </div>
            <div>
              <h2 className='skills'>Education<span className='point'>.</span></h2>
              <p className='my_skills_about'>All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.</p>
            </div>
          </div>
          <div className='all_my_education_container'>
            {[
              {
                src: AACU,
                title: "Azerbaijan University of Architecture and Construction",
                degree: "Bachelor",
                date: "Sep, 2020 — Jun, 2025",
                qualification: "Marketing"
              },
              {
                src: StepIT,
                title: "STEP IT",
                degree: "Course",
                date: "Nov, 2023 — Aug, 2024",
                qualification: "Front-end Developer"
              },
            ].map(edu => (
              <div className='my_skills_container' key={edu.title}>
                <img className='icon_my_education' src={edu.src} alt={edu.title} />
                <div className='education_about'>
                  <p>{edu.title}</p>
                  <p className='education_history'>{edu.degree}</p>
                  <p className='education_history'>{edu.date}</p>
                  <p className='education_qualification'>{edu.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='divide'></div>

      <section>
        <div className='skills_container'>
          <div className='skills_header_container'>
            <div>
              <img className='skills_icon' src={Portfolio} alt="" />
            </div>
            <div>
              <h2 className='skills'>Portfolio<span className='point'>.</span></h2>
            </div>
          </div>
          <div className='skills_header_container'>
            <div>
              <img className='skills_icon' src={MyProject} alt="" />
            </div>
            <div>
              <h2 className='skills'>My Project<span className='point'>.</span></h2>
            </div>
          </div>
        </div>
        <div>
          <div className='all_project_container'>
            {repos.slice(currentIndex, currentIndex + itemsPerPage).map((repo: Repo) => (
              <div key={repo.id} className='project_container'>
                <img className='project_img' src={Project} alt="" />
                <h2>{repo.name}</h2>
                <h4>{repo.created_at.split("T")[0]}</h4>

                <p>
                  <a className='visit_github' href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    Visit Repository
                  </a>
                </p>
              </div>
            ))}
          </div>
          <div className='pagination'>
            <button className='previous' onClick={prevRepos} style={{ display: currentIndex === 0 ? 'none' : 'block' }}>
              &laquo; Previous
            </button>
            <button className='next' onClick={nextRepos} style={{ display: currentIndex + itemsPerPage >= repos.length ? 'none' : 'block' }}>
              Next &raquo;
            </button>
          </div>
        </div>
      </section>
      <div className='divide'></div>

    </>
  );
};

export default App;
