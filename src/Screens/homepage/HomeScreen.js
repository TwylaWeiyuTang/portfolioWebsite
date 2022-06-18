import Hero from '../../Components/Hero/Hero'
import WebsiteComponent from '../../Components/website-section/WebsiteComponent'
import './homepageStyle.scss'

const HomeScreen = () => {
    return (
        <div className='homepage'>
            <Hero />
            {/* <div className='top'>
                <h1 className="title">Twyla</h1>
                <div className='text'>
                <p className='job-1'>UI/UX designer</p>
                <p className='job-2'>Full-stack web developer</p>
                <p className='job-3'>Graphic designer</p>
                </div>
                <h1 className='title'>Tang</h1>
            </div>

            <div className='projects' id='work'>
                <h1>Projects</h1>
                <h4>Websites</h4>
                <WebsiteComponent />
                <h4>UI/UX</h4>
                <h4>Graphics</h4>
            </div> */}

            {/* <div className='work-with-me'>
                <h1>Work With Me</h1>
            </div> */}
        </div>
    )
}

export default HomeScreen
