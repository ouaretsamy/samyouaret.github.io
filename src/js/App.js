import React from 'react';
import Nav from './components/Nav';
import ContentBrowser from './components/ContentBrowser';
import Section from './components/Section';
import { BrowserRouter as Router } from 'react-router-dom';

//Your initialization
function locationHashChanged(e) {
    console.log(location.hash);
    console.log(e.oldURL, e.newURL);
}
window.onhashchange = locationHashChanged;

export default function App() {
    return (<Router>
        <div className="app">
            <Nav />
            <div className="flex flex-col md:flex-row my-16">
                <div className="md:w-1/3 w-full sm:mr-4 mb-8">
                    <Section>
                        <div className="rounded mx-auto">
                            <img src="/images/ouaretsamy-cropped.png" className="max-w-xs rounded-full shadow-lg md:max-w-full md:rounded-lg" />
                        </div>
                    </Section>
                </div>
                <div className="w-full md:ml-4 md:w-2/3">
                    <Section>
                        <ContentBrowser />
                    </Section>
                </div>
            </div>
        </div>
    </Router>);
}