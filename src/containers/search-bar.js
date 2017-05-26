import React, { Component } from 'react';
import { connect } from 'react-redux'; // connects redux state and actions to component props
import { bindActionCreators } from 'redux'; // runs imported actions through redux dispatch
import { fetchWeather } from '../actions/index'; // import redux actions we created

class SearchBar extends Component {
	constructor( props ) {
		super( props );
		this.state = { term: '' }; // set initial state
		this.onInputChange = this.onInputChange.bind( this ); // binds "this" context to event handlers that need "this"
		this.onFormSubmit = this.onFormSubmit.bind( this );
	}
	
	onInputChange( event ) {
		this.setState( { term: event.target.value } ); // action sets state
	}
	
	onFormSubmit( event ) {
		event.preventDefault(); // always prevent default for forms of single page apps
		this.props.fetchWeather( this.state.term ); // run action which runs ajax
		this.setState( { term: '' } ); // reset term after submit
	}
	
	render() {
		return (
			<form onSubmit={ this.onFormSubmit } className="input-group">
				<input
					placeholder="Search cities"
					className="form-control"
					value={ this.state.term } // state sets value
					onChange={ this.onInputChange } // action sets state
				/>
				<span className="input-group-btn">
					<button className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps( dispatch ) { // runs imported actions through redux dispatch
	return bindActionCreators( { fetchWeather }, dispatch );
}

export default connect( null, mapDispatchToProps )( SearchBar ); // connects state and actions to component's props
