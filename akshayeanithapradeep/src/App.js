import React, {Component} from 'react';
import {PageSkeleton, About, Footer, Projects, Resume, Contact, SEO} from './Components/'
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';


export const ROUTES = {
    'ABOUT': 1,
    'CONTACT': 2,
    'PROJECTS': 3,
    'RESUME': 4
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            route: ROUTES.ABOUT
        }
    }

    updateRoute(route) {
        if(this.state.route !== route){
            this.setState({
                route: route
            });
        }
    }

    render() {
        const route = this.state.route;
        return (
            <div className="App">
                <Router>
                    <div className="header">
                        <PageSkeleton route={route}/>
                    </div>
                    <div className="main-content">
                        <Route path="/" exact render={() => {
                            this.updateRoute(ROUTES.ABOUT);
                            return <About/>;
                        }}/>
                        <Route path="/projects/" render={() => {
                            this.updateRoute(ROUTES.PROJECTS);
                            return <Projects/>;
                        }}/>
                        <Route path="/resume/" render={() => {
                            this.updateRoute(ROUTES.RESUME);
                            return <Resume/>;
                        }}/>
                        <Route path="/contact/" render={() => {
                            this.updateRoute(ROUTES.CONTACT);
                            return <Contact/>;
                        }}/>
                        <Route path="/seo/" render={() => {
                            this.updateRoute(ROUTES.PROJECTS);
                            return <SEO/>;
                        }}/>
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
