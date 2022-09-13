import React, { Component } from 'react'
import NewsItemComponenet from './NewsItemComponenet'
import Spinner from './Spinner'
export class NewsComponent extends Component {
    articals =[]
    constructor(){

        super();
        
        
        
        this.state= {
             articals :this.articals,
             loading:true,
             page:1
        }
    }
    async componentDidMount(){
      setTimeout(async() => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.content}&apiKey=8afb1c6f62d949a799a289a77c2d3985&page=${this.state.page}&pagesize=${this.props.pagesize}`
        let data = await fetch(url)
         let parseddata = await data.json()
         
         this.setState({articals:parseddata.articles,total:parseddata.totalResults})
         this.setState({loading:false})
      }, 2000);
     
    }
   

  render() {
    
   const previouspage= async() =>{
     
      this.setState({
        page : this.state.page -1
      })
      this.setState({loading:true})
      this.setState({articals:[]})
      setTimeout(async () => {
        
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.content}&apiKey=8afb1c6f62d949a799a289a77c2d3985&page=${this.state.page}&pagesize=${this.props.pagesize}`
        let data = await fetch(url)
         let parseddata = await data.json()
         
         this.setState({articals:parseddata.articles})
         this.setState({loading:false})
      }, 2000);
     
      
    }
    const nextpage=async() =>{
     
      if(this.state.page > Math.ceil(this.state.total/6))
      {
        window.alert("you red all the news")
      }
      else{
        this.setState({
          page : this.state.page +1,
          loading:true,
          articals :[]
        })
        setTimeout(async() => {
          
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.content}&apiKey=8afb1c6f62d949a799a289a77c2d3985&page=${this.state.page}&pagesize=${this.props.pagesize}`
      let data = await fetch(url)
       let parseddata = await data.json()
       this.setState({articals:parseddata.articles})
       this.setState({loading:false})
        }, 2000);
      
     }
    }
    return (
     
      <div className='container my-3'>
      
        
        <h1>News-baba news</h1>
         {this.state.loading && <Spinner/>}

        <div className="row">
        {this.state.articals?.map((ele)=>{
            return(
                <div className="col-md-4" key={ele.url} >
                <NewsItemComponenet date = {ele.publishedAt} author={ele.author? ele.author:"unknown"} title = {ele.title?ele.title.slice(0,45):""} discription={ele.description?ele.description.slice(0,86):""} imageurl={ele.urlToImage?ele.urlToImage:"https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"} url={ele.url}/>
                 </div>
            );

        })}
            
          
        </div>
         <div className="container my-5 d-flex justify-content-between">
         <button type="button" disabled={this.state.page<=1} className="btn btn-info "  onClick={previouspage}>&larr; previous</button>
         <button type="button" className="btn btn-info "  onClick={nextpage}>next &rarr;</button>
         </div>
        
      </div>
    )
  }
}

export default NewsComponent
