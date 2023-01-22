import StyledFeature from '../styles/StyledFeature'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
const Feature = ({feature: {img, title, description}, number}) => {
  const {darkMode, colors} = useContext(ThemeContext)

  return (
    // 
    <StyledFeature darkMode={darkMode} colors={colors}>
      <div className='img-container'>
        <img src={img} alt="" />
      </div>
      <div>
          <h6>{number}</h6>
          <h4>{title}</h4>
          <p>{description}</p>
      </div>
    </StyledFeature>
  )
}

export default Feature