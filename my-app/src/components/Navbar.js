import React from 'react'
import PropTypes from 'prop-types'
import   {Link} from 'react-router-dom';
function Navbar(props) {
  
  const Enablepurplemode = () =>{
     if(document.body.style.backgroundColor !== 'purple'){
      document.body.style.backgroundColor = 'purple'
     }
     else{
      document.body.style.backgroundColor = 'white'
     }
  }
  const Enableredmode = () =>{
    if(document.body.style.backgroundColor !== 'red'){
      document.body.style.backgroundColor = 'red'
     }
     else{
      document.body.style.backgroundColor = 'white'
     }
  }
  const Enableyellowmode = () =>{
    if(document.body.style.backgroundColor !== 'yellow'){
      document.body.style.backgroundColor = 'yellow'
     }
     else{
      document.body.style.backgroundColor = 'white'
     }
  }
  const Enablebluemode = () =>{
    if(document.body.style.backgroundColor !== 'blue'){
      document.body.style.backgroundColor = 'blue'
      document.body.style.color = 'white'
     }
     else{
      document.body.style.backgroundColor = 'white'
     }
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.darkmode} bg-${props.darkmode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
       
      
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <button id='purple' className='m-auto' onClick={Enablepurplemode} style={{backgroundColor:'purple',color :'white'}}>purple mode</button>
      <button id='red' className='m-auto'onClick={Enableredmode}  style={{backgroundColor:'red'}}>red mode</button>

      <button id='yellow' className='m-auto'onClick={Enableyellowmode}  style={{backgroundColor:'yellow'}}>yellow mode</button>

      <button id='blue' className='m-auto' onClick={Enablebluemode} style={{backgroundColor:'blue',color :'white'}}>blue mode</button>

      <div className={`form-check form-switch text-${props.darkmode ==='light' ? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox"  id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
  
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={title: PropTypes.string.isRequired}
//is required will be telling the user is that u need to enter the value
Navbar.defaultProps={title: "set title here"}

export default Navbar
