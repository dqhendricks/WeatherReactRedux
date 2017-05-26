import { FETCH_WEATHER } from '../actions/index';

export default function( state = [], action ) {
	switch( action.type ) {
		case FETCH_WEATHER:
			return [ action.payload.data, ...state ]; // syntactic sugar for state.concat( [ action.payload.data ] );
			break;
	}
	return state;
}