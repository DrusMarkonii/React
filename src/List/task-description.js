import React from 'react';

function TaskDescription(props) {
    const user = props.user;
    return (
        <div>
            <ul>
                <li>Имя задачи: {user.taskName}</li>
            </ul>
        </div>
    )
}

export default TaskDescription
