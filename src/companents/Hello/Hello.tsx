import photo from '../../assets/image.jpg';
import my_cv from '../../../public/Rahil_Huseynov_CV.pdf';

const Hello = () => {
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
        </>
    )
}

export default Hello