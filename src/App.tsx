import React from 'react';
import { Route, useLocation } from 'wouter';
import About from './pages/About';
import Faq from './pages/Faq';
import Home from './pages/Home';
import More from './pages/More';
import NowPlaying from './pages/NowPlaying';

const App: React.FC = () => {
    const [location] = useLocation();

    React.useEffect(() => {
        if (location === '/') document.title = 'qieqss'
        else document.title = `qieqss • ${location.slice(1)}`;
    }, [location]);

    return (
        <>
            <Route path="/" component={Home} />
            <Route path="/faq" component={Faq} />
            <Route path="/more" component={More} />
            <Route path="/about" component={About} />
            <Route path="/now-playing" component={NowPlaying} />
        </>
    );
};

export default App;
