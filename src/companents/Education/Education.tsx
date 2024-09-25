import education from '../../assets/education.png';
import StepIT from '../../assets/StepIT.png';
import AACU from '../../assets/AACU.png';
const Education = () => {
    return (
        <>
            <section id='EDUCATION'>
                <div className='skills_container'>
                    <div className='skills_header_container'>
                        <div>
                            <img className='skills_icon' src={education} alt="" />
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
                                title: "AZERBAIJAN UNIVERSITY OF ARCHITECTURE AND CONSTRUCTION",
                                degree: "Bachelor",
                                date: "Sep, 2020 — Jun, 2025",
                                qualification: "Marketing"
                            },
                            {
                                src: StepIT,
                                title: "STEP IT ACADEMY",
                                degree: "Course",
                                date: "Nov, 2023 — Sep, 2024",
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
        </>
    )
}

export default Education