import { createGlobalStyle } from 'styled-components'
import '../../assets/fonts/Inter-VariableFont_slnt,wght.ttf'
import '../../assets/fonts/static/Inter-Regular.ttf'
import '../../assets/fonts/static/Inter-Bold.ttf'
import '../../assets/fonts/static/Inter-ExtraBold.ttf'
const GlobalStyle = createGlobalStyle`
    :root {
        --soft-range: hsl(35, 77%, 62%);
        --soft-red: hsl(5, 85%, 63%);
        --off-white: hsl(36, 100%, 99%);
        --grayish-blue: hsl(233, 8%, 79%);
        --dark-grayish-blue: hsl(236, 13%, 42%);
        --very-dark-blue: hsl(240, 100%, 5%);
    }
    body {
        font-family: 'system-ui', 'inter', sans-serif;
        background-color: ${props => props.darkMode ? 'hsl(240, 100%, 5%)' : 'hsl(36, 100%, 99%)'};
        padding-bottom: 2rem;
        overflow-x: hidden;
    }
    p {
        font-size: 15px;
    }

`
export default GlobalStyle