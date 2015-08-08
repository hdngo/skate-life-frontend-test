import React from "react";
import List from "./List";

export default React.createClass({
	
	getInitialState: function(){
		return {
			skateparks: []
		}
	},

	justDoIt: function(e) {
		e.preventDefault();
		console.log("just do ittt");
		var path = "https://skate-life-backend.herokuapp.com/api/skateparks"
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
  	if(this.state.skateparks.length === 0){
  		console.log("i'm empty on the inside")
  		var Content = <button onClick={this.justDoIt} >Login</button>
  	}
  	else{
  		console.log("fullllll")
  		var Content = <List parks={this.state.skateparks} />
  	}
    return (
    	<div>
    		{Content}
      </div>
    );

  },
});