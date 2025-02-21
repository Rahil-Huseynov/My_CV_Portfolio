import photo from '../../assets/image.png';
import burger from '../../assets/burger.png';
import burgerdarkmode from '../../assets/burger darkmode.png';
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
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);


    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = my_cv;
        link.setAttribute('download', 'Rahil_Huseynov_CV.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


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


    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        if (showModal || isNavbarOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        document.body.classList.toggle('dark-mode', isDarkMode);
    }, [showModal, isNavbarOpen, isDarkMode]);

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
                        <div className='darkmode'>
                            <input
                                type="checkbox"
                                className="sr-only"
                                id="darkmode-toggle"
                                checked={isDarkMode}
                                onChange={toggleDarkMode}
                            />
                            <label htmlFor="darkmode-toggle" className="toggle">
                                <span>Toggle dark mode</span>
                            </label>
                        </div>
                    </div>
                    <div className='burger_container'>
                        <div className={`'burger' ${!isNavbarOpen ? 'open_burger' : 'close_burger'}`} onClick={toggleNavbar}>
                            <img className='burger_item' src={burger} alt="burger" />
                            <img className='burger_item_darkmode' src={burgerdarkmode} alt="burger" />
                        </div>
                    </div>
                    <div className={` ${!isNavbarOpen ? 'close' : 'open'}`}>
                        <div className={`navbar_container_mobile ${isNavbarOpen ? 'open' : 'close'}`}>
                            <div className='navbar_container_items_mobile'>
                                <div className='close_navbar_mobile' onClick={toggleNavbar}>
                                    <p className='close_icon'>&times;</p>
                                </div>
                                <div className='container_mobile_navbar'>
                                    <ul className='navbar_items_mobile'>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#INFO_Mobile" rel="nofollow">INFO</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#SKILLS" rel="nofollow">SKILLS</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#EDUCATION" rel="nofollow">EDUCATION</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#DIPLOMA" rel="nofollow">DIPLOMA</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#PORTFOLIO" rel="nofollow">PORTFOLIO</a></li>
                                        <li className='nav_items'><a onClick={toggleNavbarlink} className='link_nav' href="#CONTACTME" rel="nofollow">CONTACT ME</a></li>
                                    </ul>
                                    <div className='darkmode_mobile'>
                                        <input
                                            type="checkbox"
                                            className="sr-only"
                                            id="darkmode-toggle"
                                            checked={isDarkMode}
                                            onChange={toggleDarkMode}
                                        />
                                        <label htmlFor="darkmode-toggle" className="toggle">
                                            <span>Toggle dark mode</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='divide_header'></div>
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
                                <button className="download-button" onClick={handleDownloadCV}>
                                    <div className="docs">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                            stroke="black"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="css-i6dzq1"
                                        >
                                            <path
                                                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                            ></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                        Download CV
                                    </div>
                                    <div className="download">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            stroke="white"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="css-i6dzq1"
                                        >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                    </div>
                                </button>
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
                                <div className='download_container'>
                                    <button className='contact_me' onClick={handleOpenModal}>CONTACT ME</button>
                                    <button className="download-button" onClick={handleDownloadCV}>
                                        <div className="docs">
                                            <svg
                                                viewBox="0 0 24 24"
                                                width="20"
                                                height="20"
                                                stroke="black"
                                                stroke-width="2"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="css-i6dzq1"
                                            >
                                                <path
                                                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                ></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                            Download CV
                                        </div>
                                        <div className="download">
                                            <svg
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                stroke="white"
                                                stroke-width="2"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="css-i6dzq1"
                                            >
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="7 10 12 15 17 10"></polyline>
                                                <line x1="12" y1="15" x2="12" y2="3"></line>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {showModal && <Modal_Contact onClose={handleCloseModal} isActive={showModal} />}
            <div className='divide_info'></div>
        </>
    )
}

export default Info