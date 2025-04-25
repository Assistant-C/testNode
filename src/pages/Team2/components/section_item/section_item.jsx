import './section_item.css'

export default function section_item(props){
    return <div className={`section_item ${props.image}`}>
        <p className='p1'>{props.p}</p>
        <h1>{props.title}</h1>
        <p>{props.p2}</p>
        
    </div>
}