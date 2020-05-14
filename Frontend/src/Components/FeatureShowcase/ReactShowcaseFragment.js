import React, {useContext} from "react";
import Card from "../Generator/Generator_Components/Layout/Card";
import ThemeContext from "../../contexts/theme/ThemeContext";
import ShowcaseContext from "../../contexts/showcase/ShowcaseContext";
import ReactLogo from '../../Assets/React-icon.svg'
import {calculateTintAndShades, fontColor, hexToRGB} from "../../Functions";

const ReactShowcaseFragment = () => {
    const themeContext = useContext(ThemeContext);
    const { shadowBlur } = themeContext;

    const colorShowcaseContext = useContext(ShowcaseContext)
    const {backgroundColor} = colorShowcaseContext;

    const primaryBackgroundRGB = hexToRGB(backgroundColor)
    const Red = primaryBackgroundRGB.Red || 0;
    const Green = primaryBackgroundRGB.Green || 0;
    const Blue = primaryBackgroundRGB.Blue || 0;

    const font = fontColor(Red, Green, Blue)

    const darkShadow = calculateTintAndShades(97,218,251, 85)

    const lightShadow = calculateTintAndShades(97,218,251, 105)

    return(
        <Card
            background={'#61dafb'}
            color={font}
            style={{
                boxShadow: `${darkShadow} 5px 5px ${shadowBlur}px 0px inset,
                ${lightShadow} -5px -5px ${shadowBlur}px 0px inset`,
                border:'none',
                display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',flexWrap: 'wrap'
            }}
        >
            <img className={'image'} style={{width:'150px'}} src={ReactLogo} alt={'react logo'}/>
            <h5>Using React?</h5>
            <span style={{textAlign:'center'}}>There are premade <br/> Soft UI components! <br/> Soon... (TODO)</span>
        </Card>
    )
}

export default ReactShowcaseFragment;
