import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="copyright">
                    <p>
                        <span>No copyright intended for the logo.</span>
                        <span>Note: Data are updated automatically!</span>
                        <span>Input: "World" to search the total cases globally.</span>
                        <span>You can also input continents such as: Asia, Europe, etc.</span>
                        <span>My Google Map API has expired, reverting back to manual Google maps via iframe.</span>
                    </p>
                    <p>Developer: Dan Quesada III</p>
                    <p>Source: <a href="https://coronavirus-19-api.herokuapp.com" target="_blank" rel="noopener noreferrer">https://coronavirus-19-api.herokuapp.com</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;