import React, { Component } from 'react'

export class NewsItemComponenet extends Component {
   
  render() {
    let  {title,discription,imageurl,url} = this.props;
    return (
      <div>
                <div className="card my-3" style={{ width:"18rem",maxHeight:"400px",minHeight:"400px"}}>
  <img src={imageurl} className="card-img-top" style={{maxHeight:'200px'}} alt="no image found"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <a href={url} className="btn btn-info">want to know more?</a>
  </div>
      </div>
      </div>
    )
  }
}

export default NewsItemComponenet
