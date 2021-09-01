import React from 'react';
import PersonDescription from './person-description';

const firstPerson = {
    name: 'Дима',
    job:'Спикер',
    salary: 1
}

const secondPerson = {
    name: 'Вова',
    job:'Тим-лид',
    salary: 2000
}
const thirdPerson = {
    name: 'Андрей',
    job:'Фрон-энд разработчик',
    salary: 1500
}
const fourthPerson = {
    name: 'Даниил',
    job:'Верстальщик',
    salary: 1000
}
function ListBad() {
    return (
        <div>
            <h2>
                Информация о сотрудниках:
            </h2>
            <PersonDescription
            person={firstPerson} 
            />
            <PersonDescription
            person={secondPerson} 
            />
            <PersonDescription
            person={thirdPerson} 
            />
            <PersonDescription
            person={fourthPerson} 
            />
        </div>
       
    )
}


export default ListBad;