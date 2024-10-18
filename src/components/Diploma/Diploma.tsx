import diploma from '../../assets/award.png';
import my_diploma from '../../assets/Diploma IT.png';
import './Diploma.css'
const Diploma = () => {
    return (
        <>
            <section id='DIPLOMA'>
                <div className='skills_container'>
                    <div className='skills_header_container'>
                        <div>
                            <img className='skills_icon' src={diploma} alt="" />
                        </div>
                        <div>
                            <h2 className='skills'>Diploma<span className='point'>.</span></h2>
                            <p className='my_skills_about'>For me, a diploma represents dedication and the knowledge I've gained, marking my commitment to continuous learning.</p>
                        </div>
                    </div>
                    <div className='all_my_education_container'>
                        <img className='my_diploma' src={my_diploma} alt="my_diploma" />
                    </div>
                </div>
            </section>
            <div className='divide'></div>
        </>
    )
}

export default Diploma