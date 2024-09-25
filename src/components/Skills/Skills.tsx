import HTML from '../../assets/HTML5.png';
import CSS from '../../assets/CSS.png';
import SCSS from '../../assets/Sass.png';
import Javascript from '../../assets/Javascript.png';
import Typescript from '../../assets/Typescript.png';
import ReactIcon from '../../assets/React.png';
import Redux from '../../assets/Redux.svg';
import skills from '../../assets/skills.png';
import './Skills.css'


const Skills = () => {
    return (
        <>
            <section id='SKILLS'>
                <div className='skills_container'>
                    <div className='skills_header_container'>
                        <div>
                            <img className='skills_icon' src={skills} alt="skills_icon" />
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
        </>
    )
}

export default Skills