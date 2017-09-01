import React from 'react';

class StickyNote extends Component {
	handleClick = () => { this.props.onClick(this.props.stickynote.id) }

	handleDelete = () => { this.props.onDelete(this.props.stickynote.id) }

	render () {
		return(
		  <div className="tile">
		  	<span className="deleteButton" onClick={this.handleDelete}>x</span>
		    <h4 onClick={this.handleClick}>{this.props.stickynote.title}</h4>
		    <p onClick={this.handleClick}>{this.props.stickynote.body}</p>
		  </div>
		)
	}
}

export default Idea
