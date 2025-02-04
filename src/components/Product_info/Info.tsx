import React from 'react'
import Icon from '../../assets/Vector.png';


interface InforProps {
    info: string;
}

const Info: React.FC<InforProps> = ({ info }) => {
    return (
        <div className="info flex items-center justify-center">
            <img className='h-10' src={Icon} alt="icon" />
            <p>{info}</p>
        </div>
    );
};

export default Info