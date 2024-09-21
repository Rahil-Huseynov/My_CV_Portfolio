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
}
const Portfolio = () => {
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
            <section id='PORTFOLIO'>
                <div className='skills_container'>
                    <div className='skills_header_container'>
                        <div>
                            <img className='skills_icon' src={portfolio} alt="" />
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
    )
}

export default Portfolio