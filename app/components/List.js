import React from "react"
import Link from "./Link"

export default React.createClass({
	initialState: function(){
		return{
			index: []
		}
	},

	componentDidMount: function(){
		this.setState({index: this.props.parks})
	},

	render: function(){
		console.log("nulllll?")
		console.log(this.props.parks)
		console.log('basd')
		if(this.props.parks){
			console.log("more parks!")
			var skateparks = this.props.parks.skateparks
			console.log(skateparks)
			return (
				<ul>
				{this.props.parks.skateparks.map(function(result) {
					return <li>
						<Link url={'api/skateparks/' + result.id} text={result.name} />
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