import React, { useEffect } from 'react';
import Info from './Info';
import productimage from '../../assets/Scooter_Parts.png';

const informations = [
    {
        info: 'Lightweight aircraft grade aluminium frame.'
    },
    {
        info: 'Car grade lithium battery.'
    },
    {
        info: 'Self-balanced.'
    },
    {
        info: 'Plug n play.'
    },
    {
        info: 'Quick release adapter.'
    },
    {
        info: 'RFID key card.'
    },
]

const Products = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fly-in, .fly-in-rotate');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once the element is visible
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold to control when the animation starts

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      // Cleanup observer on component unmount
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-center pt-20 animate-fade-in">Product Information</h1>
      <p className="text-center text-md pt-10 animate-fade-in">Our Scooter has following unique design and technology features:</p>
      
      <section className="products grid grid-cols-2 gap-30 items-center justify-between overflow-hidden pt-5">
        <div className="image fly-in">
          <img src={productimage} alt="Product" />
        </div>
        <div className="Products-info pl-40 fly-in-rotate">
          {informations.map((info, index) => (
            <div key={index} className="info flex items-center text-left p-4">
              <Info info={info.info.toString()} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
