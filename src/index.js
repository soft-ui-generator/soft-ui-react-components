import React from 'react';
import styles from './styles.module.css';
import styled from 'styled-components';
// import { any, object, string, number, oneOfType, func, bool } from 'prop-types';
import { getTintsAndShades, hexToRGB } from 'color-processing-library';

class ComponentShadows {
  constructor(
    backgroundColor,
    sameColorShadow,
    shadowColorBase,
    darkShadowFactor,
    lightShadowFactor) {
    this.backgroundColor = backgroundColor;
    this.sameColorShadow = sameColorShadow;
    this.shadowColorBase =  shadowColorBase;
    this.darkShadowFactor = darkShadowFactor || 85;
    this.lightShadowFactor = lightShadowFactor || 105;
  }

  getShadows() {
    const { Red,Green,Blue } = hexToRGB(this.backgroundColor)

    const mainColorShadows = {
      dark: getTintsAndShades(Red, Green, Blue, this.darkShadowFactor),
      light: getTintsAndShades(Red, Green, Blue, this.lightShadowFactor)
    }

    if (this.sameColorShadow){
      return mainColorShadows
    }

    // TODO add check is shadowColorBase a Valid hexadecimal color
    else if (this.shadowColorBase !== undefined) {
      let {Red:red, Green: green, Blue: blue} = hexToRGB(this.shadowColorBase)
      return {
        dark: getTintsAndShades(red, green, blue,this.darkShadowFactor),
        light: getTintsAndShades(red, green, blue,this.lightShadowFactor)
      }
    }

    else return {
        dark: getTintsAndShades(255,255,255,this.darkShadowFactor),
        light: getTintsAndShades(255, 255, 255,this.lightShadowFactor)
      }
  }
}

export const Button = ({
                         children,
                         style,
                         isSameShadowColor = false,
                         onClick,
                         backgroundColor,
                         shadowColorBase,
                         borderRadius,
                         fontColor,
                         shadowBlur,
                         shadowLength
                       }) => {

  // Button.propTypes = {
  //   children: any,
  //   style: oneOfType([string, object]),
  //   isSameShadowColor: bool,
  //   onClick: func,
  //   backgroundColor: string,
  //   fontColor: string,
  //   shadowColorBase: string,
  //   borderRadius: oneOfType([string, number]),
  //   shadowLength: oneOfType([string, number]),
  //   shadowBlur: oneOfType([string, number])
  // };

  Button.defaultProps = {
    children: 'Button',
    fontColor: "#303030",
    borderRadius: 12,
    onClick: () => console.log('Soft UI Button is pressed'),
    backgroundColor: "#F0F0F0",
    shadowLength: 5,
    shadowBlur: 30
  }

  //  Base shadow colors
  const componentBaseShadows = new ComponentShadows(backgroundColor, isSameShadowColor, shadowColorBase);

  const {dark, light} = componentBaseShadows.getShadows()

  //  Main color shadow colors
  const componentMainColorShadows = new ComponentShadows(backgroundColor, true);

  const {dark: mainDark, light: mainLight } = componentMainColorShadows.getShadows()

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      lightShadow={light}
      mainColorLightShadow={mainLight}
      darkShadow={dark}
      mainColorDarkShadow={mainDark}
      color={fontColor}
      radius={borderRadius}
      shadowLength={shadowLength}
      Blur={shadowBlur}
      style={{...style}}
      onClick={onClick}
    >
      {children}
    </StyledButton>)
}


const StyledButton = styled.button`
    width: 100%;
    background-color:${props => props.backgroundColor};
    border: 1px solid ${props => props.backgroundColor};
    transition: background-color .5s, color .5s;
    color:${props => props.color};
    font-weight: bold;
    padding: .375rem .75rem;
    border-radius: ${props => props.radius}px;
    box-shadow: ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.darkShadow},
          -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.lightShadow};
    :hover {
        background-color: ${props => props.color};
        border: 1px solid ${props => props.color};
        transition: border-color .5s, color .5s;
        color: ${props => props.backgroundColor};
    }
    :active {
        border: 1px solid ${props => props.backgroundColor};
        box-shadow: inset ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.mainColorDarkShadow},
                    inset -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.mainColorLightShadow};
        background-color: ${props => props.backgroundColor};
        color: ${props => props.color};
    }
    `;

