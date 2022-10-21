import React from 'react';
import Hero from '../components/Hero';
import Repositories from '../components/Repositories';

const Home: React.FC = () => {
    return (
        <div className="row">
            <Hero />
            <Repositories />
        </div>
    );
};

export default Home;
