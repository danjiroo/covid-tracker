import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
// import MapContainer from './MapContainer';
// import Global from './Global';

class Tracker extends Component {
    state = {
        country: {
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
        },
        countrysearch: 'world'
    }

    // setState nga mastore ang prevstate
    // this.setState(
    //     prevState => {
    //         return {
    //             country: res.data,
    //             previousCountry: prevState.country,
    //             showerror: ''
    //         };
    //     },
    //     () => console.log(this.state)
    // );

    componentDidMount() {
        axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + this.state.countrysearch)
            .then(res => {
                this.setState({
                    country: res.data
                })
            })
    }

    searchCountry = (newcountry) => {
        this.setState({countrysearch: newcountry}, function() {
            axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + this.state.countrysearch)
            .then(res => {
                this.setState({
                    country: res.data,
                    showerror: ''
                })
            })
        })
    }
    
    render() {
        const { country } = this.state;
        return (
            <main>
                <div className="wrapper">
                    <h2>Coronavirus Tracker</h2>
                    <span className="countryClass">{country.country}</span>
                    <Search noInput={this.noInput} searchCountry={this.searchCountry} />
                    <div style={{padding: '10px 0', position: 'relative'}} >
                        <div className="covid_div" id="covid_id">
                            <ul>
                                <li><span>Cases:</span> {country.cases}</li>
                                <li><span>Cases Today:</span> {country.todayCases}</li>
                            </ul>
                            <ul>
                                <li><span>Recovered:</span> {country.recovered}</li>
                                <li><span>Total Tests:</span> {country.totalTests}</li>
                            </ul>
                            <ul>
                                <li><span>Deaths:</span> {country.deaths}</li>
                                <li><span>Deaths Today:</span> {country.todayDeaths}</li>
                            </ul>
                        </div>
                        {/* <div className="map_con">
                            <MapContainer newssscountry={this.state.countrysearch} />
                        </div> */}
                        {/* <MapContainer newssscountry={this.state.countrysearch} /> */}
                    </div>
                    {/* <Global /> */}
                </div>
            </main>
        )
    }
    
}
    
export default Tracker;