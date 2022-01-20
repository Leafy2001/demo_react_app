import Button from "./Button";

const Header = (props) => {
    const onClick = () => {
        alert("Click");
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            {
                props.showAddTask ? 
                    <Button 
                        color = "red" 
                        text = "Close" 
                        onClick={onClick} 
                        toggle_form={props.toggle_form} 
                    />
                    :
                    <Button 
                        color = "green" 
                        text = "Add" 
                        onClick={onClick} 
                        toggle_form={props.toggle_form} 
                    />
            }
            
        </header>
    );
};

export default Header;
