import React from "react"
import Link from "./Link"

var baseURL = 'https://skate-life-backend.herokuapp.com'

export default React.createClass({
	initialState: function(){
		return{
			skatepark: null
		}
	},

	// componentDidMount: function(){
	// 	this.setState({index: this.props.parks})
	// },

	render: function(){
		console.log(this.props.parks)
		if(this.props.parks){
			console.log("more parks!")
			var skateparks = this.props.parks
			console.log(skateparks)
			return (
				<ul>
				{this.props.parks.map(function(result) {
					return <li key={result.id}>
						<Link key={result.id} url={baseURL + '/api/skateparks/' + result.id} text={result.name} />
					</li>
				})}
      	</ul>
			)
		}
		else{
			console.log("no parks")
			return (
      <div className="greeting">
        
      </div>
    );
		}
	}
})