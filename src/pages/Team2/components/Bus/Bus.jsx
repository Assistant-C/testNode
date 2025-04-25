import './Bus.css'
export default function Bus(props){
    return <div className='Bus'>
        <div className="small">    
              <p className='po'> {props.p}</p>
        </div>
        <div className="bi">
           
            <img className='iiim' src={props.img} alt="" /> 
        </div>   
        <div className="small"> <h2>{props.h2}</h2>
           
        </div>
    </div>
}