import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    

    return (
        <div className={
            `task ${props.task.reminder ? 'reminder':''}`
        }>
            <h3>{props.task.text} 
                <FaTimes 
                    style={{color:'red', cursor: 'pointer'}} 
                    onClick={() => props.onDelete(props.task.id)}/>
            </h3>
            <p onDoubleClick={() => props.onToggle(props.task.id)}>{props.task.day}</p>
        </div>
    );
}

export default Task;