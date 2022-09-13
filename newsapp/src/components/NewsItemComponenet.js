import React, { Component } from 'react'

export class NewsItemComponenet extends Component {
   
  render() {
    let  {date,author,title,discription,imageurl,url} = this.props;
    return (
      <div>
     <div className="card my-3" style={{ maxHeight:"500px",minHeight:"400px"}}>
  <img src={imageurl} className="card-img-top" style={{maxHeight:'200px'}} alt="nothing found"  onError={({ currentTarget }) => {
    currentTarget.onerror = null; 
    currentTarget.src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg";
  }} />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"><small className="text-muted">by {author} on {new Date(date).toGMTString()}</small></p>
    <p className="card-text">{discription}</p>
    <a href={url} className="btn btn-info">want to know more?</a>
  </div>
      </div>
      </div>
    )
  }
}

export default NewsItemComponenet
