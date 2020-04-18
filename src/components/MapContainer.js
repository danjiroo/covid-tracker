import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  // constructor(props) {
  //   super(props);

   state = {
      // data: [
      //   { country: 'World', latitude: '0', longitude: '0' },
      //   { country: 'Africa', latitude: '0', longitude: '0' },
      //   { country: 'Asia', latitude: '0', longitude: '0' },
      //   { country: 'Europe', latitude: '0', longitude: '0' },
      //   { country: 'Oceania', latitude: '0', longitude: '0' },
      //   { country: 'North America', latitude: '0', longitude: '0' },
      //   { country: 'South America', latitude: '0', longitude: '0' },
      //   { country: 'Antarctica', latitude: '-90', longitude: '0' },//wala
      //   { country: 'Afghanistan', latitude: '33', longitude: '65' },
      //   { country: 'Albania', latitude: '41', longitude: '20' },
      //   { country: 'Algeria', latitude: '28', longitude: '3' },
      //   { country: 'American Samoa', latitude: '-14.3333', longitude: '-170' },//wala
      //   { country: 'Andorra', latitude: '42.5', longitude: '1.6' },
      //   { country: 'Angola', latitude: '-12.5', longitude: '18.5' },
      //   { country: 'Anguilla', latitude: '18.25', longitude: '-63.1667' },
      //   { country: 'Antigua and Barbuda', latitude: '17.05', longitude: '-61.8' },
      //   { country: 'Argentina', latitude: '-34', longitude: '-64' },
      //   { country: 'Armenia', latitude: '40', longitude: '45' },
      //   { country: 'Aruba', latitude: '12.5', longitude: '-69.9667' },
      //   { country: 'Australia', latitude: '-27', longitude: '133' },
      //   { country: 'Austria', latitude: '47.3333', longitude: '13.3333' },
      //   { country: 'Azerbaijan', latitude: '40.5', longitude: '47.5' },
      //   { country: 'Bahamas', latitude: '24.25', longitude: '-76' },
      //   { country: 'Bahrain', latitude: '26', longitude: '50.55' },
      //   { country: 'Bangladesh', latitude: '24', longitude: '90' },
      //   { country: 'Barbados', latitude: '13.1667', longitude: '-59.5333' },
      //   { country: 'Belarus', latitude: '53', longitude: '28' },
      //   { country: 'Belgium', latitude: '50.8333', longitude: '4' },
      //   { country: 'Belize', latitude: '17.25', longitude: '-88.75' },
      //   { country: 'Benin', latitude: '9.5', longitude: '2.25' },
      //   { country: 'Bermuda', latitude: '32.3333', longitude: '-64.75' },
      //   { country: 'Bhutan', latitude: '27.5', longitude: '90.5' },
      //   { country: 'Bolivia', latitude: '-17', longitude: '-65' },
      //   { country: 'Bosnia and Herzegovina', latitude: '44', longitude: '18' },
      //   { country: 'Botswana', latitude: '-22', longitude: '24' },
      //   { country: 'Bouvet Island', latitude: '-54.4333', longitude: '3.4' },//wala
      //   { country: 'Brazil', latitude: '-10', longitude: '-55' },
      //   { country: 'British Virgin Islands', latitude: '18', longitude: '-64' },
      //   { country: 'British Indian Ocean Territory', latitude: '-6', longitude: '71.5' },//wala
      //   { country: 'Brunei', latitude: '4.5', longitude: '114.6667' },
      //   { country: 'Bulgaria', latitude: '43', longitude: '25' },
      //   { country: 'Burkina Faso', latitude: '13', longitude: '-2' },
      //   { country: 'Burundi', latitude: '-3.5', longitude: '30' },
      //   { country: 'Cabo Verde', latitude: '16', longitude: '-24' },//Cape Verde
      //   { country: 'Cambodia', latitude: '13', longitude: '105' },
      //   { country: 'Cameroon', latitude: '6', longitude: '12' },
      //   { country: 'Canada', latitude: '60', longitude: '-95' },
      //   { country: 'CAR', latitude: '7', longitude: '21' },//Central African Republic
      //   { country: 'Caribbean Netherlands', latitude: '12', longitude: '-68' },
      //   { country: 'Cayman Islands', latitude: '19.5', longitude: '-80.5' },
      //   { country: 'Chad', latitude: '15', longitude: '19' },
      //   { country: 'Channel Islands', latitude: '49', longitude: '-2' },
      //   { country: 'Chile', latitude: '-30', longitude: '-71' },
      //   { country: 'China', latitude: '35', longitude: '105' },
      //   { country: 'Christmas Island', latitude: '-10.5', longitude: '105.6667' },//wala
      //   { country: 'Cocos (Keeling) Islands', latitude: '-12.5', longitude: '96.8333' },//wala
      //   { country: 'Colombia', latitude: '4', longitude: '-72' },
      //   { country: 'Comoros', latitude: '-12.1667', longitude: '44.25' },//wala
      //   { country: 'Congo', latitude: '0', longitude: '25' },
      //   { country: 'Cook Islands', latitude: '-21.2333', longitude: '-159.7667' },//wala
      //   { country: 'Costa Rica', latitude: '10', longitude: '-84' },
      //   { country: 'CAte dIvoire', latitude: '8', longitude: '-5' },//wala
      //   { country: 'Croatia', latitude: '45.1667', longitude: '15.5' },
      //   { country: 'Cuba', latitude: '21.5', longitude: '-80' },
      //   { country: 'Curaçao', latitude: '12', longitude: '-69' },
      //   { country: 'Cyprus', latitude: '35', longitude: '33' },
      //   { country: 'Czechia', latitude: '49.75', longitude: '15.5' },//Czech Republic
      //   { country: 'Denmark', latitude: '56', longitude: '10' },
      //   { country: 'Diamond Princess', latitude: '18.42', longitude: '-64.64' },//cruise ship ni
      //   { country: 'Djibouti', latitude: '11.5', longitude: '43' },
      //   { country: 'Dominica', latitude: '15.4167', longitude: '-61.3333' },
      //   { country: 'Dominican Republic', latitude: '19', longitude: '-70.6667' },
      //   { country: 'DRC', latitude: '-2', longitude: '23' },//Democratic Republic of the Congo
      //   { country: 'Ecuador', latitude: '-2', longitude: '-77.5' },
      //   { country: 'Egypt', latitude: '27', longitude: '30' },
      //   { country: 'El Salvador', latitude: '13.8333', longitude: '-88.9167' },
      //   { country: 'Equatorial Guinea', latitude: '2', longitude: '10' },
      //   { country: 'Eritrea', latitude: '15', longitude: '39' },
      //   { country: 'Estonia', latitude: '59', longitude: '26' },
      //   { country: 'Eswatini', latitude: '-26', longitude: '31' },
      //   { country: 'Ethiopia', latitude: '8', longitude: '38' },
      //   { country: 'Faeroe Islands', latitude: '61.8', longitude: '-6.9' },//Faroe Islands
      //   { country: 'Falkland Islands', latitude: '-51.75', longitude: '-59' },//Falkland Islands (Malvinas)
      //   { country: 'Fiji', latitude: '-17.4', longitude: '178' },
      //   { country: 'Finland', latitude: '64', longitude: '26' },
      //   { country: 'France', latitude: '46', longitude: '2' },
      //   { country: 'French Guiana', latitude: '4', longitude: '-53' },
      //   { country: 'French Polynesia', latitude: '-15', longitude: '-140' },
      //   { country: 'French Southern Territories', latitude: '-43', longitude: '67' },//wala
      //   { country: 'Gabon', latitude: '-1', longitude: '11.75' },
      //   { country: 'Gambia', latitude: '13.4667', longitude: '-16.5667' },
      //   { country: 'Georgia', latitude: '42', longitude: '43.5' },
      //   { country: 'Germany', latitude: '51', longitude: '9' },
      //   { country: 'Ghana', latitude: '8', longitude: '-2"' },
      //   { country: 'Gibraltar', latitude: '36.1833', longitude: '-5.3667' },
      //   { country: 'Greece', latitude: '39', longitude: '22' },
      //   { country: 'Greenland', latitude: '72', longitude: '-40' },
      //   { country: 'Grenada', latitude: '12.1167', longitude: '-61.6667' },
      //   { country: 'Guadeloupe', latitude: '16.25', longitude: '-61.5833' },
      //   { country: 'Guam', latitude: '13.4667', longitude: '144.7833' },//wala
      //   { country: 'Guatemala', latitude: '15.5', longitude: '-90.25' },
      //   { country: 'Guernsey', latitude: '49.5', longitude: '-2.56' },//wala
      //   { country: 'Guinea', latitude: '11', longitude: '-10' },
      //   { country: 'Guinea-Bissau', latitude: '12', longitude: '-15' },
      //   { country: 'Guyana', latitude: '5', longitude: '-59' },
      //   { country: 'Haiti', latitude: '19', longitude: '-72.4167' },
      //   { country: 'Honduras', latitude: '15', longitude: '-86.5' },
      //   { country: 'Hong Kong', latitude: '22.25', longitude: '114.1667' },
      //   { country: 'Hungary', latitude: '47', longitude: '20' },
      //   { country: 'Iceland', latitude: '65', longitude: '-18' },
      //   { country: 'India', latitude: '20', longitude: '77' },
      //   { country: 'Indonesia', latitude: '-5', longitude: '120' },
      //   { country: 'Iran', latitude: '32', longitude: '53' },
      //   { country: 'Iraq', latitude: '33', longitude: '44' },
      //   { country: 'Ireland', latitude: '53', longitude: '-8' },
      //   { country: 'Isle of Man', latitude: '54.23', longitude: '-4.55' },
      //   { country: 'Israel', latitude: '31.5', longitude: '34.75' },
      //   { country: 'Italy', latitude: '42.8333', longitude: '12.8333' },
      //   { country: 'Ivory Coast', latitude: '7.54', longitude: '-5.54' },
      //   { country: 'Jamaica', latitude: '18.25', longitude: '-77.5' },
      //   { country: 'Japan', latitude: '36', longitude: '138' },
      //   { country: 'Jersey', latitude: '49.21', longitude: '-2.13' },//wala
      //   { country: 'Jordan', latitude: '31', longitude: '36' },
      //   { country: 'Kazakhstan', latitude: '48', longitude: '68' },
      //   { country: 'Kenya', latitude: '1', longitude: '38' },
      //   { country: 'Kiribati', latitude: '1.4167', longitude: '173' },//wala
      //   { country: 'Korea', latitude: '40', longitude: '127' },//wala
      //   { country: 'Kuwait', latitude: '29.3375', longitude: '47.6581' },
      //   { country: 'Kyrgyzstan', latitude: '41', longitude: '75' },
      //   { country: 'Laos', latitude: '18', longitude: '105' },
      //   { country: 'Latvia', latitude: '57', longitude: '25' },
      //   { country: 'Lebanon', latitude: '33.8333', longitude: '35.8333' },
      //   { country: 'Lesotho', latitude: '-29.5', longitude: '28.5' },//wala
      //   { country: 'Liberia', latitude: '6.5', longitude: '-9.5' },
      //   { country: 'Libya', latitude: '25', longitude: '17' },//Libyan Arab Jamahiriya
      //   { country: 'Liechtenstein', latitude: '47.1667', longitude: '9.5333' },
      //   { country: 'Lithuania', latitude: '56', longitude: '24' },
      //   { country: 'Luxembourg', latitude: '49.75', longitude: '6.1667' },
      //   { country: 'Macao', latitude: '22.1667', longitude: '113.55' },
      //   { country: 'Macedonia', latitude: '41.8333', longitude: '22' },//wala
      //   { country: 'Madagascar', latitude: '-20', longitude: '47' },
      //   { country: 'Malawi', latitude: '-13.5', longitude: '34' },
      //   { country: 'Malaysia', latitude: '2.5', longitude: '112.5' },
      //   { country: 'Maldives', latitude: '3.25', longitude: '73' },
      //   { country: 'Mali', latitude: '17', longitude: '-4' },
      //   { country: 'Malta', latitude: '35.8333', longitude: '14.5833' },
      //   { country: 'Marshall Islands', latitude: '9', longitude: '168' },//wala
      //   { country: 'Martinique', latitude: '14.6667', longitude: '-61' },
      //   { country: 'Mauritania', latitude: '20', longitude: '-12' },
      //   { country: 'Mauritius', latitude: '-20.2833', longitude: '57.55' },
      //   { country: 'Mayotte', latitude: '-12.8333', longitude: '45.1667' },
      //   { country: 'Mexico', latitude: '23', longitude: '-102' },
      //   { country: 'Micronesia', latitude: '6.9167', longitude: '158.25' },//wala
      //   { country: 'Moldova', latitude: '47', longitude: '29' },
      //   { country: 'Monaco', latitude: '43.7333', longitude: '7.4' },
      //   { country: 'Mongolia', latitude: '46', longitude: '105' },
      //   { country: 'Montenegro', latitude: '42', longitude: '19' },
      //   { country: 'Montserrat', latitude: '16.75', longitude: '-62.2' },
      //   { country: 'Morocco', latitude: '32', longitude: '-5' },
      //   { country: 'Mozambique', latitude: '-18.25', longitude: '35' },
      //   { country: 'MS Zaandam', latitude: '52.36', longitude: '4.89' },
      //   { country: 'Myanmar', latitude: '22', longitude: '98' },
      //   { country: 'Namibia', latitude: '-22', longitude: '17' },
      //   { country: 'Nauru', latitude: '-0.5333', longitude: '166.9167' },//wala
      //   { country: 'Nepal', latitude: '28', longitude: '84' },
      //   { country: 'Netherlands', latitude: '52.5', longitude: '5.75' },
      //   { country: 'Netherlands Antilles', latitude: '12.25', longitude: '-68.75' },//wala
      //   { country: 'New Caledonia', latitude: '-21.5', longitude: '165.5' },
      //   { country: 'New Zealand', latitude: '-41', longitude: '174' },
      //   { country: 'Nicaragua', latitude: '13', longitude: '-85' },
      //   { country: 'Niger', latitude: '16', longitude: '8' },
      //   { country: 'Nigeria', latitude: '10', longitude: '8' },
      //   { country: 'Niue', latitude: '-19.0333', longitude: '-169.8667' },//wala
      //   { country: 'North Macedonia', latitude: '41.6', longitude: '21.74' },
      //   { country: 'Norfolk Island', latitude: '-29.0333', longitude: '167.95' },//wala
      //   { country: 'Northern Mariana Islands', latitude: '15.2', longitude: '145.75' },//wala
      //   { country: 'Norway', latitude: '62', longitude: '10' },
      //   { country: 'Oman', latitude: '21', longitude: '57' },
      //   { country: 'Pakistan', latitude: '30', longitude: '70' },
      //   { country: 'Palau', latitude: '7.5', longitude: '134.5' },//wala
      //   { country: 'Palestine', latitude: '32', longitude: '35.25' },//Palestinian
      //   { country: 'Panama', latitude: '9', longitude: '-80' },
      //   { country: 'Papua New Guinea', latitude: '-6', longitude: '147' },
      //   { country: 'Paraguay', latitude: '-23', longitude: '-58' },
      //   { country: 'Peru', latitude: '-10', longitude: '-76' },
      //   { country: 'Philippines', latitude: '13', longitude: '122' },
      //   { country: 'Pitcairn', latitude: '-24.7', longitude: '-127.4' },//wala
      //   { country: 'Poland', latitude: '52', longitude: '20' },
      //   { country: 'Portugal', latitude: '39.5', longitude: '-8' },
      //   { country: 'Puerto Rico', latitude: '18.25', longitude: '-66.5' },//wala
      //   { country: 'Qatar', latitude: '25.5', longitude: '51.25' },
      //   { country: 'Réunion', latitude: '-21.1', longitude: '55.6' },
      //   { country: 'Romania', latitude: '46', longitude: '25' },
      //   { country: 'Russia', latitude: '60', longitude: '100' },//Russian Federation
      //   { country: 'Rwanda', latitude: '-2', longitude: '30' },
      //   { country: 'St Helena', latitude: '-15.9333', longitude: '-5.7' },//wala
      //   { country: 'Saint Kitts and Nevis', latitude: '17.3333', longitude: '-62.75' },
      //   { country: 'Saint Lucia', latitude: '13.8833', longitude: '-61.1333' },
      //   { country: 'Saint Martin', latitude: '18.07', longitude: '-63.05' },
      //   { country: 'Saint Pierre Miquelon', latitude: '46.88', longitude: '-56.31' },
      //   { country: 'Samoa', latitude: '-13.5833', longitude: '-172.3333' },//wala
      //   { country: 'San Marino', latitude: '43.7667', longitude: '12.4167' },
      //   { country: 'Sao Tome and Principe', latitude: '1', longitude: '7' },
      //   { country: 'Saudi Arabia', latitude: '25', longitude: '45' },
      //   { country: 'Senegal', latitude: '14', longitude: '-14' },
      //   { country: 'Serbia', latitude: '44', longitude: '21' },
      //   { country: 'Seychelles', latitude: '-4.5833', longitude: '55.6667' },
      //   { country: 'Sierra Leone', latitude: '8.5', longitude: '-11.5' },
      //   { country: 'Singapore', latitude: '1.3667', longitude: '103.8' },
      //   { country: 'Sint Maarten', latitude: '18.04', longitude: '-63.05' },
      //   { country: 'Slovakia', latitude: '48.6667', longitude: '19.5' },
      //   { country: 'Slovenia', latitude: '46', longitude: '15' },
      //   { country: 'Solomon Islands', latitude: '-8', longitude: '159' },//wala
      //   { country: 'Somalia', latitude: '10', longitude: '49' },
      //   { country: 'South Africa', latitude: '-29', longitude: '24' },
      //   { country: 'S. Korea', latitude: '35.9', longitude: '127' },
      //   { country: 'South Sudan', latitude: '6.87', longitude: '31.3' },
      //   { country: 'Spain', latitude: '40', longitude: '-4' },
      //   { country: 'Sri Lanka', latitude: '7', longitude: '81' },
      //   { country: 'St. Barth', latitude: '17.9', longitude: '-62.83' },
      //   { country: 'St. Vincent Grenadines', latitude: '13.25', longitude: '-61.2' },
      //   { country: 'Sudan', latitude: '15', longitude: '30' },
      //   { country: 'Suriname', latitude: '4', longitude: '-56' },
      //   { country: 'Swaziland', latitude: '-26.5', longitude: '31.5' },//wala
      //   { country: 'Sweden', latitude: '62', longitude: '15' },
      //   { country: 'Switzerland', latitude: '47', longitude: '8' },
      //   { country: 'Syria', latitude: '35', longitude: '38' },//Syrian Arab Republic
      //   { country: 'Taiwan', latitude: '23.5', longitude: '121' },
      //   { country: 'Tajikistan', latitude: '39', longitude: '71' },//wala
      //   { country: 'Tanzania', latitude: '-6', longitude: '35' },
      //   { country: 'Thailand', latitude: '15', longitude: '100' },
      //   { country: 'Timor-Leste', latitude: '-8.55', longitude: '125.5167' },
      //   { country: 'Togo', latitude: '8', longitude: '1.1667' },
      //   { country: 'Tokelau', latitude: '-9', longitude: '-172' },//wala
      //   { country: 'Tonga', latitude: '-20', longitude: '-175' },//wala
      //   { country: 'Trinidad and Tobago', latitude: '11', longitude: '-61' },
      //   { country: 'Tunisia', latitude: '34', longitude: '9' },
      //   { country: 'Turkey', latitude: '39', longitude: '35' },
      //   { country: 'Turkmenistan', latitude: '40', longitude: '60' },//wala
      //   { country: 'Turks and Caicos', latitude: '21.69', longitude: '-71.79' },
      //   { country: 'Tuvalu', latitude: '-8', longitude: '178' },//wala
      //   { country: 'UAE', latitude: '24', longitude: '54' },//United Arab Emirates
      //   { country: 'Uganda', latitude: '1', longitude: '32' },
      //   { country: 'UK', latitude: '54', longitude: '-2' },//United Kingdom
      //   { country: 'Ukraine', latitude: '49', longitude: '32' },
      //   { country: 'Uruguay', latitude: '-33', longitude: '-56' },
      //   { country: 'USA', latitude: '38', longitude: '-97' },//United States
      //   { country: 'United States Minor Outlying Islands', latitude: '19.2833', longitude: '166.6' },//wala
      //   { country: 'Uzbekistan', latitude: '41', longitude: '64' },
      //   { country: 'Vanuatu', latitude: '-16', longitude: '167' },//wala
      //   { country: 'Vatican City', latitude: '41.9', longitude: '12.45' },
      //   { country: 'Venezuela', latitude: '8', longitude: '-66' },
      //   { country: 'Vietnam', latitude: '16', longitude: '106' },
      //   { country: 'Western Sahara', latitude: '24.5', longitude: '-13' },
      //   { country: 'Yemen', latitude: '15', longitude: '48' },//wala
      //   { country: 'Zambia', latitude: '-15', longitude: '30' },
      //   { country: 'Zimbabwe', latitude: '-19.01', longitude: '29.15' }
      // ],
      // newcoor: { lat: "12", lng: "122"  }
      data: [
        { country: 'World', iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56963097.264944725!2d4.4762787211041495!3d29.37756327386773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1586765065914!5m2!1sen!2sph' },
        { country: 'Africa', iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26934822.040775463!2d25.541609059147508!3d-2.48775383542633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1586765623438!5m2!1sen!2sph' },
        { country: 'Asia', iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23782001.837853577!2d105.16174999316561!3d28.10154602319824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1586765593708!5m2!1sen!2sph' },
        { country: 'Europe', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21825940.277536776!2d4.182800650905805!3d48.10446081866148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEurope!5e0!3m2!1sen!2sph!4v1586765660972!5m2!1sen!2sph' },
        { country: 'Oceania', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30843504.32319605!2d127.77278599502091!3d-23.536392820061785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e41bc2bfc38b041%3A0x4b6ab384c4ebeb6e!2sOceania!5e0!3m2!1sen!2sph!4v1586765719659!5m2!1sen!2sph' },
        { country: 'North America', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19687108.193017386!2d-113.87798872113996!3d43.094512491657795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b30b71698e729d%3A0x131328839761a382!2sNorth%20America!5e0!3m2!1sen!2sph!4v1586767452491!5m2!1sen!2sph' },
        { country: 'South America', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25358805.55533354!2d-68.98710142677253!3d-19.8473620191927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9409341c355d34b5%3A0x69d40ccfc9c6e32b!2sSouth%20America!5e0!3m2!1sen!2sph!4v1586767473085!5m2!1sen!2sph' },
        { country: 'Afghanistan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6785928.464107338!2d63.21313229718312!3d33.85250760543362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16eb6f8ff026d%3A0xf3b5460dbe96da78!2sAfghanistan!5e0!3m2!1sen!2sph!4v1586767600214!5m2!1sen!2sph' },
        { country: 'Albania', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538255.3392954427!2d18.968457681026447!3d41.147514090401444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13453bf3bd274c2d%3A0x77ce589d6983bee!2sAlbania!5e0!3m2!1sen!2sph!4v1586767616646!5m2!1sen!2sph' },
        { country: 'Algeria', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14456034.498384839!2d-7.3436859719314995!3d27.800372053744958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8a6a28037bd1%3A0x7140bee3abd7f8a2!2sAlgeria!5e0!3m2!1sen!2sph!4v1586767630446!5m2!1sen!2sph' },
        // { country: 'American Samoa', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990781.1831884143!2d-170.6672593753701!3d-14.063059590152072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71a684b79248fdc9%3A0xf3ee739e2dae4bdd!2sAmerican%20Samoa!5e0!3m2!1sen!2sph!4v1586767643942!5m2!1sen!2sph' },
        { country: 'Andorra', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1347126.626844313!2d1.7388467963357686!3d42.250395538984435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a5f52e989ef095%3A0x7c93ed778ea7f92!2sAndorra!5e0!3m2!1sen!2sph!4v1586767692342!5m2!1sen!2sph' },
        { country: 'Angola', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8016084.423563281!2d13.283319940469346!3d-11.179955660978631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f24ecaad8b27%3A0x590a289d0d4a4e3d!2sAngola!5e0!3m2!1sen!2sph!4v1586767763342!5m2!1sen!2sph' },
        { country: 'Anguilla', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587974.2115313299!2d-63.36244165221879!3d18.25411921341897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e63748eef01e5%3A0x3b9d6ad384e0d481!2sAnguilla!5e0!3m2!1sen!2sph!4v1586767740246!5m2!1sen!2sph' },
        { country: 'Antigua and Barbuda', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181371.5632609196!2d-62.0432128489852!3d17.435234979886424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0d6eb96db8d1c1%3A0x276a3788e18b7994!2sAntigua%20and%20Barbuda!5e0!3m2!1sen!2sph!4v1586767783038!5m2!1sen!2sph' },
        { country: 'Argentina', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10965509.360841557!2d-67.52402500857968!3d-35.56481342488712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1sen!2sph!4v1586767802686!5m2!1sen!2sph' },
        { country: 'Armenia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563370.0142047307!2d43.919717981217175!3d40.06521586167127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2sArmenia!5e0!3m2!1sen!2sph!4v1586767815830!5m2!1sen!2sph' },
        { country: 'Aruba', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302265.24428573705!2d-70.0564044258883!3d12.467727750808832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8538cfe25a77db%3A0xf16a8a3e89818c2f!2sAruba!5e0!3m2!1sen!2sph!4v1586767831670!5m2!1sen!2sph' },
        { country: 'Australia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29614631.49347895!2d115.21998899498912!3d-25.031789327044653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sph!4v1586767841421!5m2!1sen!2sph' },
        { country: 'Austria', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364369.2879338954!2d11.215281681873407!3d47.21475506570338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079b259d2a7f%3A0x1012d47bdde4c1af!2sAustria!5e0!3m2!1sen!2sph!4v1586767867941!5m2!1sen!2sph' },
        { country: 'Azerbaijan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560952.3449294048!2d46.63350804296115!3d40.17045245736891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cd91aa21ddf%3A0xe6c9526b3e83cd08!2sAzerbaijan!5e0!3m2!1sen!2sph!4v1586767882415!5m2!1sen!2sph' },
        { country: 'Bahamas', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720137.2264472516!2d-78.21027877303993!3d24.41792578043787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d69a3bb2480f3d%3A0x133eb4836ac779e5!2sThe%20Bahamas!5e0!3m2!1sen!2sph!4v1586767900005!5m2!1sen!2sph' },
        { country: 'Bahrain', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459242.7298737386!2d50.3073924329634!3d25.940680514930822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e48524e6a47a211%3A0x2e9450e2dbda1046!2sBahrain!5e0!3m2!1sen!2sph!4v1586767911085!5m2!1sen!2sph' },
        { country: 'Bangladesh', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746984.2596789156!2d88.10076632775137!3d23.490590302432363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sph!4v1586767924389!5m2!1sen!2sph' },
        { country: 'Barbados', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1769719.3075153935!2d-59.38023963055389!3d13.48820957208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c43f1fbae321aa3%3A0xeec51b38cf4362b!2sBarbados!5e0!3m2!1sen!2sph!4v1586767944301!5m2!1sen!2sph' },
        { country: 'Belarus', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418943.0090191234!2d25.735565210956665!3d53.69600843615757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46da2584e2ad4881%3A0xa1d181ec8c10!2sBelarus!5e0!3m2!1sen!2sph!4v1586767955405!5m2!1sen!2sph' },
        { country: 'Belgium', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148562.15371113!2d3.9456095819294967!3d50.52943267155812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17d64edf39797%3A0x47ebf2b439e60ff2!2sBelgium!5e0!3m2!1sen!2sph!4v1586767974317!5m2!1sen!2sph' },
        { country: 'Belize', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4727634.897473527!2d-90.26305925795273!3d17.352089702821257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5c5b3ec112faf9%3A0xf64a8a4d3f1ee34e!2sBelize!5e0!3m2!1sen!2sph!4v1586767995558!5m2!1sen!2sph' },
        { country: 'Benin', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4031868.064367199!2d0.06539109273833857!3d9.300343024391346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023542b047a5695%3A0xecb277f8cb622ef5!2sBenin!5e0!3m2!1sen!2sph!4v1586768008742!5m2!1sen!2sph' },
        { country: 'Bermuda', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261755.016852442!2d-64.76209411730126!3d32.26842399109781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8a2d139e8668b0a5%3A0x3cdffdc72c99b8bc!2sBermuda!5e0!3m2!1sen!2sph!4v1586768027134!5m2!1sen!2sph' },
        { country: 'Bhutan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2202322.0080528483!2d90.3754474116041!3d27.217149210324393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375b92a573c595cf%3A0xbb0cac652836bcda!2sBhutan!5e0!3m2!1sen!2sph!4v1586768103192!5m2!1sen!2sph' },
        { country: 'Bolivia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7845257.11373655!2d-68.04411091680934!3d-16.2362690000198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf8977bba295%3A0x1c9ec2bb0115edbf!2sBolivia!5e0!3m2!1sen!2sph!4v1586768118158!5m2!1sen!2sph' },
        { country: 'Bosnia and Herzegovina', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1471658.6262157182!2d16.5520508826654!3d43.91107412490001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134ba215c737a9d7%3A0x6df7e20343b7e90c!2sBosnia%20and%20Herzegovina!5e0!3m2!1sen!2sph!4v1586768129950!5m2!1sen!2sph' },
        { country: 'Botswana', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779271.047958131!2d22.443461993948027!3d-22.327395195767625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ea44321d1452211%3A0xf1647c2a8715af7b!2sBotswana!5e0!3m2!1sen!2sph!4v1586768144438!5m2!1sen!2sph' },
        // { country: 'Bouvet Island', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187200.96800263645!2d3.219382662245328!3d-54.41728369795611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a3f223c0c2717%3A0xb76870f9f9dabceb!2sBouvet%20Island!5e0!3m2!1sen!2sph!4v1586768266479!5m2!1sen!2sph' },
        { country: 'Brazil', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31753918.49138118!2d-69.64872607287622!3d-13.705681771544725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrazil!5e0!3m2!1sen!2sph!4v1586768279470!5m2!1sen!2sph' },
        { country: 'British Virgin Islands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587322.5896160541!2d-64.7684631257028!3d18.445666023505073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c05739c2b6453cd%3A0x6da070eeb1ec3b3d!2sBritish%20Virgin%20Islands!5e0!3m2!1sen!2sph!4v1586768292725!5m2!1sen!2sph' },
        // { country: 'British Indian Ocean Territory', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453149.089441803!2d72.04178365595482!3d-7.87830622815298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x249273e0849da387%3A0xa94f6470101f6be1!2sBritish%20Indian%20Ocean%20Territory!5e0!3m2!1sen!2sph!4v1586768316630!5m2!1sen!2sph' },
        { country: 'Brunei', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509087.2228894967!2d114.4393897470141!3d4.550076372513198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218994b04b8b9d1%3A0x5dfe3580dd09dad6!2sBrunei!5e0!3m2!1sen!2sph!4v1586768329366!5m2!1sen!2sph' },
        { country: 'Bulgaria', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663599.6302924408!2d26.207019756072125!3d42.297053508982586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8fec1c85bf089%3A0xa01269bf4c10!2sBulgaria!5e0!3m2!1sen!2sph!4v1586768354599!5m2!1sen!2sph' },
        { country: 'Burkina Faso', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3992729.2005720153!2d-3.7983732107917443!3d12.238147512326782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2dca26d5a6709b%3A0x27930aed46836dab!2sBurkina%20Faso!5e0!3m2!1sen!2sph!4v1586768365758!5m2!1sen!2sph' },
        { country: 'Burundi', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1019606.8850318342!2d29.364800623571895!3d-3.389367669566745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c144d33654f15b%3A0xb1234d0e5631ec8d!2sBurundi!5e0!3m2!1sen!2sph!4v1586768391894!5m2!1sen!2sph' },
        { country: 'Cabo Verde', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963454.0991449868!2d-25.10985452682408!3d16.0202144563039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9358f2159115131%3A0x6b1af236f918ea1f!2sCape%20Verde!5e0!3m2!1sen!2sph!4v1586768404215!5m2!1sen!2sph' },
        { country: 'Cambodia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994260.809185587!2d102.73668016857238!3d12.136402457400612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCambodia!5e0!3m2!1sen!2sph!4v1586768416558!5m2!1sen!2sph' },
        { country: 'Cameroon', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8104058.340565877!2d7.79813574769911!3d7.347189252408873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613753703e0f21%3A0x2b03c44599829b53!2sCameroon!5e0!3m2!1sen!2sph!4v1586768427294!5m2!1sen!2sph' },
        { country: 'Canada', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18887548.3087081!2d-113.71081274488274!3d54.69890926990609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sph!4v1586768448814!5m2!1sen!2sph' },
        { country: 'CAR', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4058370.9437012207!2d18.69267795813567!3d6.615472826725985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10b8e9538d86a2b7%3A0xb89bc6025a5c8024!2sCentral%20African%20Republic!5e0!3m2!1sen!2sph!4v1586768524206!5m2!1sen!2sph' },//Central African Republic
        { country: 'Caribbean Netherlands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4996045.086599666!2d-69.62654263203167!3d11.488188913142904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c22188b8f1db9b7%3A0xe16d35d72183b5cf!2sCaribbean%20Netherlands!5e0!3m2!1sen!2sph!4v1586768573343!5m2!1sen!2sph' },
        { country: 'Cayman Islands', iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d481773.39463941037!2d-81.1400802!3d19.3754455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f25863e2fb8aa29%3A0x7045c4d38770715e!2sCayman%20Islands!5e0!3m2!1sen!2sph!4v1586768601501!5m2!1sen!2sph' },
        { country: 'Chad', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7877733.826034934!2d14.240142907761502!3d15.400853671609953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10e73978bd677361%3A0x3b60835bcec0809c!2sChad!5e0!3m2!1sen!2sph!4v1586768613704!5m2!1sen!2sph' },
        { country: 'Channel Islands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331953.28624333255!2d-2.662656773372353!3d49.45833877934987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480c52a14ab27fc9%3A0xa4a39afe295000d5!2sChannel%20Islands!5e0!3m2!1sen!2sph!4v1586768629359!5m2!1sen!2sph' },
        { country: 'Chile', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11640522.974495852!2d-74.77858463680907!3d-30.28440239560243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x505e1131102b91d!2sChile!5e0!3m2!1sen!2sph!4v1586768652470!5m2!1sen!2sph' },
        { country: 'China', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10874443.634157782!2d99.65817118611352!3d36.2249992945743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31508e64e5c642c1%3A0x951daa7c349f366f!2sChina!5e0!3m2!1sen!2sph!4v1586768669902!5m2!1sen!2sph' },
        // { country: 'Christmas Island', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125539.78166732112!2d105.55308711113877!3d-10.49134928525409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ef59a27e3c0a7cf%3A0x15e7d6090475ea16!2s6798%2C%20Christmas%20Island!5e0!3m2!1sen!2sph!4v1586768682678!5m2!1sen!2sph' },
        // { country: 'Cocos (Keeling) Islands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249753.67653575662!2d96.73297961509948!3d-12.015877279997014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f0ec5897ee869c1%3A0xdbd142f010e39fa6!2sCocos%20(Keeling)%20Islands!5e0!3m2!1sen!2sph!4v1586768696127!5m2!1sen!2sph' },
        { country: 'Colombia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8144470.613087405!2d-78.835057328655!3d4.631112334620819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sColombia!5e0!3m2!1sen!2sph!4v1586768706638!5m2!1sen!2sph' },
        // { country: 'Comoros', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499716.0084041905!2d43.60058067010158!3d-11.90290788574504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1898e3036408a48d%3A0xf70a7fbee4dfd4db!2sComoros!5e0!3m2!1sen!2sph!4v1586768718054!5m2!1sen!2sph' },
        { country: 'Congo', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151032.510079303!2d17.233925008370733!3d-4.021144433776387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sDemocratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sph!4v1586768729143!5m2!1sen!2sph' },
        // { country: 'Cook Islands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7870788.282854859!2d-165.43354763313005!3d-15.583186680709641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71548aefb97bdedd%3A0x24ca50e8808b4d8!2sCook%20Islands!5e0!3m2!1sen!2sph!4v1586768754502!5m2!1sen!2sph' },
        { country: 'Costa Rica', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4042248.3052289756!2d-87.05265107512933!3d8.351571412887745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f92e56221acc925%3A0x6254f72535819a2b!2sCosta%20Rica!5e0!3m2!1sen!2sph!4v1586768766022!5m2!1sen!2sph' },
        // { country: 'CAte dIvoire', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4050984.7828181526!2d-7.791558169594305!3d7.460846162801732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf961387b049a067%3A0x1f91e627cb9ee40!2sC%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sen!2sph!4v1586768777094!5m2!1sen!2sph' },
        { country: 'Croatia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917793.299573969!2d14.163910464997034!3d44.42480226033378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133441080add95ed%3A0xa0f3c024e1661b7f!2sCroatia!5e0!3m2!1sen!2sph!4v1586768794808!5m2!1sen!2sph' },
        { country: 'Cuba', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801282.94917029!2d-81.80667108903046!3d21.50026167036469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd49070f7a4cb5%3A0x798cf7529110a41a!2sCuba!5e0!3m2!1sen!2sph!4v1586768803758!5m2!1sen!2sph' },
        { country: 'Curaçao', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249573.771668569!2d-69.07308452807037!3d12.208264555614582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e849dbe62c7fdc7%3A0xfc7f9228dbc64723!2zQ3VyYcOnYW8!5e0!3m2!1sen!2sph!4v1586768813975!5m2!1sen!2sph' },
        { country: 'Cyprus', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834960.2135366292!2d32.86478111757351!3d35.16750950893226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1767ca494d55%3A0x324c3c807fc4146e!2sCyprus!5e0!3m2!1sen!2sph!4v1586768824607!5m2!1sen!2sph' },
        { country: 'Czechia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258953.856959889!2d14.940932525881255!3d48.854810098826704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948fd7dd8243%3A0xf8661c75d3db586f!2sCzechia!5e0!3m2!1sen!2sph!4v1586768839950!5m2!1sen!2sph' },
        { country: 'Denmark', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2272205.8199713156!2d9.300638795341701!3d56.209805581374866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b27b6ee945ffb%3A0x528743d0c3e092cd!2sDenmark!5e0!3m2!1sen!2sph!4v1586768852311!5m2!1sen!2sph' },
        { country: 'Diamond Princess', iframe: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58233254.46858501!2d-23.69270289074151!3d27.021450073915105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDiamond%20Princess!5e0!3m2!1sen!2sph!4v1586768868277!5m2!1sen!2sph' },
        { country: 'Djibouti', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999762.1795168365!2d42.06692341531701!3d11.812775826370391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1622d46734f9f601%3A0x1472bba7ef0f5b88!2sDjibouti!5e0!3m2!1sen!2sph!4v1586768882166!5m2!1sen!2sph' },
        { country: 'Dominica', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246149.00574995406!2d-61.49758924812915!3d15.42632933905471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c14d2faf2155a15%3A0x49b39109053afd3c!2sDominica!5e0!3m2!1sen!2sph!4v1586768893575!5m2!1sen!2sph' },
        { country: 'Dominican Republic', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935330.5990920926!2d-71.25124859532184!3d18.666572649538303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8838def1b6f5%3A0xa6020f24060df7e0!2sDominican%20Republic!5e0!3m2!1sen!2sph!4v1586768904615!5m2!1sen!2sph' },
        { country: 'DRC', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151032.510079303!2d17.233925008370733!3d-4.021144433776387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sDemocratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sph!4v1586768729143!5m2!1sen!2sph' },
        { country: 'Ecuador', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8168862.204269861!2d-88.3924588591313!3d-1.3552434993538138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902387dda89a4bd5%3A0x9d76af04119c3702!2sEcuador!5e0!3m2!1sen!2sph!4v1586768919279!5m2!1sen!2sph' },
        { country: 'Egypt', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7291197.422916493!2d26.384493938861727!3d26.835022189389335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2sph!4v1586768928644!5m2!1sen!2sph' },
        { country: 'El Salvador', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992129.4766004276!2d-89.49069813171866!3d13.748345506829203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6327a659640657%3A0x6f9a16eb98854832!2sEl%20Salvador!5e0!3m2!1sen!2sph!4v1586768940027!5m2!1sen!2sph' },
        { country: 'Equatorial Guinea', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084760.8501098957!2d6.193539533589627!3d1.143122900069105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10643a605fae87a7%3A0xc870a2a22c10de7a!2sEquatorial%20Guinea!5e0!3m2!1sen!2sph!4v1586768952607!5m2!1sen!2sph' },
        { country: 'Eritrea', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943086.0217794515!2d37.58841025581125!3d15.176460351985773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166d5a3f9dba8565%3A0x17c208f02f120efa!2sEritrea!5e0!3m2!1sen!2sph!4v1586768965767!5m2!1sen!2sph' },
        { country: 'Estonia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1063838.9211312856!2d23.811302892654258!3d58.61553407196912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949c82a04bfd%3A0x40ea9fba4fb425c3!2sEstonia!5e0!3m2!1sen!2sph!4v1586768975535!5m2!1sen!2sph' },
        { country: 'Eswatini', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913948.323067062!2d30.902339927438128!3d-26.516565994373913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee8cee147320f07%3A0xc13dc62f180d7069!2sEswatini!5e0!3m2!1sen!2sph!4v1586768985334!5m2!1sen!2sph' },
        { country: 'Ethiopia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8067818.776921494!2d36.00369007323386!3d9.121499372575611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1635d0cedd6cfd2b%3A0x7bf6a67f5348c55a!2sEthiopia!5e0!3m2!1sen!2sph!4v1586768994168!5m2!1sen!2sph' },
        { country: 'Faeroe Islands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481115.4013776702!2d-7.514703501554381!3d61.898287330618594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48bc1593762df9eb%3A0x3fb0314864f71b24!2sFaroe%20Islands!5e0!3m2!1sen!2sph!4v1586769008079!5m2!1sen!2sph' },
        { country: 'Falkland Islands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632669.8295489515!2d-60.08842881446451!3d-51.726331170362684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc2a89b94491e3a3%3A0x322aaaff8dd9c53a!2sFIQQ%201ZZ%2C%20Falkland%20Islands%20(Islas%20Malvinas)!5e0!3m2!1sen!2sph!4v1586769022560!5m2!1sen!2sph' },
        { country: 'Fiji', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916473.5469207433!2d177.21784269472573!3d-16.542184674355568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e1990fd703cdc5d%3A0x9e9c319946ef5b93!2sFiji!5e0!3m2!1sen!2sph!4v1586769031225!5m2!1sen!2sph' },
        { country: 'Finland', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003702.371298313!2d17.094490072022612!3d64.62360469830864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cadf4b32f6dd%3A0x146d63c75a810!2sFinland!5e0!3m2!1sen!2sph!4v1586769042654!5m2!1sen!2sph' },
        { country: 'France', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5662657.801135235!2d-2.4344499598606766!3d46.1314348454226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2sph!4v1586769054616!5m2!1sen!2sph' },
        { country: 'French Guiana', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4942382.204019771!2d-55.77685215872854!3d3.760737473817112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d12155785f7d753%3A0xde27f7e90f0af446!2sFrench%20Guiana!5e0!3m2!1sen!2sph!4v1586769073510!5m2!1sen!2sph' },
        { country: 'French Polynesia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15599870.538558368!2d-153.61753962868607!3d-17.33666275445473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x741875d07c6dd74d%3A0x9bc07a7a09c35711!2sFrench%20Polynesia!5e0!3m2!1sen!2sph!4v1586769110663!5m2!1sen!2sph' },
        // { country: 'French Southern Territories', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5486295.648255259!2d55.76832208832876!3d-47.82302163045151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb314c43e0409c437%3A0xb88a214c90e6d029!2sFrench%20Southern%20and%20Antarctic%20Lands!5e0!3m2!1sen!2sph!4v1586769125751!5m2!1sen!2sph' },
        { country: 'Gabon', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085043.8001818685!2d9.229900786353861!3d-0.9230372025696789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b8a5438f3ed%3A0x7b0cc30e36786b15!2sGabon!5e0!3m2!1sen!2sph!4v1586769136295!5m2!1sen!2sph' },
        { country: 'Gambia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993517.2514806802!2d-15.92934154567198!3d13.416860265747594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29c2965af3807%3A0x9e4a4c406b139d2a!2sThe%20Gambia!5e0!3m2!1sen!2sph!4v1586769145430!5m2!1sen!2sph' },
        { country: 'Georgia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1510540.9914631874!2d42.23665954354531!3d42.31532498157791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x4f907964122d4ac2!2sGeorgia!5e0!3m2!1sen!2sph!4v1586769164664!5m2!1sen!2sph' },
        { country: 'Germany', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5132291.478193746!2d5.969740399240602!3d51.08997616811747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sph!4v1586769177060!5m2!1sen!2sph' },
        { country: 'Ghana', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046814.5624932447!2d-3.274414346744753!3d7.898480341602145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd75acda8dad6c7%3A0x54d7f230d093d236!2sGhana!5e0!3m2!1sen!2sph!4v1586769187846!5m2!1sen!2sph' },
        { country: 'Gibraltar', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25780.17385842579!2d-5.370809572419809!3d36.12950797588741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cbf762714be35%3A0x384e25263600870f!2sGibraltar!5e0!3m2!1sen!2sph!4v1586769197047!5m2!1sen!2sph' },
        { country: 'Greece', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214002.508555903!2d22.238381923424896!3d38.124510468145246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b4ac711716c63%3A0x363a1775dc9a2d1d!2sGreece!5e0!3m2!1sen!2sph!4v1586769213629!5m2!1sen!2sph' },
        { country: 'Greenland', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24621636.854842484!2d-73.77322478733785!3d67.87335435186189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ea20dbbe3c07715%3A0x34cf9d830114e218!2sGreenland!5e0!3m2!1sen!2sph!4v1586769224151!5m2!1sen!2sph' },
        { country: 'Grenada', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249525.13322116772!2d-61.73038442622394!3d12.259767015506256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c381789f4877bd1%3A0x36d8c7015a1f4f8e!2sGrenada!5e0!3m2!1sen!2sph!4v1586769233583!5m2!1sen!2sph' },
        { country: 'Guadeloupe', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490544.38185875036!2d-61.67723632546988!3d16.149446616904015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e755a77287d51%3A0xecbe3e37b74a07ab!2sGuadeloupe!5e0!3m2!1sen!2sph!4v1586769244573!5m2!1sen!2sph' },
        // { country: 'Guam', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496688.64019015647!2d144.50863156936308!3d13.450657364018609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x671f76ff930f24ef%3A0x5571ae91c5b3e5a6!2sGuam!5e0!3m2!1sen!2sph!4v1586769253680!5m2!1sen!2sph' },
        { country: 'Guatemala', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4787072.093738007!2d-92.06033481426269!3d14.874555076243672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8588135036e7506b%3A0x35982b375b84d5bb!2sGuatemala!5e0!3m2!1sen!2sph!4v1586769268726!5m2!1sen!2sph' },
        // { country: 'Guernsey', iframe: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d165613.03030302198!2d-2.5597813860233924!3d49.56561556443337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGuernsey!5e0!3m2!1sen!2sph!4v1586769283809!5m2!1sen!2sph' },
        { country: 'Guinea', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4024424.973932068!2d-13.703902697186173!3d9.925419928743773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf01b321bcce953f%3A0xe8737bcbd75a2df6!2sGuinea!5e0!3m2!1sen!2sph!4v1586769296261!5m2!1sen!2sph' },
        { country: 'Guinea-Bissau', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000170.9759576882!2d-15.84966136258671!3d11.70022906363973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xee43c74af82a9f1%3A0xbbe88e3f571e084e!2sGuinea-Bissau!5e0!3m2!1sen!2sph!4v1586769306069!5m2!1sen!2sph' },
        { country: 'Guyana', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4070399.6786654717!2d-61.197052876895576!3d4.939689695222707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dafefaf60d8c2b3%3A0x48e38867b6e54440!2sGuyana!5e0!3m2!1sen!2sph!4v1586769316927!5m2!1sen!2sph' },
        { country: 'Haiti', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965546.9552122647!2d-73.67542009497406!3d19.034354909363724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb6c6f37fcbbb11%3A0xb51438b24c54f6d3!2sHaiti!5e0!3m2!1sen!2sph!4v1586769329198!5m2!1sen!2sph' },
        { country: 'Honduras', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971121.7271784109!2d-87.33050191670593!3d15.221530345585794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6a751a73b731cf%3A0x7ed1de82b6fb8264!2sHonduras!5e0!3m2!1sen!2sph!4v1586769339478!5m2!1sen!2sph' },
        { country: 'Hong Kong', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236161.63669338883!2d113.98761602994512!3d22.352663216924153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2eda332980f%3A0xf08ab3badbeac97c!2sHong%20Kong!5e0!3m2!1sen!2sph!4v1586769357998!5m2!1sen!2sph' },
        { country: 'Hungary', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388571.8015117636!2d19.222695375428994!3d46.83209033842406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741837bdf37e4c3%3A0xc4290c1e1010!2sHungary!5e0!3m2!1sen!2sph!4v1586769372622!5m2!1sen!2sph' },
        { country: 'Iceland', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479521.663661601!2d-23.727672472157302!3d64.79677545798877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2sIceland!5e0!3m2!1sen!2sph!4v1586769382496!5m2!1sen!2sph' },
        { country: 'India', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6231167.645619319!2d78.94610069653025!3d22.407273904791573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sph!4v1586769396859!5m2!1sen!2sph' },
        { country: 'Indonesia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16327777.355136244!2d108.84987287054912!3d-2.4153156957277253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sph!4v1586769405743!5m2!1sen!2sph' },
        { country: 'Iran', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6913239.54642935!2d49.192212160754885!3d32.21486605066368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef7ec2ec16b1df1%3A0x40b095d39e51face!2sIran!5e0!3m2!1sen!2sph!4v1586769420599!5m2!1sen!2sph' },
        { country: 'Iraq', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6913239.54642935!2d49.192212160754885!3d32.21486605066368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1557823d54f54a11%3A0x6da561bba2061602!2sIraq!5e0!3m2!1sen!2sph!4v1586769428990!5m2!1sen!2sph' },
        { country: 'Ireland', iframe: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2438073.2405455722!2d-10.341288998741494!3d53.36239158217047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIreland!5e0!3m2!1sen!2sph!4v1586769443336!5m2!1sen!2sph' },
        { country: 'Isle of Man', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298537.2748501276!2d-4.852310579687848!3d54.22748146071011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48638530442e81d5%3A0xea025bbcf1f0e00d!2sIsle%20of%20Man!5e0!3m2!1sen!2sph!4v1586769455383!5m2!1sen!2sph' },
        { country: 'Israel', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743596.9288186922!2d33.96071167528246!3d31.401374164977916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500492432a7c98b%3A0x6a6b422013352cba!2sIsrael!5e0!3m2!1sen!2sph!4v1586769466063!5m2!1sen!2sph' },
        { country: 'Italy', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6147752.327079778!2d8.224285013703808!3d41.20363195445585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sph!4v1586769474959!5m2!1sen!2sph' },
        { country: 'Ivory Coast', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4050984.7828181526!2d-7.791558169594305!3d7.460846162801732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf961387b049a067%3A0x1f91e627cb9ee40!2sC%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sen!2sph!4v1586769486560!5m2!1sen!2sph' },
        { country: 'Jamaica', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970747.9400390899!2d-77.8365594775599!3d18.118523576038484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eda2a1bc6cf719d%3A0x59a0d1c0b5120efa!2sJamaica!5e0!3m2!1sen!2sph!4v1586769504902!5m2!1sen!2sph' },
        { country: 'Japan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13755835.959847705!2d129.4293824565079!3d32.676514119687795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sph!4v1586764666805!5m2!1sen!2sph' },
        // { country: 'Jersey', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83404.14513879447!2d-2.2007893784253496!3d49.212328876677624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480c52a48c927533%3A0x519c23a30a1a6cc3!2sJersey!5e0!3m2!1sen!2sph!4v1586769519189!5m2!1sen!2sph' },
        { country: 'Jordan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1745939.9331460337!2d36.0015221019336!3d31.275018307990504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15006f476664de99%3A0x8d285b0751264e99!2sJordan!5e0!3m2!1sen!2sph!4v1586769528423!5m2!1sen!2sph' },
        { country: 'Kazakhstan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11008092.16739892!2d57.93913719436953!3d47.654845165342415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a91007ecfca947%3A0x5f7b842fe4b30e1b!2sKazakhstan!5e0!3m2!1sen!2sph!4v1586769550311!5m2!1sen!2sph' },
        { country: 'Kenya', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085559.1175016672!2d35.66432136285242!3d0.15444191815253225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1sen!2sph!4v1586769560751!5m2!1sen!2sph' },
        // { country: 'Kiribati', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306862.229522906!2d-177.17334818230842!3d-3.7736993912752235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65647c91c2028703%3A0x84327d040152c307!2sKiribati!5e0!3m2!1sen!2sph!4v1586769569407!5m2!1sen!2sph' },
        // { country: 'Korea', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6445753.785360583!2d123.16574532602478!3d37.92247006631645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356263108b3d1c3b%3A0x86416151fc4a3997!2sKorea!5e0!3m2!1sen!2sph!4v1586769582879!5m2!1sen!2sph' },
        { country: 'Kuwait', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890613.2910566078!2d46.97529085650937!3d29.312902708666595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5363fbeea51a1%3A0x74726bcd92d8edd2!2sKuwait!5e0!3m2!1sen!2sph!4v1586769600767!5m2!1sen!2sph' },
        { country: 'Kyrgyzstan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073997.7088565244!2d72.4968254987921!3d41.20104429675241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3897381dfce927f3%3A0x281058b74e88c433!2sKyrgyzstan!5e0!3m2!1sen!2sph!4v1586769610337!5m2!1sen!2sph' },
        { country: 'Laos', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881262.551087319!2d101.61537474343271!3d18.196341411731005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31149057b0824589%3A0xec592481f99cd81!2sLaos!5e0!3m2!1sen!2sph!4v1586769687543!5m2!1sen!2sph' },
        { country: 'Latvia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1116311.9158932846!2d23.423164413808973!3d56.8751554223348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e930677b8a9afd%3A0xcfcd68f2fc10!2sLatvia!5e0!3m2!1sen!2sph!4v1586769699231!5m2!1sen!2sph' },
        { country: 'Lebanon', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848044.5642570938!2d35.28698878128583!3d33.87228945888899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17028422aaad%3A0xcc7d34096c00f970!2sLebanon!5e0!3m2!1sen!2sph!4v1586769709063!5m2!1sen!2sph' },
        // { country: 'Lesotho', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887902.5698083244!2d27.67304125757275!3d-29.622012230620296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8c4827d65f8ceb%3A0x232d57b878d11eb3!2sLesotho!5e0!3m2!1sen!2sph!4v1586769729607!5m2!1sen!2sph' },
        { country: 'Liberia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030017.8828579795!2d-10.573666713078604!3d6.409625713316926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf09f803d4a9fcc1%3A0x7fd3286b32d16373!2sLiberia!5e0!3m2!1sen!2sph!4v1586769739479!5m2!1sen!2sph' },
        { country: 'Libya', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7325950.377926393!2d12.837544700274963!3d26.290073149474928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a892d98ece010d%3A0xfa076041c7f9c22a!2sLibya!5e0!3m2!1sen!2sph!4v1586769748287!5m2!1sen!2sph' },
        { country: 'Liechtenstein', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421791.9526622057!2d9.450726193850848!3d47.05746604719185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b31441d472ffd%3A0x60eab536dd5ab189!2sLiechtenstein!5e0!3m2!1sen!2sph!4v1586769770406!5m2!1sen!2sph' },
        { country: 'Lithuania', iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4758049.739038211!2d24.0927986!3d54.3876081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94140f33be13%3A0xf30a54d3a55dbab9!2sLithuania!5e0!3m2!1sen!2sph!4v1586769794211!5m2!1sen!2sph' },
        { country: 'Luxembourg', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d801167.2495280902!2d6.068357373227112!3d49.683491663116286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479545b9ca212147%3A0x64db60f602d392ef!2sLuxembourg!5e0!3m2!1sen!2sph!4v1586769805599!5m2!1sen!2sph' },
        { country: 'Macao', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347380.0576075101!2d113.46741964591168!3d22.237914835829006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017ae0e235c8f3%3A0xc67be32cb485acf6!2sMacao!5e0!3m2!1sen!2sph!4v1586769852423!5m2!1sen!2sph' },
        // { country: 'Macedonia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790101.9012313085!2d19.98023974874909!3d40.07467847475628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354159f70bc4809%3A0xe0f25ad6c81fc5b1!2sNorth%20Macedonia!5e0!3m2!1sen!2sph!4v1586769907910!5m2!1sen!2sph' },
        { country: 'Madagascar', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7736498.235978929!2d42.37341170249785!3d-18.77197465492333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21d1a4e3ea238545%3A0x5244e3c1977b1388!2sMadagascar!5e0!3m2!1sen!2sph!4v1586769920447!5m2!1sen!2sph' },
        { country: 'Malawi', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976999.6227345797!2d32.051636289392384!3d-13.238573444786295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d85bdd9313c0d7%3A0x44a32e1729668543!2sMalawi!5e0!3m2!1sen!2sph!4v1586769935079!5m2!1sen!2sph' },
        { country: 'Malaysia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8149950.359100514!2d105.122072418033!3d4.127936160834179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2sph!4v1586769945398!5m2!1sen!2sph' },
        { country: 'Maldives', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4079557.8919898076!2d70.99630318504327!3d3.109716285527192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2sph!4v1586769957759!5m2!1sen!2sph' },
        { country: 'Mali', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7791944.538958076!2d-8.480961448106951!3d17.52371643500621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe143e881b1073cf%3A0xbb3a5be2a0bdcf80!2sMali!5e0!3m2!1sen!2sph!4v1586769969943!5m2!1sen!2sph' },
        { country: 'Malta', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206732.03744124933!2d14.23826713653612!3d35.942368621531756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45281d8647c5%3A0xf582d86136be4239!2sMalta!5e0!3m2!1sen!2sph!4v1586769982615!5m2!1sen!2sph' },
        // { country: 'Marshall Islands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8057653.270345238!2d161.73297839653964!3d9.560657442851868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x650119b22129ca2b%3A0x8b3e03e8aa09b776!2sMarshall%20Islands!5e0!3m2!1sen!2sph!4v1586769994840!5m2!1sen!2sph' },
        { country: 'Martinique', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247064.66928118846!2d-61.15385918285608!3d14.634047688480592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c6aa0f90066070d%3A0xe1001b1217afe7b0!2sMartinique!5e0!3m2!1sen!2sph!4v1586770005014!5m2!1sen!2sph' },
        { country: 'Mauritania', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7630487.265678577!2d-15.444810539176604!3d20.95958754406688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe80b8c314b3394f%3A0x83220bebd6be534e!2sMauritania!5e0!3m2!1sen!2sph!4v1586770013351!5m2!1sen!2sph' },
        { country: 'Mauritius', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917103.2325527247!2d56.55431509837503!3d-20.203094164167553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c504df94474c9%3A0x4203d9c2116bd031!2sMauritius!5e0!3m2!1sen!2sph!4v1586770023791!5m2!1sen!2sph' },
        { country: 'Mayotte', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248996.36839113184!2d45.01569824384777!3d-12.806512835299058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x220a0e33dcf28dbb%3A0xff32176795fe2a4b!2sMayotte!5e0!3m2!1sen!2sph!4v1586770036775!5m2!1sen!2sph' },
        { country: 'Mexico', iframe: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15010185.501805745!2d-111.63860563483796!3d23.29412247499804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMexico!5e0!3m2!1sen!2sph!4v1586770049740!5m2!1sen!2sph' },
        // { country: 'Micronesia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8137525.370781003!2d145.7241646021766!3d5.199486381697336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65d9b5c5ac58c813%3A0x547a8dcdfaa46525!2sFederated%20States%20of%20Micronesia!5e0!3m2!1sen!2sph!4v1586770064256!5m2!1sen!2sph' },
        { country: 'Moldova', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429920.3944727755!2d25.93866317650119!3d46.17271339398013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x258119acdf53accb!2sMoldova!5e0!3m2!1sen!2sph!4v1586770080671!5m2!1sen!2sph' },
        { country: 'Monaco', iframe: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d23061.48776799102!2d7.408342889496167!3d43.737850063569894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMonaco!5e0!3m2!1sen!2sph!4v1586770093423!5m2!1sen!2sph' },
        { country: 'Mongolia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11246534.586534802!2d94.86487172220801!3d46.513336285691274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3627050669aa6d4b%3A0xe0dd213937e6e096!2sMongolia!5e0!3m2!1sen!2sph!4v1586770103128!5m2!1sen!2sph' },
        { country: 'Montenegro', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750723.3483448944!2d18.832955318696367!3d42.69285560513636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c3217242c1fcb%3A0x384c9d866effd346!2sMontenegro!5e0!3m2!1sen!2sph!4v1586770114088!5m2!1sen!2sph' },
        { country: 'Montserrat', iframe: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31000518.781556524!2d-57.844836171672625!3d18.472648321862575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMontserrat!5e0!3m2!1sen!2sph!4v1586770130257!5m2!1sen!2sph' },
        { country: 'Morocco', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6949756.595848143!2d-11.64284054276977!3d31.73130257874105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sMorocco!5e0!3m2!1sen!2sph!4v1586770146871!5m2!1sen!2sph' },
        { country: 'Mozambique', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7745572.618605459!2d31.31119068310238!3d-18.573232615946672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d4aceae6fd4ac5%3A0x12bbbfb9ae16a115!2sMozambique!5e0!3m2!1sen!2sph!4v1586770158503!5m2!1sen!2sph' },
        { country: 'MS Zaandam', iframe: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1532309.1925665752!2d5.272728724412243!3d51.7762674239885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sms%20mode%20near%20Zaandam%2C%20Netherlands!5e0!3m2!1sen!2sph!4v1586770184881!5m2!1sen!2sph' },
        { country: 'Myanmar', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15470252.662842436!2d87.64131951595395!3d18.80184504929934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305652a7714e2907%3A0xba7b0ee41c622b11!2sMyanmar%20(Burma)!5e0!3m2!1sen!2sph!4v1586770194504!5m2!1sen!2sph' },
        { country: 'Namibia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7526933.294985703!2d13.872390193132349!3d-22.903764340440908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bf53c7e6ed37521%3A0xd3b9e5a5a8ecb261!2sNamibia!5e0!3m2!1sen!2sph!4v1586771218712!5m2!1sen!2sph' },
        // { country: 'Nauru', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917.191374599708!2d166.917643400638!3d-0.5279799253469839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f7d1c1f1de45b4d%3A0x59d99df4c5d40a81!2sNauru!5e0!3m2!1sen!2sph!4v1586771227336!5m2!1sen!2sph' },
        { country: 'Nepal', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594581.0449015023!2d81.88675201703386!3d28.379006968986555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e8c77d2e68cf%3A0x34a29abcd0cc86de!2sNepal!5e0!3m2!1sen!2sph!4v1586771237840!5m2!1sen!2sph' },
        { country: 'Netherlands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251822.1183735023!2d4.1584790601505714!3d52.20768216643053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sNetherlands!5e0!3m2!1sen!2sph!4v1586771246320!5m2!1sen!2sph' },
        // { country: 'Netherlands Antilles', iframe: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5017470.345169228!2d0.7953442814411902!3d52.11728066025083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNetherlands%20Antilles!5e0!3m2!1sen!2sph!4v1586771260523!5m2!1sen!2sph' },
        { country: 'New Caledonia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1904508.1222090803!2d164.72293723554242!3d-21.202388746275044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c27e2693f1a32cb%3A0xf6d0f68fd5937aec!2sNew%20Caledonia!5e0!3m2!1sen!2sph!4v1586771271256!5m2!1sen!2sph' },
        { country: 'New Zealand', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12435942.819149265!2d166.32767275645605!3d-40.45050633449732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNew%20Zealand!5e0!3m2!1sen!2sph!4v1586771281416!5m2!1sen!2sph' },
        { country: 'Nicaragua', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991495.6721569386!2d-86.13892060093659!3d12.866513948363576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f10c200ceff22cd%3A0xc8faa7e53fac15b5!2sNicaragua!5e0!3m2!1sen!2sph!4v1586771292720!5m2!1sen!2sph' },
        { country: 'Niger', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7790983.182859603!2d3.5858996102744305!3d17.546090445943083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1199ec7ac6a1af5d%3A0xc933920a158e24d4!2sNiger!5e0!3m2!1sen!2sph!4v1586771307489!5m2!1sen!2sph' },
        { country: 'Nigeria', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7790983.182859603!2d3.5858996102744305!3d17.546090445943083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sph!4v1586771316488!5m2!1sen!2sph' },
        // { country: 'Niue', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120679.02531791289!2d-169.9322446505541!3d-19.05408269012793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x719d252a376eb73b%3A0x914278347bdc8b18!2sNiue!5e0!3m2!1sen!2sph!4v1586771327792!5m2!1sen!2sph' },
        { country: 'North Macedonia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1539028.0279956963!2d21.11498764357682!3d41.11456668567945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354159f70bc4809%3A0xe0f25ad6c81fc5b1!2sNorth%20Macedonia!5e0!3m2!1sen!2sph!4v1586771337128!5m2!1sen!2sph' },
        // { country: 'Norfolk Island', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111595.86602841824!2d167.88594051405502!3d-29.06518552210439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c4bd11fadbac939%3A0xb97a9823335d1552!2sNorfolk%20Island!5e0!3m2!1sen!2sph!4v1586771349678!5m2!1sen!2sph' },
        // { country: 'Northern Mariana Islands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900693.8519489304!2d143.2426444599656!3d17.302452507022394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x66d8b13490995c51%3A0x9db7ebab7c3a0e32!2sNorthern%20Mariana%20Islands!5e0!3m2!1sen!2sph!4v1586771358120!5m2!1sen!2sph' },
        { country: 'Norway', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7090384.715269237!2d8.781961515624394!3d64.2867715969531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461268458f4de5bf%3A0xa1b03b9db864d02b!2sNorway!5e0!3m2!1sen!2sph!4v1586771367551!5m2!1sen!2sph' },
        { country: 'Oman', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7608487.414701565!2d51.65831624459302!3d21.386685708826757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd69f66a9d59bbf%3A0x3a064c7665b1a817!2sOman!5e0!3m2!1sen!2sph!4v1586771378529!5m2!1sen!2sph' },
        { country: 'Pakistan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7056190.890402622!2d64.85669290382772!3d30.282509808000064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2sph!4v1586771385927!5m2!1sen!2sph' },
        // { country: 'Palau', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4067207.146838927!2d130.80016409425264!3d5.434890882725277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328445b4a2af0399%3A0x12ed1edd39a1ebbb!2sPalau!5e0!3m2!1sen!2sph!4v1586771393217!5m2!1sen!2sph' },
        { country: 'Palestine', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867278.5736018345!2d34.33165130738049!3d31.884666125237786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cf2d28866bdd9%3A0xee17a001d166f686!2sPalestine!5e0!3m2!1sen!2sph!4v1586771401497!5m2!1sen!2sph' },
        { country: 'Panama', iframe: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2020996.848007576!2d-81.22659941727463!3d8.376118718793107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPanama!5e0!3m2!1sen!2sph!4v1586771418535!5m2!1sen!2sph' },
        { country: 'Papua New Guinea', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8120909.2580430135!2d145.90549028117243!3d-6.356790400543347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6859e8afbf0e9eaf%3A0xdaf0e50d8e9c127a!2sPapua%20New%20Guinea!5e0!3m2!1sen!2sph!4v1586771427072!5m2!1sen!2sph' },
        { country: 'Paraguay', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749025.193941617!2d-60.69235824234561!3d-23.418680085642734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945c083490f13d63%3A0xb3faff611d582ef3!2sParaguay!5e0!3m2!1sen!2sph!4v1586771435504!5m2!1sen!2sph' },
        { country: 'Peru', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8065680.741213279!2d-79.51520980630526!3d-9.215586872879252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850c05914f5%3A0xf29e011279210648!2sPeru!5e0!3m2!1sen!2sph!4v1586771443944!5m2!1sen!2sph' },
        { country: 'Philippines', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8002447.55605693!2d118.12634250344458!3d11.662835410555465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324053215f87de63%3A0x784790ef7a29da57!2sPhilippines!5e0!3m2!1sen!2sph!4v1586763984603!5m2!1sen!2sph' },
        // { country: 'Pitcairn', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859136.2883332616!2d-128.85507468333435!3d-24.4811059159072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e380f7fdca8078b%3A0x469c8cc719159ac8!2sPitcairn%20Islands!5e0!3m2!1sen!2sph!4v1586771455087!5m2!1sen!2sph' },
        { country: 'Poland', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519124.335578698!2d16.892258181146182!3d51.93245129666297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47009964a4640bbb%3A0x97573ca49cc55ea!2sPoland!5e0!3m2!1sen!2sph!4v1586771463128!5m2!1sen!2sph' },
        { country: 'Portugal', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519124.335578698!2d16.892258181146182!3d51.93245129666297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb32242dbf4226d5%3A0x2ab84b091c4ef041!2sPortugal!5e0!3m2!1sen!2sph!4v1586771470391!5m2!1sen!2sph' },
        // { country: 'Puerto Rico', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970252.555283432!2d-67.14632193391006!3d18.20766989030548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0296261b92a7f9%3A0xf336ec2818049b1a!2sPuerto%20Rico!5e0!3m2!1sen!2sph!4v1586771478984!5m2!1sen!2sph' },
        { country: 'Qatar', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923095.8093798283!2d50.657314972734675!3d25.343048656451906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sQatar!5e0!3m2!1sen!2sph!4v1586771487568!5m2!1sen!2sph' },
        { country: 'Réunion', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238171.51092411074!2d55.38722155396416!3d-21.135284906496587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2178778110b8e43b%3A0x4a7f8e89ecdbeaf9!2zUsOpdW5pb24!5e0!3m2!1sen!2sph!4v1586771495993!5m2!1sen!2sph' },
        { country: 'Romania', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842180.7396420916!2d22.777600865334144!3d45.91996374376005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff26958976c3%3A0x84ef4f92a804b194!2sRomania!5e0!3m2!1sen!2sph!4v1586771506408!5m2!1sen!2sph' },
        { country: 'Russia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13530485.578643277!2d83.11057845034257!3d59.87631699293648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2sph!4v1586771524881!5m2!1sen!2sph' },
        { country: 'Rwanda', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020805.9008159091!2d29.31998234382248!3d-1.9435638347563577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c29654e73840e3%3A0x7490b026cbcca103!2sRwanda!5e0!3m2!1sen!2sph!4v1586771532554!5m2!1sen!2sph' },
        // { country: 'St Helena', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61376.80474292444!2d-5.75042195580312!3d-15.958749620930835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4eae213352ce5e3%3A0xae804f0450199fa6!2sSaint%20Helena%2C%20STHL%201ZZ%2C%20St%20Helena%2C%20Ascension%20and%20Tristan%20da%20Cunha!5e0!3m2!1sen!2sph!4v1586772179235!5m2!1sen!2sph' },
        { country: 'Saint Kitts and Nevis', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243863.38183953194!2d-62.83668421149288!3d17.249551052968346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c12196ec68a720d%3A0xdee99ac69a1d86e8!2sSt%20Kitts%20%26%20Nevis!5e0!3m2!1sen!2sph!4v1586772188241!5m2!1sen!2sph' },
        { country: 'Saint Lucia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247857.14989740986!2d-61.110600612920074!3d13.91281283200881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c406065f12da31d%3A0x6e7486c4e8399df5!2sSt%20Lucia!5e0!3m2!1sen!2sph!4v1586772195665!5m2!1sen!2sph' },
        { country: 'Saint Martin', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60681.296237230046!2d-63.09716954962435!3d18.090941041026547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e6fac08714efd%3A0xb919830a4e6e88a7!2sSt%20Martin!5e0!3m2!1sen!2sph!4v1586772210678!5m2!1sen!2sph' },
        { country: 'Saint Pierre Miquelon', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348569.9390675392!2d-56.53307492384006!3d46.957708286134306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b6c4b4bfb0e57d1%3A0x9c716737ea6c5c11!2sSt%20Pierre%20and%20Miquelon!5e0!3m2!1sen!2sph!4v1586772221714!5m2!1sen!2sph' },
        // { country: 'Samoa', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496057.7059922801!2d-172.38312327871807!3d-13.751664863008495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71a513a364ec1003%3A0xa6870c9674617872!2sSamoa!5e0!3m2!1sen!2sph!4v1586772233827!5m2!1sen!2sph' },
        { country: 'San Marino', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45964.753639282455!2d12.425073930749557!3d43.94287260266914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ceb5ff5e63f79%3A0xf39982342010!2sSan%20Marino!5e0!3m2!1sen!2sph!4v1586772245873!5m2!1sen!2sph' },
        { country: 'Sao Tome and Principe', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021267.8741209691!2d6.43303075528163!3d0.8986029148817402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1070ecf90b9ad889%3A0x6251230c557630ea!2zU8OjbyBUb23DqSBhbmQgUHLDrW5jaXBl!5e0!3m2!1sen!2sph!4v1586772262559!5m2!1sen!2sph' },
        { country: 'Saudi Arabia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7463942.235593503!2d40.58103176003021!3d24.013319783097934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sph!4v1586772272569!5m2!1sen!2sph' },
        { country: 'Senegal', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977931.0336968212!2d-15.63809814866437!3d14.476272942578786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0x5a46a55099615940!2sSenegal!5e0!3m2!1sen!2sph!4v1586772287850!5m2!1sen!2sph' },
        { country: 'Serbia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929546.715403666!2d18.67983648411074!3d44.188826548639234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47571ddff2898095%3A0x55e50ea3723865d!2sSerbia!5e0!3m2!1sen!2sph!4v1586772299160!5m2!1sen!2sph' },
        { country: 'Seychelles', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4054377.523834199!2d48.94403144043212!3d-7.085007571671215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x225c21fd70bead3b%3A0x32d3d0a0d349daf7!2sSeychelles!5e0!3m2!1sen!2sph!4v1586772309352!5m2!1sen!2sph' },
        { country: 'Sierra Leone', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020764.7105786526!2d-12.958726204269537!3d8.420697346278997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0106183aabf343%3A0x5369e9cdc72cf719!2sSierra%20Leone!5e0!3m2!1sen!2sph!4v1586772318914!5m2!1sen!2sph' },
        { country: 'Singapore', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.22544734867!2d103.70416535504349!3d1.3139961240117672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sph!4v1586772327857!5m2!1sen!2sph' },
        { country: 'Sint Maarten', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60702.64543106589!2d-63.09411939981399!3d18.02913220035236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e6e62d6f890c3%3A0x728b2cc226338f42!2sSint%20Maarten!5e0!3m2!1sen!2sph!4v1586772336995!5m2!1sen!2sph' },
        { country: 'Slovakia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1349125.317361639!2d18.57858986685984!3d48.66704411482259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471460b9ae7cc67f%3A0xcd6b6167b1723a7d!2sSlovakia!5e0!3m2!1sen!2sph!4v1586772346609!5m2!1sen!2sph' },
        { country: 'Slovenia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1349125.317361639!2d18.57858986685984!3d48.66704411482259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476524e75e968361%3A0xe740451e25e2d465!2sSlovenia!5e0!3m2!1sen!2sph!4v1586772358016!5m2!1sen!2sph' },
        // { country: 'Solomon Islands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4031038.5862052483!2d159.3278224478731!3d-9.37204825211989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68d351e0555009d1%3A0xb44cc0a017442980!2sSolomon%20Islands!5e0!3m2!1sen!2sph!4v1586772369450!5m2!1sen!2sph' },
        { country: 'Somalia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8137116.290771322!2d41.80806860575134!3d5.231043254863465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x181d2ea7ecd15b83%3A0x9e393ace5ce9e5be!2sSomalia!5e0!3m2!1sen!2sph!4v1586772379025!5m2!1sen!2sph' },
        { country: 'South Africa', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13500744.891921377!2d18.255277577808734!3d-34.29749781503778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2sph!4v1586772391536!5m2!1sen!2sph' },
        { country: 'S. Korea', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313735.796400655!2d125.63025920361845!3d35.79821201861095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356455ebcb11ba9b%3A0x91249b00ba88db4b!2sSouth%20Korea!5e0!3m2!1sen!2sph!4v1586772406649!5m2!1sen!2sph' },
        { country: 'South Sudan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047222.591058136!2d27.450915133690092!3d7.856730224645315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171930b53d3e3119%3A0xdbf043637eb6bc97!2sSouth%20Sudan!5e0!3m2!1sen!2sph!4v1586772416331!5m2!1sen!2sph' },
        { country: 'Spain', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6248286.22657157!2d-8.201245152747768!3d40.121763790735606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e0!3m2!1sen!2sph!4v1586772428625!5m2!1sen!2sph' },
        { country: 'Sri Lanka', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2023613.8831856844!2d79.5850138083583!3d7.856199262613817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sph!4v1586772446649!5m2!1sen!2sph' },
        { country: 'St. Barth', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60739.4319179419!2d-62.90646940014075!3d17.92214686652913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e75542afee89d%3A0x174116bea2a75e6!2sSt%20Barth%C3%A9lemy!5e0!3m2!1sen!2sph!4v1586772457153!5m2!1sen!2sph' },
        { country: 'St. Vincent Grenadines', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497664.8374681216!2d-61.56358691098732!3d12.971432945412781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c40ace29e3935bb%3A0x31fdd3e88dd2a1b1!2sSt%20Vincent%20and%20the%20Grenadines!5e0!3m2!1sen!2sph!4v1586772466970!5m2!1sen!2sph' },
        { country: 'Sudan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7864753.876104775!2d25.759416886672565!3d15.739928093776358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15d91cc41072b195%3A0xd2bf70462a612b37!2sSudan!5e0!3m2!1sen!2sph!4v1586772480017!5m2!1sen!2sph' },
        { country: 'Suriname', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037853.80485566!2d-57.12794608826706!3d3.982692675919143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d0836d5d9d3d551%3A0x1037e1c0712936b2!2sSuriname!5e0!3m2!1sen!2sph!4v1586772491061!5m2!1sen!2sph' },
        // { country: 'Swaziland', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913948.323067062!2d30.902339927438128!3d-26.516565994373913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee8cee147320f07%3A0xc13dc62f180d7069!2sEswatini!5e0!3m2!1sen!2sph!4v1586772499858!5m2!1sen!2sph' },
        { country: 'Sweden', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7737049.479631667!2d8.445305135749221!3d61.74236023089161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465cb2396d35f0f1%3A0x22b8eba28dad6f62!2sSweden!5e0!3m2!1sen!2sph!4v1586772514233!5m2!1sen!2sph' },
        { country: 'Switzerland', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398183.3821558629!2d7.103258180955698!3d46.80771523573807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2sph!4v1586772522833!5m2!1sen!2sph' },
        { country: 'Syria', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355096.5131922723!2d36.75941217715588!3d34.79433101251291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x877546f4882af620!2sSyria!5e0!3m2!1sen!2sph!4v1586772532240!5m2!1sen!2sph' },
        { country: 'Taiwan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747577.9329082943!2d117.84070143661171!3d23.469694277614717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ef3065c07572f%3A0xe711f004bf9c5469!2sTaiwan!5e0!3m2!1sen!2sph!4v1586771206424!5m2!1sen!2sph' },
        // { country: 'Tajikistan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182401.2203083253!2d69.00510468886908!3d38.836727445509275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b176737abcb3cd%3A0x25c331844f1988b5!2sTajikistan!5e0!3m2!1sen!2sph!4v1586771198775!5m2!1sen!2sph' },
        { country: 'Tanzania', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8120963.156845436!2d30.493955237345798!3d-6.3533760278499285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184b51314869a111%3A0x885a17314bc1c430!2sTanzania!5e0!3m2!1sen!2sph!4v1586771190728!5m2!1sen!2sph' },
        { country: 'Thailand', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7961710.860053035!2d96.99487402238593!3d13.000345002626256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sph!4v1586771182378!5m2!1sen!2sph' },
        { country: 'Timor-Leste', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1009400.1903520253!2d125.1685985763175!3d-8.788936126951256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cfde50986e4a129%3A0x3e5c68387e85b3c!2sTimor-Leste!5e0!3m2!1sen!2sph!4v1586771173215!5m2!1sen!2sph' },
        { country: 'Togo', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4039595.681608941!2d-1.4115646757641602!3d8.603904409849115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0xfaae5b301ad19360!2sTogo!5e0!3m2!1sen!2sph!4v1586771161879!5m2!1sen!2sph' },
        // { country: 'Tokelau', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504459.41956692166!2d-172.1578578209276!3d-8.963926707745774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x705226aab3781df7%3A0x8f7062466ddb9b37!2sTokelau!5e0!3m2!1sen!2sph!4v1586771151264!5m2!1sen!2sph' },
        // { country: 'Tonga', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872002.288379076!2d-176.84947956353534!3d-18.607721288648165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7193b644bb9fd01d%3A0xf36dcccac55ee2a9!2sTonga!5e0!3m2!1sen!2sph!4v1586771140434!5m2!1sen!2sph' },
        { country: 'Trinidad and Tobago', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1003646.8882900052!2d-61.77215032533458!3d10.696200122026621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3607976350b6c5%3A0xff082855c639f127!2sTrinidad%20and%20Tobago!5e0!3m2!1sen!2sph!4v1586771127368!5m2!1sen!2sph' },
        { country: 'Tunisia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392601.3292010003!2d7.317624643837976!3d33.86164260968787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2sph!4v1586771117672!5m2!1sen!2sph' },
        { country: 'Turkey', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6350036.439926473!2d30.68914821436243!3d39.00153944322971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sph!4v1586771110208!5m2!1sen!2sph' },
        // { country: 'Turkmenistan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177673.440983482!2d57.26925272557512!3d38.94233405104588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f65cb5574bc6ccb%3A0x7edd826b4169a491!2sTurkmenistan!5e0!3m2!1sen!2sph!4v1586771101224!5m2!1sen!2sph' },
        { country: 'Turks and Caicos', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d474920.47704598936!2d-72.07028499529441!3d21.573576095860147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x894b5f55bebb6b75%3A0x7e11c780028dc1de!2sTKCA%201ZZ%2C%20Turks%20and%20Caicos%20Islands!5e0!3m2!1sen!2sph!4v1586771088864!5m2!1sen!2sph' },
        // { country: 'Tuvalu', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4042746.3158914847!2d175.53675993017603!3d-8.303349062806417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6fc19cb959b1a04d%3A0x8f6754680707122e!2sTuvalu!5e0!3m2!1sen!2sph!4v1586771080023!5m2!1sen!2sph' },
        { country: 'UAE', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11235129.366511814!2d56.3724480080939!3d20.686622417357334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sph!4v1586771068864!5m2!1sen!2sph' },
        { country: 'Uganda', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084411.0081204856!2d30.059180924712035!3d1.3671062615923657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a69f6499f945%3A0x874155ce43014549!2sUganda!5e0!3m2!1sen!2sph!4v1586771052584!5m2!1sen!2sph' },
        { country: 'UK', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9555154.133694995!2d-13.423733694281099!3d54.219005672917945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sph!4v1586771044736!5m2!1sen!2sph' },
        { country: 'Ukraine', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5441167.525573569!2d26.693423847968916!3d48.248590787950505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2sUkraine!5e0!3m2!1sen!2sph!4v1586771035328!5m2!1sen!2sph' },
        { country: 'Uruguay', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441879.7610359318!2d-58.02784625338531!3d-32.60056782203715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575073afb5fde09%3A0x4a5596616016524a!2sUruguay!5e0!3m2!1sen!2sph!4v1586771025888!5m2!1sen!2sph' },
        { country: 'USA', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13007082.7164567!2d-104.65480953673993!3d37.25820965365812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sph!4v1586771017366!5m2!1sen!2sph' },
        // { country: 'United States Minor Outlying Islands', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866339.713846462!2d174.27122562376263!3d13.861948146389349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x647aa503b7b60f05%3A0x4e12dafc3713610!2sUnited%20States%20Minor%20Outlying%20Islands!5e0!3m2!1sen!2sph!4v1586770993625!5m2!1sen!2sph' },
        { country: 'Uzbekistan', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6138489.49972476!2d60.08451232250029!3d41.30213394622903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sUzbekistan!5e0!3m2!1sen!2sph!4v1586770981241!5m2!1sen!2sph' },
        // { country: 'Vanuatu', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914207.855298198!2d166.03636270962463!3d-16.653417706659503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e89605ec8926013%3A0x348339cfbed0266a!2sVanuatu!5e0!3m2!1sen!2sph!4v1586770972690!5m2!1sen!2sph' },
        { country: 'Vatican City', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14400.153976786713!2d12.44462421964139!3d41.90296688582676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325890a57d42d3d%3A0x94f9ab23a7eb0!2s00120%20Vatican%20City!5e0!3m2!1sen!2sph!4v1586770963431!5m2!1sen!2sph' },
        { country: 'Venezuela', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8116210.454678434!2d-71.11157033384966!3d6.647740069205115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2853cb36cbd801%3A0xdca0f2587cd54dd3!2sVenezuela!5e0!3m2!1sen!2sph!4v1586770944937!5m2!1sen!2sph' },
        { country: 'Vietnam', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281305.4111876395!2d107.68195247855904!3d13.17642670933262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2sph!4v1586770935375!5m2!1sen!2sph' },
        { country: 'Western Sahara', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730517.716600789!2d-15.306276546906348!3d24.06335660008644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc22482523302153%3A0xb7a6f81873dfd75a!2sWestern%20Sahara!5e0!3m2!1sen!2sph!4v1586770919568!5m2!1sen!2sph' },
        // { country: 'Yemen', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939022.82024568!2d45.95017372697113!3d15.39261856315227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603dbac7c34bc5f%3A0x92f129377eae77ae!2sYemen!5e0!3m2!1sen!2sph!4v1586770910893!5m2!1sen!2sph' },
        { country: 'Zambia', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7958805.730399371!2d23.358313439223753!3d-13.090590799553858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f4a5fcfc0b71%3A0xf19ff9ac7e583e45!2sZambia!5e0!3m2!1sen!2sph!4v1586770900695!5m2!1sen!2sph' },
        { country: 'Zimbabwe', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863058.4653529394!2d26.908911161715075!3d-18.99688135824424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b17161%3A0xa1c0385fc5cbbfee!2sZimbabwe!5e0!3m2!1sen!2sph!4v1586770888849!5m2!1sen!2sph' },
      ],
      newiframe: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56963097.264944725!2d4.4762787211041495!3d29.37756327386773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1586765065914!5m2!1sen!2sph'
    }
  // }

  // displayMarkers = () => {
  //   var zz = this.state.data.filter(cc => {
  //     return cc.country.toLowerCase() === this.props.newssscountry.toLowerCase()
  //   })
  //   var regions = [ 'world', 'africa', 'asia', 'oceania', 'north america', 'south america', 'europe' ];
  //   var checkRegion = (regions.indexOf(this.props.newssscountry) > -1);
  //   if ( !checkRegion ) {
  //     return zz.map(rr => {
  //       return <Marker key={rr.country} position={{
  //         lat: rr.latitude,
  //         lng: rr.longitude
  //       }}
  //       onClick={() => console.log("You clicked " + rr.country + ' | lat: ' + rr.latitude + ' | long: ' + rr.longitude)} />
  //     })
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.newssscountry !== this.props.newssscountry) {
  //     var nzz = this.state.data.filter(ncc => {
  //       return ncc.country.toLowerCase() === this.props.newssscountry.toLowerCase()
  //     })
  //     nzz.map(nrr => {
  //       this.setState({ newcoor: { lat: nrr.latitude, lng: nrr.longitude  } }, function() {
  //         console.log(this.state.newcoor)
  //       })
  //     })
  //   }
  // }

  // checkRegionCenter(region) {
  //   switch ( region.toLowerCase() ) {
  //     case 'world':
  //       return {lat: "0", lng: "0"}
  //     case 'africa':
  //       return {lat: "-8.78", lng: "34.5"}
  //     case 'asia':
  //       return {lat: "34.04", lng: "100.61"}
  //     case 'europe':
  //       return {lat: "54.52", lng: "15.25"}
  //     case 'oceania':
  //       return {lat: "-22.73", lng: "140.01"}
  //     case 'north america':
  //       return {lat: "54.52", lng: "-105.25"}
  //     case 'south america':
  //       return {lat: "-8.78", lng: "-55.49"}
  //     default: 
  //       return this.state.newcoor
  //   }
  // }

  // checkRegionZoom(regionZoom) {
  //   switch ( regionZoom.toLowerCase() ) {
  //     case 'world': return 2
  //     case 'africa': return 3
  //     case 'asia': return 3
  //     case 'europe': return 3
  //     case 'oceania': return 3
  //     case 'north america': return 3
  //     case 'south america': return 3
  //     default: return 4
  //   }
  // }

   componentDidUpdate(prevProps) {
    if (prevProps.newssscountry !== this.props.newssscountry) {
      var nzz = this.state.data.filter(ncc => {
        return ncc.country.toLowerCase() === this.props.newssscountry.toLowerCase()
      })
      nzz.map(nrr => {
        this.setState({ newiframe: nrr.iframe }, function() {
          console.log(this.state.newiframe)
        })
      })
    }
  }

  render() {
    return (
        // <div>
        <div className="map_con" id="map_id">
          {/* <Map
            google={this.props.google}
            zoom={ this.checkRegionZoom(this.props.newssscountry) }
            style={{width:'100%', height: '100%', position: 'relative'}}
            center={ this.checkRegionCenter(this.props.newssscountry) }
          >
            {this.displayMarkers()}
          </Map> */}
          <iframe src={this.state.newiframe}></iframe>
        </div>
    )
  }
}

export default MapContainer;
  
// export default GoogleApiWrapper({
//     apiKey:"xybnasd"
// })(MapContainer);
  