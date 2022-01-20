const Button = (props) => {
    return (
        <button 
            onClick = {props.toggle_form}
            className='btn' 
            style = {{backgroundColor : props.color}}>

            {props.text}
        </button>
    )

}

export default Button;