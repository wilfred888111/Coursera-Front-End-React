import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {


	renderDish(dish) {
		if(dish != null) {
			return(
						<Card>
							<CardImg width="100%" src={dish.image} alt={dish.name}/>
							<CardBody>
								<CardTitle>{dish.image}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
				);
		}
		else {
			return(
				<div></div>
				);
		}

	}

	
	formatDate(string){
    	var options = { year: 'numeric', month: 'short', day: 'numeric' };
	   	return new Date(string).toLocaleDateString('en-US',options);
	}

	renderComments(dish) {
		

		if(dish != null) {

			const comments = dish.comments.map((element) => {
				return(
					<div key={element.id}>
						<ul class = "list-unstyled">
							<li>{element.comment}</li>
							<li>-- {element.author}, {this.formatDate(element.date)}</li>
						</ul>
					</div>
					);

			}); 	

			return(
					<div>
						<h4>Comments</h4>
						<div>{comments}</div>
					</div>
				);
		}
		else {
			return(
				<div></div>
				);
		}


	}


	render () {
		return(
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<div>
							{this.renderDish(this.props.dish)}
						</div>
					</div>
					<div className="col-12 col-md-5 m-1">
						<div>
							{this.renderComments(this.props.dish)}
						</div>
					</div>
				</div>
			</div>
			);


	}

}


export default Dishdetail;