import React, { Component } from 'react';
import { connect } from 'react-redux'; // connects redux state and actions to component props
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
	constructor( props ) {
		super( props );
		this.state = {  }; // set initial state
	}
	
	renderWeather( cityWeatherData ) {
		const temps = cityWeatherData.list.map( weather => ( 9 / 5 * ( weather.main.temp - 273 ) + 32 ) );
		const pressures = cityWeatherData.list.map( weather => weather.main.pressure );
		const humidities = cityWeatherData.list.map( weather => weather.main.humidity );
		
		return (
			<tr key={ cityWeatherData.city.id }>
				<td><GoogleMap lat={ cityWeatherData.city.coord.lat } lon={ cityWeatherData.city.coord.lon } /></td>
				<td><Chart data={ temps } color="red" units="F" /></td>
				<td><Chart data={ pressures } color="green" units="hPa" /></td>
				<td><Chart data={ humidities } color="blue" units="%" /></td>
			</tr>
		);
	}
	
	render() {
		// arrays get printed as lists
		// map runs renderWeather on each weather array item, returns result
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map( this.renderWeather ) }
				</tbody>
			</table>
		);
	}
}

function mapStateToProps( { weather } ) { // maps needed application state vars to component prop vars
	return { weather }; // curly braces above are syntactic sugar for pulling in just the one state var
}

export default connect( mapStateToProps )( WeatherList ); // connects state and actions to component's props
