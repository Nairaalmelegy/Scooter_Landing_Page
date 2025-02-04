import { useState } from 'react';
import './Cards.css'; 
import arrows from '../../assets/arrows.png';
import leftarrow from '../../assets/arrowsleft.png';
import CardDesign from './Card_design';

const images = [
    { id: '01', title: 105, unit: 'Ibs', paragraph: 'Net Weight' },
    { id: '02', title: 26, unit: 'mph', paragraph: 'Top Speed' },
    { id: '03', title: 38, unit: 'miles', paragraph: 'Max Range' },
    { id: '04', title: 89, unit: 'nm', paragraph: 'Max Torque' },
    { id: '05', title: 22, unit: 'slope', paragraph: 'Hill Climbing' },
    { id: '06', title: 2, unit: 'X', paragraph: 'Hydraulic Disc Brakes' },
];

const Cards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="relative py-1">
            <div className="image-counter flex items-center text-right justify-end pr-15">
                <span className="text-10xl font-bold border px-4 outline-text">{images[currentIndex].id}</span>
                <button onClick={handlePrev} className="text-xl font-bold py-1 items-center">
                    <img src={leftarrow} alt="left-arrow" />
                </button>
                <button onClick={handleNext} className="text-xl font-bold py-1 items-center">
                    <img src={arrows} alt="right-arrow" />
                </button>
            </div>
                <div className="flex gap-4 overflow-x-auto p-5 justify-between items-center console.log('Current Index:', currentIndex);
                                console.log('Images:', images);
                                console.log('Current Image:', images[currentIndex]);">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`transition-all p-4 rounded-lg shadow-lg shadow-gray-300 items-center ${currentIndex === index ? 'shadow-lg shadow-gray-500' : ''}`}
                    >
                        <CardDesign 
                            title={image.title.toString()} 
                            unit={image.unit.toString()} 
                            paragraph={image.paragraph.toString()} 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cards;
