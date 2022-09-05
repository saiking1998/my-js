import React,{useState} from 'react'


export default function TextForm(props) {
    const ForUpperCase = ()=>{
      setText(text.toUpperCase());
    }
    const ForTextCahnge = (event) =>{
        setText(event.target.value); 
    }
    const [text,setText] = useState("");
    const ForLowerCase = () =>{
        setText(text.toLowerCase());
    }
    const ForClear= () =>{
    setText("");
    }
    const handlecopy=() =>{
      var text = document.getElementById('exampleFormControlTextarea1')
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const ExtraSpace=() =>{
let newtext = text.split(/[ ]+/)
setText(newtext.join(" "))

    }
  return (
    <div>
   
<div className={`container mb-3 text-${props.darkmode === 'light'?'dark':'light'}`} >
<h1>{props.heading}</h1>

<textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor : props.darkmode === 'light'?'white':'gray', color : props.darkmode === 'light'?'black':'white'}} onChange={ForTextCahnge} value={text} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={ForUpperCase} >convert to upper case</button>
<button className="btn btn-primary mx-4" onClick={ForLowerCase} >convert to lower case</button>
<button className="btn btn-primary mx-4" onClick={ForClear} >Clear</button>
<button className="btn btn-primary mx-4" onClick={handlecopy} >Copy</button>
<button className="btn btn-primary mx-4" onClick={ExtraSpace} >remove Extra space</button>
<div className={`container my-3 text-${props.darkmode === 'light'?'dark':'light'}`}>
    <h1>Your text summanry</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p> it can be read in {0.008 * text.split(" ").length}  </p>
</div>
<div className="container">
  <h1 style={{backgroundColor : props.darkmode === 'light'?'white':'#375572', color : props.darkmode === 'light'?'black':'white',textDecoration :'underline'}}>Preview</h1>
  <p style={{backgroundColor : props.darkmode === 'light'?'white':'#375572', color : props.darkmode === 'light'?'black':'white'}}>{text.length>0 ?text:"write some thing to see it here"}</p>
</div>
</div>
  )
}

