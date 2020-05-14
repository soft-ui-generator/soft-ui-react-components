import React, {Fragment, useContext} from "react";
import Input from "../../../../Layout/Input";
import ThemeContext from "../../../../../../../contexts/theme/ThemeContext";


const HEXinput = () => {

    const themeContext = useContext(ThemeContext);
    const {font, colorRGB, colorHEX, shadows, shadowBlur, shadowLength, changeColor} = themeContext;

    const onChangeColor = (event, hexOrRGBColorName) => changeColor(hexOrRGBColorName, event.target.value);

    const {Red, Green, Blue} = colorRGB;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;


    const componentProps = {
        mainColor: mainColor,
        font: font,
        Blur: shadowBlur,
        shadowLength: shadowLength,
        darkerShadow: darkerShadow,
        lighterShadow: lighterShadow,
    };

    return(
        <Fragment>
            <Input
                onChange={(event) => onChangeColor(event, "Hex")}
                value={colorHEX}
                style={{maxHeight:'32px', border: "0px",marginBottom:'0',textAlign:'center',
                    borderRadius:'6px'}}
                placeholder={"#000000"}
                props={componentProps}
            />
       </Fragment>
    )
};

export default HEXinput;