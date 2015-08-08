import React from "react";
import List from "./List";

export default React.createClass({
	
	getIntitialState: function(){
		return {
			message: "yeee"
		}
	},

	justDoIt: function(e) {
		e.preventDefault();
		$('.greeting').toggle();
		console.log("just do ittt");
		var local = this;
		var path = "http://localhost:3000/api/skateparks"
		var request = $.ajax({
			url: path,
			method: 'get',
			dataType: 'json'
		})
		request.done(function(response){
			console.log("aye")
			console.log(response)
			this.setState({
				skateparks: response
			})
		}.bind(this))
		request.fail(function(response){
			console.log("well fuckkk")
		})

	},


  render: function() {

    return (
    	<div>
      	<div className="greeting">
	        Hello, {this.props.name}!
	        "MAAAAANNnn, you wuz wid that -"
	        <br />
	        <button onClick={this.justDoIt} >Login</button>
	        </div>
	        <List parks={this.state} />
      </div>
    );

  },
});