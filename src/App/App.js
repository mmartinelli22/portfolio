import React from "react";
import Myimage from './../Images/Screen Shot 2024-03-27 at 11.30.30 PM.png'
import { Link, Route, Switch } from "react-router-dom";
import Hobbies from '../Hobbies/Hobbies'
import Experiences from "../Experience/Experience";
import './App.css'
const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <div className="header">
                            <h1 className="greeting">Thanks for visiting my portfolio!</h1>
                            <main>Hi, I'm Michael. An aspiring software developer with a background in the service industry.
                                I was a server for 6 years, and decided I wanted to pursue software. I graduated from Turing School of Software and Design,
                                where I learned frontend Development, specializing in the React framework.
                            </main>
                            <img alt='profile' className="portfile" src={Myimage} />
                            <h2>More about me:</h2>
                            <Link to={'/hobbies'}>
                                <button className="hobbies">Hobbies</button>
                            </Link>
                            <Link to={'/experiences'}>
                                <button className="experience">Experience</button>
                            </Link>
                        </div>
                    )
                    }
                />
            </Switch>
            <Switch>
                <div className="hobby-landing-page">
                    <Route
                        exact
                        path='/hobbies' render={() => (
                            <Hobbies />
                        )
                        } />
                </div>
            </Switch>
            <Switch>
                <Route
                    exact
                    path='/experiences'
                    render={() => (
                        <Experiences />
                    )
                    } />
            </Switch>
        </div >
    )
};
export default App;
