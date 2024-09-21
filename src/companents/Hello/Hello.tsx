import photo from '../../assets/image.jpg';
import burger from '../../assets/burger.png';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import my_cv from '../../../public/Rahil_Huseynov_CV.pdf';
import './Hello.css'
import { useEffect, useState } from 'react';
import Modal_Contact from '../Modal_Contact/Modal_Contact';

const Hello: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
    const handleOpenModal = (): void => {
        setShowModal(true);
    };

    const handleCloseModal = (): void => {
        setShowModal(false);
    };
    const toggleNavbar = (): void => {
        setIsNavbarOpen(!isNavbarOpen);
    }

    const toggleNavbarlink = (): void => {
        setIsNavbarOpen(!isNavbarOpen);
    }
    useEffect(() => {
        if (showModal || isNavbarOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showModal, isNavbarOpen]);
    return (
        <>
            <header id='header_hello'>
                <div className='header_container'>
                    <div className='my_name_container'>
                        <p className='my_name'>Rahil Huseynov<span className='point'>.</span></p>
                    </div>
                    <div className='navbar_container'>
                        <ul className='navbar_items'>
                            <li className='nav_items'><a className='link_nav' href="#Hello">HELLO</a></li>
                            <li className='nav_items'><a className='link_nav' href="#SKILLS">SKILLS</a></li>
                            <li className='nav_items'><a className='link_nav' href="#EDUCATION">EDUCATION</a></li>
                            <li className='nav_items'><a className='link_nav' href="#PORTFOLIO">PORTFOLIO</a></li>
                            <li className='nav_items'><a className='link_nav' href="#CONTACTME">CONTACT ME</a></li>
                        </ul>
                    </div>
                    <div className='burger_container'>
                        <div className={`'burger' ${!isNavbarOpen ? 'open_burger' : 'close_burger'}`} onClick={toggleNavbar}>
                            <img className='burger_item' src={burger} alt="burger" />
                        </div>
                    </div>
                    <div className={` ${!isNavbarOpen ? 'close' : 'open'}`}>
                        <div className={`navbar_container_mobile ${isNavbarOpen ? 'open' : 'close'}`}>
                            <div className='navbar_container_items_mobile'>
                                <div className='close_navbar_mobile' onClick={toggleNavbar}>
                                    <p className='close_icon'>&times;</p>
                                </div>
                                <div>
                                    <ul className='navbar_items_mobile'>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#Hello">HELLO</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#SKILLS">SKILLS</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#EDUCATION">EDUCATION</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#PORTFOLIO">PORTFOLIO</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#CONTACTME">CONTACT ME</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='divide'></div>

            <section id='Hello' className='desktop-hello'>
                <div className='first_section_container'>
                    <div className='section_my_about_container'>
                        <div>
                            <h1 className='my_about_header'>I am Rahil Huseynov<span className='point'>.</span></h1>
                            <p className='my_about_text'>
                                A motivated and dedicated front-end developer intern looking to use my skills in JavaScript, TypeScript, Redux, HTML, CSS, SCSS, and React to contribute to dynamic projects and further develop my expertise in web development.
                            </p>
                            <div className='about_contact_container'>
                                <div className='about_contact'>
                                    <div className='contact_data'>
                                        <p className='contact'>PHONE</p>
                                        <p className='contact_answer'>+994(51)-710-82-46</p>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>EMAIL</p>
                                        <p className='contact_answer'>huseynov.rahil.05@gmail.com</p>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>ADDRESS</p>
                                        <p className='contact_answer'>Baku, Azerbaijan</p>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>SOCIAL</p>
                                        <div className='about_contact'>
                                            <div className='sosial_icon_container'>
                                                <a href="https://www.instagram.com/rahil_huseynov/" target="_blank"><img className='sosial_icon' src={instagram} alt="instagram" /></a>
                                                <a href="https://www.linkedin.com/in/rahil-huseynov/" target="_blank"><img className='sosial_icon' src={linkedin} alt="linkedin" /></a>
                                                <a href="https://github.com/Rahil-Huseynov/" target="_blank"><img className='sosial_icon' src={github} alt="github" /></a>
                                                <a href="https://x.com/huseynov_rahil" target="_blank"><img className='sosial_icon' src={twitter} alt="x" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='download_container'>
                                <button className='contact_me' onClick={handleOpenModal}>CONTACT ME</button>
                                <a className='Download_CV' href={my_cv} download>Download CV</a>
                            </div>
                        </div>
                    </div>
                    <div className='photo_container'>
                        <img className='photo' src={photo} alt="" />
                    </div>
                </div>
            </section>

            <section id='Hello' className='mobile-hello'>
                <div className='first_section_container'>
                    <div className='photo_container'>
                        <img className='photo' src={photo} alt="" />
                    </div>
                    <div className='section_my_about_container'>
                        <div>
                            <h1 className='my_about_header'>I am Rahil Huseynov<span className='point'>.</span></h1>
                            <p className='my_about_text'>
                                A motivated and dedicated front-end developer intern looking to use my skills in JavaScript, TypeScript, Redux, HTML, CSS, SCSS, and React to contribute to dynamic projects and further develop my expertise in web development.
                            </p>
                            <div className='about_contact_container'>
                                <div className='about_contact'>
                                    <div className='contact_data'>
                                        <p className='contact'>PHONE</p>
                                        <p className='contact_answer'>+994(51)-710-82-46</p>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>EMAIL</p>
                                        <p className='contact_answer'>huseynov.rahil.05@gmail.com</p>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>ADDRESS</p>
                                        <p className='contact_answer'>Baku, Azerbaijan</p>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>SOCIAL</p>
                                        <div className='about_contact'>
                                            <div className='sosial_icon_container'>
                                                <a href="https://www.instagram.com/rahil_huseynov/" target="_blank"><img className='sosial_icon' src={instagram} alt="instagram" /></a>
                                                <a href="https://www.linkedin.com/in/rahil-huseynov/" target="_blank"><img className='sosial_icon' src={linkedin} alt="linkedin" /></a>
                                                <a href="https://github.com/Rahil-Huseynov/" target="_blank"><img className='sosial_icon' src={github} alt="github" /></a>
                                                <a href="https://x.com/huseynov_rahil" target="_blank"><img className='sosial_icon' src={twitter} alt="x" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='download_container'>
                                <button className='contact_me' onClick={handleOpenModal}>CONTACT ME</button>
                                <a className='Download_CV' href={my_cv} download>Download CV</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {showModal && <Modal_Contact onClose={handleCloseModal} isActive={showModal} />}

            <div className='divide'></div>
        </>
    )
}

export default Hello