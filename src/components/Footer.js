import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="copyright">
                    <p>
                        <span>No copyright infringement intended for the logo.</span>
                    </p>
                    <p>Developer: Dan Quesada III</p>
                    <p>Sources:</p>
                    <a href="https://www.worldometers.info/coronavirus" target="_blank" rel="noopener noreferrer">https://www.worldometers.info/coronavirus</a>
                    <a href="https://www.doh.gov.ph/covid-19/case-tracker" target="_blank" rel="noopener noreferrer">https://www.doh.gov.ph/covid-19/case-tracker</a>
                    <a href="http://www.covid19.gov.ph/" target="_blank" rel="noopener noreferrer">http://www.covid19.gov.ph/</a>
                    <a href="https://coronavirus-19-api.herokuapp.com" target="_blank" rel="noopener noreferrer">https://coronavirus-19-api.herokuapp.com</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;