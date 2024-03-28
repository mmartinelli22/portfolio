import React from "react";
import Myimage from '../Screen Shot 2024-03-27 at 11.30.30 PM.png'
const App = () => {
    return (

        <div className="header">
            <h1 className="greeting">Thanks for visiting my portfolio!</h1>
            <img src={Myimage} />
            <label>More about me:
                <select className="dropdown">
                    <option value="hobbies">Hobbies</option>
                    <option value='experience'>Experience</option>
                </select>
            </label>

        </div>
    )
};
export default App;
