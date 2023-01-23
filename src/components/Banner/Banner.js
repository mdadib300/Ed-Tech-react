import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/cover/cover1.jpg';
import image2 from '../../images/cover/cover2.jpg';

const Banner = () => {

    return (
        <div>
            <Carousel className='w-75 mx-auto'>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src={image1}
                        alt="Ed Tech"
                    />
                    <Carousel.Caption>
                        <h3>Get Started Digital<br />Learning</h3>
                        <p className='d-none d-md-block'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <button className='btn btn-primary mb-3 d-none d-md-inline'>Get Started</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src={image2}
                        alt="Ed Tech"
                    />

                    <Carousel.Caption>
                        <h3>Get Started Digital<br />Learning</h3>
                        <p className='d-none d-md-block'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <button className='btn btn-primary mb-3 d-none d-md-inline'>Get Started</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;