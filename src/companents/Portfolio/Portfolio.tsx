import portfolio from '../../assets/portfolio.png';
import Project from '../../assets/project.png';
import MyProject from '../../assets/Myproject.png';
import { useGetUserReposQuery } from '../../services/GIthubAPI';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css';
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
    const formattedDate = (dateString: string) => {
        const parts = dateString.split("-");
        return `${parts[2]}.${parts[1]}.${parts[0]}`;
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
                    <Swiper
                        className={"slider"}
                        modules={[Autoplay, Pagination]}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            720: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {repos.map((repo: Repo) => (
                            <SwiperSlide key={repo.id}>
                                <div className="slider-items">
                                    <div className='project_container'>
                                        <img className='project_img' src={Project} alt="" />
                                        <h2>{repo.name}</h2>
                                        <div className='date_project'>
                                            <div className='date_project_items'>
                                                <h4>{formattedDate(repo.created_at.split("T")[0])}</h4>
                                                <span>/</span>
                                                <h4>{formattedDate(repo.updated_at.split("T")[0])}</h4>
                                            </div>
                                        </div>
                                        <p>
                                            <a className='visit_github' href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                                Visit Repository
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <div className='divide'></div>
        </>
    )
}

export default Portfolio