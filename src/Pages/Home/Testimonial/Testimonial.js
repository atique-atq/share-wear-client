import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Testimonial = () => {
    return (
        <div>
            <div>
                <div className="flex items-center justify-between h-full w-full absolute z-0">
                    <div className="w-1/3 bg-white" />
                    <div className="w-4/6 ml-16 bg-gray-100" />
                </div>
                <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
                    <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2}>
                        <h3 className="text-4xl font-bold font-mono xl:block hidden leading-tight text-gray-800">
                            What our customers are saying
                        </h3>
                        <h3 className="text-4xl font-bold font-mono xl:hidden block leading-tight lg:leading-10 text-gray-800">What our customers are saying</h3>
                        <Slider>
                            <Slide index={0} tabIndex="null">
                                <div className="flex">
                                    <div className="mt-14 md:flex">
                                        <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                            <img src="https://i.ibb.co/gyVQCMb/accenture-pic.jpg" alt="profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                            <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                            <div>
                                                <h1 className="text-2xl font-bold xl:leading-loose  text-[#ee4871]">Good Products with a Best Price</h1>
                                                <p className="text-base font-medium leading-6 mt-4 text-gray-600 italic">Products from this site are best at this price. So professional and friendly support system.. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                            </div>
                                            <div className="md:mt-0 mt-4">
                                                <p className="text-base font-medium leading-4 text-gray-800">Atiqur Rahman</p>
                                                <p className="text-base leading-4 mt-2 mb-4 text-gray-600">ICT Officer, ICT Ministry</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                    <div className="mt-14 md:flex">
                                        <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                            <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                            <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                            <div>
                                                <h1 className="text-2xl font-semibold xl:leading-loose text-[#ee4871]">Quality second hand dresses!</h1>
                                                <p className="text-base font-medium leading-6 mt-4 text-gray-600 italic">If someone is believes in minimalism, using second hand product must. Here products are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                            </div>
                                            <div className="md:mt-0 mt-8">
                                                <p className="text-base font-medium leading-4 text-gray-800">Jerin Mahrura</p>
                                                <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Student, DU</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <div className="flex items-center mt-8">
                            <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                            </ButtonBack>

                            <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;