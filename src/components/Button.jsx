const Button = (props) =>{
    return (
        <div>
            <button 
            onClick={props.onClick}
            style={{backgroundColor: props.color, opacity:0.9}} className={`min-w-[60px] text-white text-lg border rounded`}>{props.text}</button>
        </div>
    )
}

export default Button