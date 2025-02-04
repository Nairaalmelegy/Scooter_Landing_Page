import React from 'react';
// import './Card_design.css';

interface CardDesignProps {
    title: string;
    unit: string;
    paragraph: string;
}

const CardDesign: React.FC<CardDesignProps> = ({ title,unit, paragraph }) => {
    return (
        <div className="card text-center p-5 bg-white rounded-lg w-30 h-30 mx-5 items-center justify-between">

            <h2 className='flex items-center text-center justify-center text-2xl font-bold'>
                {title}
                <span className='text-xs'><p>{unit}</p></span>
    
            </h2>
            <p className='items-center text-sm'>{paragraph}</p>
        </div>
    );
};

export default CardDesign;