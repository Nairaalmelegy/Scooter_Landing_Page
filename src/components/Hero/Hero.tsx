import './Hero.css';
import Hero_img from '../../assets/Hero_Image.png';
import imgarrow from '../../assets/icon.png';
import Rotate from '../../assets/Spin_word.png';
import pointer from '../../assets/pointer.png';


const Hero = () => {
    
    return (
        <section className="hero relative grid grid-cols-2 gap-4 pl-5 py-10 max-w-full h-100vh overflow-hidden">
            {/* Left part for the title and buttons */}
            <div className="hero-left">

                <h1 className="hero-title text-7xl mb-5 font-thin mt-20 ml-5 text-left">
                    <span className="typing-effect">LET'S RIDE</span>
                    <br/>
                    <span className="font-bold typing-delay">THE FUTURE.</span>
                </h1>

                <hr className="hero-line mt-15 mb-10 mx-5 w-3xs border-2"/>
                <p className="hero-description text-left mx-5 w-2xs text-lg">Simple and Sleek design with users in mind.</p>
                <div className="hero-buttons text-left mt-10 ml-5 flex items-center gap-20">
                    <button className="hero-button flex items-center justify-center gap-2 text-black font-semibold hover:curser-pointer">
                        <span className='animate-bounce-lr'><img src={imgarrow} className='h-10' alt="arrow"/></span>
                        Buy Now</button>
                    <button className="hero-button flex items-center text-left justify-center gap-3 text-black font-semibold hover:curser-pointer ">
                        <h5>Watch our<br/>
                            Video how<br/>
                            it works
                        </h5>
                        <span className='relative inline-block'>
                            <img className='block animate-spin'
                                style={{ animationDuration: '5s' }} 
                                src={Rotate} alt="rotate"/>
                            <img src={pointer} className='absolute h-3 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt="arrow"/>
                        </span>
                    </button>
                </div>
            </div>
            {/* Right part for the image */}
            <div className="hero-right bg-gray-200 ml-60 rounded-tl-full rounded-bl-full overflow-hidden animate-fade-in">
                <img src={Hero_img} alt="E-Scooter" className="hero-image absolute h-140 top-0 right-15 animate-slide-in" />
            </div>
        </section>
    );
};

export default Hero;