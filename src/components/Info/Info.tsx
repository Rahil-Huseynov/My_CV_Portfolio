import photo from '../../assets/image.png';
import burger from '../../assets/burger.png';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import my_cv from '../../../public/Rahil_Huseynov_CV.pdf';
import './Info.css'
import { useEffect, useState } from 'react';
import Modal_Contact from '../Modal_Contact/Modal_Contact';

const Info: React.FC = () => {
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
    const refresh = () => {
        window.location.reload()
    }
    return (
        <>
            <header id='header_hello'>
                <div className='header_container'>
                    <div className='my_name_container'>
                        <p onClick={refresh} className='my_name'>Rahil Huseynov<span className='point'>.</span></p>
                    </div>
                    <div className='navbar_container'>
                        <ul className='navbar_items'>
                            <li className='nav_items'><a className='link_nav' href="#INFO" rel="nofollow">INFO</a></li>
                            <li className='nav_items'><a className='link_nav' href="#SKILLS" rel="nofollow">SKILLS</a></li>
                            <li className='nav_items'><a className='link_nav' href="#EDUCATION" rel="nofollow">EDUCATION</a></li>
                            <li className='nav_items'><a className='link_nav' href="#DIPLOMA" rel="nofollow">DIPLOMA</a></li>
                            <li className='nav_items'><a className='link_nav' href="#PORTFOLIO" rel="nofollow">PORTFOLIO</a></li>
                            <li className='nav_items'><a className='link_nav' href="#CONTACTME" rel="nofollow">CONTACT ME</a></li>
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
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#INFO_Mobile" rel="nofollow">INFO</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#SKILLS" rel="nofollow">SKILLS</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#EDUCATION" rel="nofollow">EDUCATION</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#DIPLOMA" rel="nofollow">DIPLOMA</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#PORTFOLIO" rel="nofollow">PORTFOLIO</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#CONTACTME" rel="nofollow">CONTACT ME</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='divide'></div>
            </header>

            <section id='INFO' className='desktop-hello'>
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
                                        <a className='link_style_my_info' href="tel:+994517108246" target="_blank"> <p className='contact_answer' rel="nofollow">+994(51) - 710 - 82 - 46</p></a>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>EMAIL</p>
                                        <a className='link_style_my_info' href="mailto:huseynov.rahil.05@gmail.com" target="_blank"> <p className='contact_answer' rel="nofollow">huseynov.rahil.05@gmail.com</p></a>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>ADDRESS</p>
                                        <a className='link_style_my_info' href="https://www.google.com/maps?q=Baku,+Azerbaijan" target="_blank"><p className='contact_answer' rel="nofollow">Baku, Azerbaijan</p></a>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>SOCIAL</p>
                                        <div className='about_contact'>
                                            <div className='sosial_icon_container'>
                                                <a href="https://www.instagram.com/_rahilhuseynov/" target="_blank" rel="nofollow"><img className='sosial_icon' src={instagram} alt="instagram" /></a>
                                                <a href="https://www.linkedin.com/in/rahil-huseynov/" target="_blank" rel="nofollow"><img className='sosial_icon' src={linkedin} alt="linkedin" /></a>
                                                <a href="https://github.com/Rahil-Huseynov/" target="_blank" rel="nofollow"><img className='sosial_icon' src={github} alt="github" /></a>
                                                <a href="https://x.com/huseynov_rahil" target="_blank" rel="nofollow"><img className='sosial_icon' src={twitter} alt="x" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='download_container'>
                                <button className='contact_me' onClick={handleOpenModal}>CONTACT ME</button>
                                <a className='Download_CV' href={my_cv} download rel="nofollow">Download CV</a>
                            </div>
                        </div>
                    </div>
                    <div className='photo_container'>
                        <img className='photo' src={photo} alt="photo" />
                    </div>
                </div>
            </section>

            <section id='INFO_Mobile' className='mobile-hello'>
                <div className='first_section_container'>
                    <div className='photo_container'>
                        <img className='photo' src={photo} alt="photo" />
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
                                        <a className='link_style_my_info' href="tel:+994517108246" target="_blank"> <p className='contact_answer' rel="nofollow">+994(51) - 710 - 82 - 46</p></a>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>EMAIL</p>
                                        <a className='link_style_my_info' href="mailto:huseynov.rahil.05@gmail.com" target="_blank"> <p className='contact_answer' rel="nofollow">huseynov.rahil.05@gmail.com</p></a>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>ADDRESS</p>
                                        <a className='link_style_my_info' href="https://www.google.com/maps?q=Baku,+Azerbaijan" target="_blank"><p className='contact_answer' rel="nofollow">Baku, Azerbaijan</p></a>
                                    </div>
                                    <div className='contact_data'>
                                        <p className='contact'>SOCIAL</p>
                                        <div className='about_contact'>
                                            <div className='sosial_icon_container'>
                                                <a href="https://www.instagram.com/_rahilhuseynov/" target="_blank" rel="nofollow"><img className='sosial_icon' src={instagram} alt="instagram" /></a>
                                                <a href="https://www.linkedin.com/in/rahil-huseynov/" target="_blank" rel="nofollow"><img className='sosial_icon' src={linkedin} alt="linkedin" /></a>
                                                <a href="https://github.com/Rahil-Huseynov/" target="_blank" rel="nofollow"><img className='sosial_icon' src={github} alt="github" /></a>
                                                <a href="https://x.com/huseynov_rahil" target="_blank" rel="nofollow"><img className='sosial_icon' src={twitter} alt="x" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='download_container'>
                                <button className='contact_me' onClick={handleOpenModal}>CONTACT ME</button>
                                <a className='Download_CV' href={my_cv} download rel="nofollow">Download CV</a>
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

export default Info