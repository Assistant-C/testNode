import './aside_item.css'

export default function aside_item(props){
    return <div className="aside_item">
        <div className="item1234"> <div className="img"></div> <p>01.02.2022</p> </div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    </div>
}