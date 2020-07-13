import React from 'react';
import slide0 from '../assets/sld0.jpg';
import slide1 from '../assets/sld1.jpg';
import slide2 from '../assets/sld2.jpg';
function Carousel(){
    return(

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={slide0} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={slide1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={slide2} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    );
}
export default Carousel;