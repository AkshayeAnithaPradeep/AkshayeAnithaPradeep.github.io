import React, {Component} from 'react';
import './PageSkeleton.css';
import {Link} from "react-router-dom";
import {ROUTES} from "./../../App";

class PageSkeleton extends Component {

    static getClassName(route, tabName) {
        return route === tabName ? "mdl-navigation__link is-active" : "mdl-navigation__link";
    }

    render() {
        const route = this.props.route;
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
                    <div className="mdl-layout__header-row portfolio-logo-row">
                        <span className="mdl-layout__title">
                            <div className="portfolio-logo"/>
                            <span className="mdl-layout__subtitle">Akshaye Anitha Pradeep</span>
                         </span>
                    </div>
                    <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
                        <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
                            <Link className={PageSkeleton.getClassName(route, ROUTES.ABOUT)} to="/">About</Link>
                            <Link className={PageSkeleton.getClassName(route, ROUTES.PROJECTS)} to="/projects">Projects</Link>
                            <Link className={PageSkeleton.getClassName(route, ROUTES.RESUME)} to="/resume">Resume</Link>
                            <Link className={PageSkeleton.getClassName(route, ROUTES.CONTACT)} to="/contact">Contact</Link>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer mdl-layout--small-screen-only">
                    <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
                        <Link className="mdl-navigation__link is-active" to="/">About</Link>
                        <Link className="mdl-navigation__link" to="/projects">Projects</Link>
                        <Link className="mdl-navigation__link" to="/resume">Resume</Link>
                        <Link className="mdl-navigation__link" to="/contact">Contact</Link>
                    </nav>
                </div>
            </div>
        );
    }
}

export default PageSkeleton;