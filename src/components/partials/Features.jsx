import StyledFeatures from '../styles/StyledFeatures'
import Feature from './Feature'
import img1 from '../../assets/images/image-retro-pcs.jpg'
import img2 from '../../assets/images/image-top-laptops.jpg'
import img3 from '../../assets/images/image-gaming-growth.jpg'
function Features() {
    const _FEATURES = [
        {img: img1, title: 'Reviving Retro PCs', description: 'what happens when old PCs are given modern upgrades?'},
        {img: img2, title: 'Top 10 Laptops of 2022', description: 'Our best picks for various needs and budgets.'},
        {img: img3, title: 'The Growth of Gaming', description: 'How the pandemic has sparked fresh opportunities'}
    ]
  return (
    <StyledFeatures>
        {
            _FEATURES.map((feature, index) => (
                <Feature key={index} feature={feature} number={`0${index + 1}`}/>
            ))
        }
    </StyledFeatures>
  )
}

export default Features