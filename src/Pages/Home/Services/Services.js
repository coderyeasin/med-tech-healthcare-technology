import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


/* const healthcare = [
    { id: 0, name: 'GLAAS TOUCH TECH', description: 'Glass touch technology is most powerful for doctor, they find problem easily', img: 'https://i.ibb.co/2yswgQD/smart-glasses-touching-virtual.jpg' },

    { id: 1, name: 'PINK NERVE TECH', description: 'Pink nerve technology also powrful feature for Med Industry Revolution works.' , img: 'https://i.ibb.co/tQhW3kh/pink-nerve-network.jpg' },

    { id: 2, name: 'POINTING VIRTUAL', description: 'Virtually point on specific disease, find the smartest solution from doctors', img: 'https://i.ibb.co/ZSZphWC/pointing-virtual.jpg' },

    { id: 3, name: 'MENTAL HEALTH', description: 'Disability  person controls their health indo superman person they are here did', img: 'https://i.ibb.co/B6qRCrg/mental-health.jpg' },

    { id: 4, name: 'BRAIN TECH', description: 'uses Brain Tech to find easy solution who has face that types problem in their mind.', img: 'https://i.ibb.co/17Bntqy/brain-tech.jpg' },

    {id: 5, name:'DIAGONSE TECH', description:'Diagonse your full body within few minutes using diagonse tech in your body search.', img:'https://i.ibb.co/YctN0tr/diagnose-technology.jpg'}
] */



/* https://i.ibb.co/2yswgQD/smart-glasses-touching-virtual.jpg */


const Services = () => {
    const[service, setService]= useState([])
    
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
        .then(data => setService(data))
    },[])

    return (
        <div className="my-5">
            <h3 className="text-primary text-uppercase mb-5">Our Services</h3>
            <div className="grid-service">
            {
                service.map(item => <Service key={item.id} item={item}></Service>)
            }
           </div>
        </div>
    );
};

export default Services;