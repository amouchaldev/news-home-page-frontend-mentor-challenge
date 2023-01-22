import StyledHero from '../styles/StyledHero'
import img1 from '../../assets/images/image-web-3-desktop.jpg'
import Container from '../styles/Container'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
const Hero = () => {
    const {darkMode, colors} = useContext(ThemeContext)
  return (
        <StyledHero darkMode={darkMode} colors={colors}>
            <div>
                <img src={img1} alt="" />
                <div>
                        <h3>The Bright Future Of Web 3.0?</h3>
                        <div>
                            <p>
                            Web 3, also known as the decentralized web or the blockchain web, refers to the next evolution of the internet where users have more control over their data and online identity
                            </p>
                            <button>READ MORE</button>
                        </div>
                </div>
            </div>
            <div>
                {/* <Container> */}
                    <h6>New</h6>
                    <ul>
                        <li>
                            <a href="#">Hydrogen VS Electric Cars</a>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </li>
                        <li>
                            <a href="#">The Downsides of Ai Artistry</a>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </li>
                        <li>
                            <a href="#">IS vc Funding Drying Up?</a>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </li>
                    </ul>
                {/* </Container> */}
            </div>
        </StyledHero>
  )
}

export default Hero