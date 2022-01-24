import { useState } from 'react';


const AddTask = (props) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    

    return (
        <form className="add-form" onSubmit = {(e) => {
                let task = {};
                // task.id = Math.floor(Math.random()*10000) + 1;
                task.text = text;
                task.day = day;
                task.reminder = reminder;
                props.onAdd(e, task)
            }
        }>

            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder = 'Add task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder = 'Add Day and Time'
                    value={day} 
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox"
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            
            <input type="submit" value = 'Save task' className="btn btn-block"/>
        </form>
    );
}

export default AddTask;