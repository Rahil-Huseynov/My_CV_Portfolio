import { useEffect, useState } from 'react';
import diploma from '../../assets/award.png';
import my_diploma from '../../assets/Diploma IT.png';
import './Diploma.css';

const Diploma = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleModal = () => {
        if (isModalOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsModalOpen(false);
                setIsClosing(false);
            }, 500);
        } else {
            setIsModalOpen(true);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [isModalOpen]);

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
                            <p className='my_skills_about'>
                                For me, a diploma represents dedication and the knowledge I've gained, marking my commitment to continuous learning.
                            </p>
                        </div>
                    </div>
                    <div className='all_my_education_container'>
                        <img 
                            className='my_diploma' 
                            src={my_diploma} 
                            alt="my_diploma" 
                            onClick={toggleModal} 
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
            </section>
            <div className='divide'></div>

            {isModalOpen && (
                <div className={`modal_diploma ${isClosing ? 'closing' : ''}`} onClick={toggleModal}>
                    <div className={`modal_content_diploma ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
                        <span className='close_button_diploma' onClick={toggleModal}>&times;</span>
                        <img src={my_diploma} alt="my_diploma_large" className='modal_image_diploma' />
                    </div>
                </div>
            )}
        </>
    );
}

export default Diploma;
