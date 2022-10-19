import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
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
