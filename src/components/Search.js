import React, { Component } from 'react';

class Search extends Component {
    state = {
        searchinput: '',
        showerror: '',
        active: '',
        countries: [
            { country: "World", id: "1"},
            { country: "Africa", id: "2"},
            { country: "Asia", id: "3"},
            { country: "Europe", id: "4"},
            { country: "Oceania", id: "5"},
            { country: "North America", id: "6"},
            { country: "South America", id: "7"},
            { country: "Afghanistan", id: "8"},
            { country: "Albania", id: "9"},
            { country: "Algeria", id: "10"},
            { country: "Andorra", id: "11"},
            { country: "Angola", id: "12"},
            { country: "Anguilla", id: "13"},
            { country: "Antigua and Barbuda", id: "14"},
            { country: "Argentina", id: "15"},
            { country: "Armenia", id: "16"},
            { country: "Aruba", id: "17"},
            { country: "Australia", id: "18"},
            { country: "Austria", id: "19"},
            { country: "Azerbaijan", id: "20"},
            { country: "Bahamas", id: "21"},
            { country: "Bahrain", id: "22"},
            { country: "Bangladesh", id: "23"},
            { country: "Barbados", id: "24"},
            { country: "Belarus", id: "25"},
            { country: "Belgium", id: "26"},
            { country: "Belize", id: "27"},
            { country: "Benin", id: "28"},
            { country: "Bermuda", id: "29"},
            { country: "Bhutan", id: "30"},
            { country: "Bolivia", id: "31"},
            { country: "Bosnia and Herzegovina", id: "32"},
            { country: "Botswana", id: "33"},
            { country: "Brazil", id: "35"},
            { country: "British Virgin Islands", id: "36"},
            { country: "Brunei", id: "37"},
            { country: "Bulgaria", id: "38"},
            { country: "Burkina Faso", id: "34"},
            { country: "Burundi", id: "39"},
            { country: "Cabo Verde", id: "40"},
            { country: "Cambodia", id: "41"},
            { country: "Cameroon", id: "42"},
            { country: "Canada", id: "43"},
            { country: "CAR", id: "44"},
            { country: "Caribbean Netherlands", id: "45"},
            { country: "Cayman Islands", id: "46"},
            { country: "Chad", id: "47"},
            { country: "Channel Islands", id: "48"},
            { country: "Chile", id: "49"},
            { country: "China", id: "50"},
            { country: "Colombia", id: "51"},
            { country: "Congo", id: "52"},
            { country: "Costa Rica", id: "53"},
            { country: "Croatia", id: "54"},
            { country: "Cuba", id: "55"},
            { country: "Curaçao", id: "56"},
            { country: "Cyprus", id: "57"},
            { country: "Czechia", id: "58"},
            { country: "Denmark", id: "59"},
            { country: "Diamond Princess", id: "60"},
            { country: "Djibouti", id: "61"},
            { country: "Dominica", id: "62"},
            { country: "Dominican Republic", id: "63"},
            { country: "DRC", id: "64"},
            { country: "Ecuador", id: "65"},
            { country: "Egypt", id: "66"},
            { country: "El Salvador", id: "67"},
            { country: "Equatorial Guinea", id: "68"},
            { country: "Eritrea", id: "69"},
            { country: "Estonia", id: "70"},
            { country: "Eswatini", id: "71"},
            { country: "Ethiopia", id: "72"},
            { country: "Faeroe Islands", id: "73"},
            { country: "Falkland Islands", id: "74"},
            { country: "Fiji", id: "75"},
            { country: "Finland", id: "76"},
            { country: "France", id: "77"},
            { country: "French Guiana", id: "78"},
            { country: "French Polynesia", id: "79"},
            { country: "Gabon", id: "80"},
            { country: "Gambia", id: "81"},
            { country: "Georgia", id: "84"},
            { country: "Germany", id: "83"},
            { country: "Ghana", id: "82"},
            { country: "Gibraltar", id: "85"},
            { country: "Greece", id: "86"},
            { country: "Greenland", id: "87"},
            { country: "Grenada", id: "88"},
            { country: "Guadeloupe", id: "89"},
            { country: "Guatemala", id: "90"},
            { country: "Guinea", id: "91"},
            { country: "Guinea-Bissau", id: "92"},
            { country: "Guyana", id: "93"},
            { country: "Haiti", id: "94"},
            { country: "Honduras", id: "96"},
            { country: "Hong Kong", id: "97"},
            { country: "Hungary", id: "95"},
            { country: "Iceland", id: "100"},
            { country: "India", id: "98"},
            { country: "Indonesia", id: "99"},
            { country: "Iran", id: "101"},
            { country: "Iraq", id: "102"},
            { country: "Ireland", id: "103"},
            { country: "Isle of Man", id: "104"},
            { country: "Israel", id: "105"},
            { country: "Italy", id: "106"},
            { country: "Ivory Coast", id: "107"},
            { country: "Jamaica", id: "108"},
            { country: "Japan", id: "109"},
            { country: "Jordan", id: "110"},
            { country: "Kazakhstan", id: "111"},
            { country: "Kenya", id: "112"},
            { country: "Kuwait", id: "113"},
            { country: "Kyrgyzstan", id: "114"},
            { country: "Laos", id: "115"},
            { country: "Latvia", id: "116"},
            { country: "Lebanon", id: "117"},
            { country: "Liberia", id: "118"},
            { country: "Libya", id: "119"},
            { country: "Liechtenstein", id: "120"},
            { country: "Lithuania", id: "121"},
            { country: "Luxembourg", id: "122"},
            { country: "Macao", id: "123"},
            { country: "Madagascar", id: "124"},
            { country: "Malawi", id: "125"},
            { country: "Malaysia", id: "126"},
            { country: "Maldives", id: "127"},
            { country: "Mali", id: "128"},
            { country: "Malta", id: "129"},
            { country: "Martinique", id: "130"},
            { country: "Mauritania", id: "131"},
            { country: "Mauritius", id: "132"},
            { country: "Mayotte", id: "133"},
            { country: "Mexico", id: "134"},
            { country: "Moldova", id: "135"},
            { country: "Monaco", id: "136"},
            { country: "Mongolia", id: "137"},
            { country: "Montenegro", id: "138"},
            { country: "Montserrat", id: "139"},
            { country: "Morocco", id: "140"},
            { country: "Mozambique", id: "141"},
            { country: "MS Zaandam", id: "142"},
            { country: "Myanmar", id: "143"},
            { country: "Namibia", id: "144"},
            { country: "Nepal", id: "145"},
            { country: "Netherlands", id: "146"},
            { country: "New Caledonia", id: "147"},
            { country: "New Zealand", id: "148"},
            { country: "Nicaragua", id: "149"},
            { country: "Niger", id: "150"},
            { country: "Nigeria", id: "151"},
            { country: "North Macedonia", id: "152"},
            { country: "Norway", id: "153"},
            { country: "Oman", id: "154"},
            { country: "Pakistan", id: "155"},
            { country: "Palestine", id: "156"},
            { country: "Panama", id: "157"},
            { country: "Papua New Guinea", id: "158"},
            { country: "Paraguay", id: "159"},
            { country: "Peru", id: "160"},
            { country: "Philippines", id: "161"},
            { country: "Poland", id: "162"},
            { country: "Portugal", id: "163"},
            { country: "Qatar", id: "164"},
            { country: "Réunion", id: "165"},
            { country: "Romania", id: "166"},
            { country: "Russia", id: "167"},
            { country: "Rwanda", id: "168"},
            { country: "Saint Kitts and Nevis", id: "169"},
            { country: "Saint Lucia", id: "170"},
            { country: "Saint Martin", id: "171"},
            { country: "Saint Pierre Miquelon", id: "172"},
            { country: "San Marino", id: "173"},
            { country: "Sao Tome and Principe", id: "174"},
            { country: "Saudi Arabia", id: "175"},
            { country: "Senegal", id: "176"},
            { country: "Serbia", id: "177"},
            { country: "Seychelles", id: "178"},
            { country: "Sierra Leone", id: "179"},
            { country: "Singapore", id: "180"},
            { country: "Sint Maarten", id: "181"},
            { country: "Slovakia", id: "182"},
            { country: "Slovenia", id: "183"},
            { country: "Somalia", id: "184"},
            { country: "South Africa", id: "185"},
            { country: "S. Korea", id: "186"},
            { country: "South Sudan", id: "187"},
            { country: "Spain", id: "188"},
            { country: "Sri Lanka", id: "189"},
            { country: "St. Barth", id: "190"},
            { country: "St. Vincent Grenadines", id: "191"},
            { country: "Sudan", id: "192"},
            { country: "Suriname", id: "193"},
            { country: "Sweden", id: "194"},
            { country: "Switzerland", id: "195"},
            { country: "Syria", id: "196"},
            { country: "Taiwan", id: "197"},
            { country: "Tanzania", id: "198"},
            { country: "Thailand", id: "199"},
            { country: "Timor-Leste", id: "200"},
            { country: "Togo", id: "201"},
            { country: "Trinidad and Tobago", id: "202"},
            { country: "Tunisia", id: "203"},
            { country: "Turkey", id: "204"},
            { country: "Turks and Caicos", id: "205"},
            { country: "UAE", id: "206"},
            { country: "Uganda", id: "207"},
            { country: "UK", id: "208"},
            { country: "Ukraine", id: "209"},
            { country: "Uruguay", id: "210"},
            { country: "USA", id: "211"},
            { country: "Uzbekistan", id: "212"},
            { country: "Vatican City", id: "213"},
            { country: "Venezuela", id: "214"},
            { country: "Vietnam", id: "215"},
            { country: "Western Sahara", id: "216"},
            { country: "Zambia", id: "217"},
            { country: "Zimbabwe", id: "218"}
        ],
        showerrorText: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            active: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var arr = this.state.countries;
        var search = this.state.searchinput;
        var korea = false;
        var koreastring = 'south korea';
        
        if (search.toLowerCase() == koreastring.toLowerCase()) {
            search = 'S. Korea';
            korea = true;
        }

        function userExists(cntry) {
            return arr.some(function(el) {
                return el.country.toLowerCase() == cntry.toLowerCase();
            }); 
        }
        console.log(userExists(search), this.state.searchinput);
        var checkCntry = userExists(search);

        if (this.state.searchinput == '') {
            this.setState({
                showerror: 'showerror',
                active: 'active',
                showerrorText: 'Please input something!'
            });
            setTimeout(() => { this.setState({active: ''}) }, 1500);
        } else if (checkCntry == false) {
            console.log('invalid input', this.state.searchinput)
            this.setState({
                searchinput: '',
                showerror: 'showerror',
                active: 'active',
                showerrorText: 'Location not found!'
            });
            setTimeout(() => { this.setState({active: ''}) }, 1500);
        } else {
            if(korea == true) {
                this.props.searchCountry('S. Korea');
            }
            else {
                this.props.searchCountry(this.state.searchinput);
            }
            this.setState({
                searchinput: '',
                showerror: 'successBorder',
                active: 'active success',
                showerrorText: 'Got it!'
            });
           setTimeout(() => { this.setState({active: '', success: ''}) }, 1500);
        }
    }


    render() {
        return (
        <div className="form_div" id="form_id">
            <form onSubmit={this.handleSubmit}>
                <div className="searchbar">
                    <span className={'searchspan ' + this.state.active}>{this.state.showerrorText}</span>
                    <input type="text" name="searchinput" className={this.state.showerror} list="countrylist" id="searchinput" onChange={this.handleChange} value={this.state.searchinput} placeholder="Search a country | a continent | 'world'" />
                    <datalist id="countrylist">
                        <select name="searchinput">
                            {this.state.countries.map(fetch =>
                                <option key={fetch.id} value={fetch.country}>{fetch.country}</option>
                            )}
                        </select>
                    </datalist>
                </div>
                <input type="submit" value="Search" onClick={this.handleSubmit} />
            </form>
        </div>
        )
    }
}
 
export default Search;