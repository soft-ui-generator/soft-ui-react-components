import React, {Fragment, useContext} from "react";
import Button from "../Components/Generator/Generator_Components/Layout/Button";
import {Link} from "react-router-dom";
import Card from "../Components/Generator/Generator_Components/Layout/Card";
import ColorShowcaseFragment from "../Components/FeatureShowcase/ColorShowcaseFragment";
import ShowcaseContext from "../contexts/showcase/ShowcaseContext";
import DarkModeShowcaseFragment from "../Components/FeatureShowcase/DarkModeShowcaseFragment";
import ReactShowcaseFragment from "../Components/FeatureShowcase/ReactShowcaseFragment";


const Home = () => {
    const colorShowcaseContext = useContext(ShowcaseContext)
    const {backgroundColor, darkModeBackground} = colorShowcaseContext;

    return (
        <Fragment>
            <div className="jumbotron jumbotron-fluid text-center" style={{background:'#E70343',color:'white'}}>
                <div className="container">
                    <svg width="100px" height="100px" viewBox="0 0 173 173" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
                        <path id="BottomShadow" d="M155.311,28.461c10.358,6.678 17.223,18.317 17.223,31.547l0,75.017c0,20.702 -16.807,37.509 -37.509,37.509l-75.017,0c-13.215,0 -24.844,-6.85 -31.525,-17.19c5.851,3.773 12.815,5.962 20.286,5.962l75.017,0c20.701,0 37.508,-16.807 37.508,-37.509l0,-75.016c0,-7.486 -2.197,-14.462 -5.983,-20.32Z"
                              style={{fill:'#C40339'}}/>
                        <path id="TopShadow" d="M17.209,144.064c-10.351,-6.68 -17.209,-18.315 -17.209,-31.539l0,-75.017c0,-20.701 16.807,-37.508 37.508,-37.508l75.017,0c13.239,0 24.885,6.873 31.56,17.242c-5.853,-3.777 -12.822,-5.97 -20.299,-5.97l-75.017,0c-20.701,0 -37.508,16.807 -37.508,37.509l0,75.016c0,7.463 2.184,14.42 5.948,20.267Z"
                              style={{fill:'#F30346'}}/>
                        <path d="M144.085,57.385c0,-15.952 -12.951,-28.904 -28.904,-28.904l-57.808,0c-15.952,0 -28.903,12.952 -28.903,28.904l0,57.808c0,15.952 12.951,28.904 28.903,28.904l57.808,0c15.953,0 28.904,-12.952 28.904,-28.904l0,-57.808Z"
                          style={{fill:'#F30346'}}/>
                    </svg>
                    <h1 className="display-4">Soft UI</h1>
                    <p className="lead">Build beautiful products in Neuromorphic stylistic</p>
                    <Link to={'/generator'}>
                        <Button
                            style={{width:'200px',height:'65px'}}
                            background={'#e70343'}
                            color={'#FFF'}
                            darkShadow={'#C40339'}
                            lightShadow={'#F30346'}>
                            Get started
                        </Button>
                    </Link>
                </div>
            </div>
            <div className={'container'}>
                <div className={'row mb-5'}>
                    <div className={'col-md-4 mb-3'}>
                        <Card background={backgroundColor}>
                            <ColorShowcaseFragment  />
                        </Card>
                    </div>
                    <div className={'col-md-4  mb-3'}>
                        <Card
                            background={darkModeBackground}
                            style={{height:'100%', display:'flex'}}>
                            <DarkModeShowcaseFragment />
                        </Card>
                    </div>
                    <div className={'col-md-4'}>
                        <Card style={{maxHeight:'358px', height:'100%', display:'flex'}}>
                            <ReactShowcaseFragment/>
                        </Card>
                    </div>
                </div>
            </div>
            <footer style={{backgroundColor:'#ed2939',height:'70px'}}/>
        </Fragment>
    )
}

export default Home;