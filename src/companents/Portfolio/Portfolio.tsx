import portfolio from '../../assets/portfolio.png';
import Project from '../../assets/project.png';
import MyProject from '../../assets/Myproject.png';
import { useGetUserReposQuery } from '../../services/GIthubAPI';
import { useState } from 'react';
import './Portfolio.css'

interface Repo {
    id: number;
    name: string;
    html_url: string;
    created_at: string
    updated_at: string
}
const Portfolio = () => {
    const username = 'Rahil-Huseynov';
    const { data: repos = [] } = useGetUserReposQuery(username);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const itemsPerPage = 3;
    const itemsPerPagemobile = 1;
    const itemsPerPagemobile720 = 2;


    const nextRepos720 = () => {
        if (currentIndex + itemsPerPage < repos.length) {
            setCurrentIndex((prevIndex) => prevIndex + itemsPerPagemobile720);
        }
    };

    const prevRepos720 = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex((prevIndex) => prevIndex - itemsPerPagemobile720);
        }
    };

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
    const nextRepos_mobile = () => {
        if (currentIndex + itemsPerPagemobile < repos.length) {
            setCurrentIndex((prevIndex) => prevIndex + itemsPerPagemobile);
        }
    };

    const prevRepos_mobile = () => {
        if (currentIndex - itemsPerPagemobile >= 0) {
            setCurrentIndex((prevIndex) => prevIndex - itemsPerPagemobile);
        }
    };
    return (
        <>
            <section id='PORTFOLIO'>
                <div className='portfolio_container'>
                    <div className='Portfolio_header_container'>
                        <div>
                            <img className='portfolio_icon' src={portfolio} alt="" />
                        </div>
                        <div>
                            <h2 className='portfolio_word'>Portfolio<span className='point'>.</span></h2>
                        </div>
                    </div>
                    <div className='Portfolio_header_container'>
                        <div>
                            <img className='portfolio_icon' src={MyProject} alt="" />
                        </div>
                        <div>
                            <h2 className='portfolio_word'>My Project<span className='point'>.</span></h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='all_project_container' id='desktop_all_project_container'>
                        {repos.slice(currentIndex, currentIndex + itemsPerPage).map((repo: Repo) => (
                            <div key={repo.id} className='project_container'>
                                <img className='project_img' src={Project} alt="" />
                                <h2>{repo.name}</h2>
                                <div className='date_project'>
                                    <div className='date_project_items'>
                                        <h4>{repo.created_at.split("T")[0]}</h4>
                                        <span>/</span>
                                        <h4>{repo.updated_at.split("T")[0]}</h4>
                                    </div>
                                </div>
                                <p>
                                    <a className='visit_github' href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        Visit Repository
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='all_project_container mobile_all_project_container720' id='mobile_all_project_container720'>
                        {repos.slice(currentIndex, currentIndex + itemsPerPagemobile720).map((repo: Repo) => (
                            <div key={repo.id} className='project_container'>
                                <img className='project_img' src={Project} alt="" />
                                <h2>{repo.name}</h2>
                                <div className='date_project'>
                                    <div className='date_project_items'>
                                        <h4>{repo.created_at.split("T")[0]}</h4>
                                        <span>/</span>
                                        <h4>{repo.updated_at.split("T")[0]}</h4>
                                    </div>
                                </div>
                                <p>
                                    <a className='visit_github' href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        Visit Repository
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='all_project_container' id='mobile_all_project_container'>
                        {repos.slice(currentIndex, currentIndex + itemsPerPagemobile).map((repo: Repo) => (
                            <div key={repo.id} className='project_container'>
                                <img className='project_img' src={Project} alt="" />
                                <h2>{repo.name}</h2>
                                <div className='date_project'>
                                    <div className='date_project_items'>
                                        <h4>{repo.created_at.split("T")[0]}</h4>
                                        <span>/</span>
                                        <h4>{repo.updated_at.split("T")[0]}</h4>
                                    </div>
                                </div>
                                <p>
                                    <a className='visit_github' href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        Visit Repository
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='pagination' id='pagination_desktop'>
                        <button className='previous' onClick={prevRepos} style={{ display: currentIndex === 0 ? 'none' : 'block' }}>
                            &laquo; Previous
                        </button>
                        <button className='next' onClick={nextRepos} style={{ display: currentIndex + itemsPerPage >= repos.length ? 'none' : 'block' }}>
                            Next &raquo;
                        </button>
                    </div>
                    <div className='pagination' id='pagination_mobile'>
                        <button className='previous' onClick={prevRepos_mobile} style={{ display: currentIndex === 0 ? 'none' : 'block' }}>
                            &laquo; Previous
                        </button>
                        <button className='next' onClick={nextRepos_mobile} style={{ display: currentIndex + itemsPerPage >= repos.length ? 'none' : 'block' }}>
                            Next &raquo;
                        </button>
                    </div>
                    <div className='pagination' id='pagination_mobile720'>
                        <button className='previous' onClick={prevRepos720} style={{ display: currentIndex === 0 ? 'none' : 'block' }}>
                            &laquo; Previous
                        </button>
                        <button className='next' onClick={nextRepos720} style={{ display: currentIndex + itemsPerPage >= repos.length ? 'none' : 'block' }}>
                            Next &raquo;
                        </button>
                    </div>
                </div>
            </section>
            <div className='divide'></div>
        </>
    )
}

export default Portfolio