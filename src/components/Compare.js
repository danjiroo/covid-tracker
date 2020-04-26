import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import ChartComp from './ChartComp';

const Compare = () => {
    const [country, setCountry] = useState({
        active: '...',
        cases: '...',
        casesPerOneMillion: '...',
        country: "World",
        critical: '...',
        deaths: '...',
        deathsPerOneMillion: '...',
        recovered: '...',
        testsPerOneMillion: '...',
        todayCases: '...',
        todayDeaths: '...',
        totalTests: '...'
    });

    useEffect(() => {
        axios.get('https://coronavirus-19-api.herokuapp.com/countries/world')
            .then(res => {
                setCountry(res.data)
            })
    }, [])

    const searchCountry = (newcountry) => {
        axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + newcountry)
            .then(res => {
                setCountry(res.data)
            })
    }

    const numberWithCommas = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className="wrapper">
            <span className="countryClass">{country.country}</span>
            <Search compareCountry={true} searchCountry={searchCountry} />
            <div style={{padding: '10px 0', position: 'relative'}} >
                <div className="covid_div" id="covid_id">
                    <ul>
                        <li><span>Active Cases:</span> {numberWithCommas(String(country.active))}</li>
                        <li><span>Cases Today:</span> {numberWithCommas(String(country.todayCases))}</li>
                    </ul>
                    <ul>
                        <li><span>Recovered:</span> {numberWithCommas(String(country.recovered))}</li>
                        <li><span>Total Tests:</span> {numberWithCommas(String(country.totalTests))}</li>
                    </ul>
                    <ul>
                        <li><span>Deaths:</span> {numberWithCommas(String(country.deaths))}</li>
                        <li><span>Deaths Today:</span> {numberWithCommas(String(country.todayDeaths))}</li>
                    </ul>
                </div>
                <div className="total_cases">
                    Total Cases: <strong>{numberWithCommas(String(country.cases))}</strong>
                    <span>Data are automatically updated daily.</span>
                    <span>Hover or tap on the pie chart to see the exact data.</span>
                </div>
            </div>
            <ChartComp country={country} />
        </div>
    )
    
}
    
export default Compare;