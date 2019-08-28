import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

	function RenderDish({dish}) {
			return(
					<div>
						<Card>
							<CardImg top src={dish.image} alt={dish.name}/>
							<CardBody>
								<CardTitle>{dish.image}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
				);

	}

	
	function FormatDate({string}) {
    	var options = { year: 'numeric', month: 'short', day: 'numeric' };
	   	return new Date(string).toLocaleDateString('en-US',options);
	}

	function RenderComments({comments}) {
		
		if(comments != null) {
				return(
					<div>
						<h4>Comments</h4>
						<ul className="list-unstyled">
							{comments.map((comment) => {
								return (
									<li key={comment.id}>
									<p>{comment.comment}</p>
									<p>-- {comment.author} , <FormatDate string={comment.date}/></p>
									</li>
									);


							})}
						</ul>
					</div>
				);
			}
		else {
			return(
				<div></div>
				);
		}
	}


	const Dishdetail = (props) => {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );


	}




export default Dishdetail;