import styled from "styled-components";

export const Bar = styled.div`
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    background-color: ${props => props.background};
    border: 0px solid transparent;
    border-radius: ${props => props.border}px;
    box-shadow: #${props => props.darkShadow} 2px 2px 5px 0px inset, #${props => props.lightShadow} -2px -2px 5px 0px inset;
    
    `;

export const Badge = styled.span`
     padding: 5px 4px;
     background-color: ${props => props.background};
     border-radius:${props => props.border}px;
    `;
export const Badge_chosen = styled.span`
     padding: 5px 6px;
     font-weight: bold;
     background-color: ${props => props.background};
     border-radius:${props => props.border}px;
    `;

export const DefaultButton = styled.button`
    width: 100%;
    background-color:${props => props.background};
    border: 1px solid ${props => props.background};
    transition: background-color .5s, color .5s;       
    color:${props => props.color};
    font-weight: bold;
    padding: .375rem .75rem;
    border-radius: ${props => props.radius}px;
    box-shadow: ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.darkerShadow},
          -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.lighterShadow};           
    :hover {
        background-color: ${props => props.color};
        border: 1px solid ${props => props.color};
        transition: border-color .5s, color .5s;
        color: ${props => props.background};
    }   
    :active {
        border: 1px solid ${props => props.background};
        box-shadow: inset ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.darkerShadow},
                    inset -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.lighterShadow};
        background-color: ${props => props.background};
        color: ${props => props.color};
    }     
    `;

export const StyledCard = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: ${props => props.background};
    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
    padding-left: ${props => props.paddingLeft};
    padding-right: ${props => props.paddingRight};
    color: ${props => props.color};
    mix-blend-mode: normal;
    border: 1px solid ${props => props.background};
    border-top-left-radius: ${props => props.borderRadiusTopLeft}px;
    border-top-right-radius: ${props => props.borderRadiusTopRight}px;
    border-bottom-left-radius: ${props => props.borderRadiusBottomLeft}px;
    border-bottom-right-radius: ${props => props.borderRadiusBottomRight}px;
    box-shadow: ${props => props.shadowLengthBottomX}px ${props => props.shadowLengthBottomY}px ${props => props.shadowBlur}px 0 ${props => props.darkerShadow},
    -${props => props.shadowLengthTopX}px -${props => props.shadowLengthTopY}px ${props => props.shadowBlur}px 0 ${props => props.lighterShadow};
    `;