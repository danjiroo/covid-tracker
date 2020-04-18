import React, { Component } from 'react';
import axios from 'axios';

class Global extends Component {
    state = {
        countryyy: []
    }

    componentDidMount() {
        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
            .then(ress => {
                this.setState({
                    countryyy: ress.data
                })
            })
    }

    handleClick = () => {
        var globalid = document.getElementById('globalid');
        var sidebtn = document.getElementById('sidebtn');
        var appid = document.getElementById('appid');
        var covid_id = document.getElementById('covid_id');
        var form_id = document.getElementById('form_id');
        var map_id = document.getElementById('map_id');
        globalid.classList.toggle('active');
        sidebtn.classList.toggle('active');
        appid.classList.toggle('active');
        covid_id.classList.toggle('active');
        form_id.classList.toggle('active');
        map_id.classList.toggle('active');
    }

    render() {
        const global = this.state.countryyy;
        global.sort(function(a, b){return b.recovered - a.recovered});
        const world = global.map(all => {
            if ( all.country !== 'Total:' ) {
                if ( all.country !== '' ) {
                    return (
                        <li key={all.country}>
                            <span>{all.country}</span>
                            <small>
                                <q><mark>Cases:</mark> {all.cases}</q>
                                <q><mark>Deaths:</mark> {all.deaths}</q>
                                <q><mark>Recovered:</mark> {all.recovered}</q>
                            </small>
                        </li>
                    )
                }
            }
        })
        
        return (
            <div className="sidediv">
                <button onClick={this.handleClick} id="sidebtn">+</button>
                <div className="global" id="globalid">
                    <ul>
                        { world }
                    </ul>
                </div>
            </div>
        )
    }
}

// export default Global;