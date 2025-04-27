import './Footer.css'
const Footer = () => {
    const date  = new Date()
    const year:number = date.getFullYear()
    return (
        <>
        <div className="divide_footer"></div>
            <div className="copyright_container">
                <p className="copyright">© Copyright 2024 - {year} Rahil Huseynov.</p>
            </div>
        </>
    )
}

export default Footer