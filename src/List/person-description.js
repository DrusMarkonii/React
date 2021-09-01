import React from 'react';

function PersonDescription(props) {
    const person = props.person;
    return (
        <div>
            <ul>
                <li>Имя: {person.name}</li>
                <li>Должность: {person.job}</li>
                <li>Зарплата: {person.salary}</li>
                <li>Зарплата в год: {person.salary*12}</li>
            </ul>
        </div>
    )
}

export default PersonDescription