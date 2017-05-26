import axios from 'axios'; // for ajax call

const WEATHER_API_KEY = '4f2f0cc87ba72072a9851ffde3e91812';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ WEATHER_API_KEY }`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ) {
	const url = `${ ROOT_URL }&q=${ city },us`;
	const request = axios.get( url ); // axios ajax call returns promise
	
	return { // return action
		type: FETCH_WEATHER,
		payload: request
	};
}