import './B.css'
export default function B(props){
    return <div className='B'>
        <div className="small">
            <img className='iiii' src={props.img} alt="" />
        </div>
        <div className="bi">
            <h2>{props.h2}</h2>
            <p className='pp'> {props.p}</p>
        </div>
    </div>
}