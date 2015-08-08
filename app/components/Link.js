import React from "react"

export default React.createClass({
	getInitialState: function(){
		return{
		link: this.props.url,
		text: this.props.text
		}
	},

	goToLink: function(e){
		console.log(e)
		e.preventDefault();
		var path = e.target.href
		var request = $.ajax({
			url: path,
			method: 'get',
			dataType: 'json'
		})
		request.done(function(response){
			console.log(response)
		})
		request.fail(function(response){
			console.log(response) 
			console.log('cuz u suck')
		})
	},

	render: function(){
		return (
			<a href={this.state.link} onClick={this.goToLink}>{this.state.text}</a>
		)
	}
})