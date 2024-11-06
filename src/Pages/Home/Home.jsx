
import './Home.css'
import hero_banner from "../../assets/hero_banner.jpg"
import Navbar from '../../Components/Navbar/Navbar'
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="hero">
            <img src={hero_banner} alt="" className='banner-img'/>
            <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img' />
                <p> discovering his ties to a secret ancient order, a young man 
                    living in the modern istanbul embarks on a quest to save the city from an immortal enemy.
                </p>
              <div className="hero-btns">
                <button className='btn'><img src={play_icon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt=""/>More Info</button>
              </div>
        <TitleCards/>
            </div>
        </div>
        <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"}/>  
        
        <TitleCards title={"Only On Netflix"}/>
        <TitleCards title={"Upcoming"}/>
        <TitleCards title={"Topics for You"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home