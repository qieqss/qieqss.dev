import React from 'react';
import { Route } from 'wouter';
import Faq from './pages/Faq';
import Home from './pages/Home';
import More from './pages/More';

const App: React.FC = () => {
    return (
        <>
            <Route path="/" component={Home} />
            <Route path="/faq" component={Faq} />
            <Route path="/more" component={More} />
        </>
    );
};

export default App;
