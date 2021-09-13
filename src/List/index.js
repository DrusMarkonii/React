import React from 'react';
import PersonDescription from './person-description';

const people = [
    {   id: 1,
        name: 'Дима',
        job:'Спикер',
        salary: 1
    },
    {
        id: 2,
        name: 'Вова',
        job:'Тим-лид',
        salary: 2000
    },
    {
        id: 3,
        name: 'Андрей',
        job:'Фрон-энд разработчик',
        salary: 1500
    },
    {
        id: 4,
        name: 'Даниил',
        job:'Верстальщик',
        salary: 1000
    }
]

function List () {
    return (
        <div>
            <h2>
                 Информация о сотрудниках:
            </h2>
            {people.map((item, index)=>{
                return (
                    <PersonDescription 
                        person={item}
                        key={item.id}
                    />
                )
            })}
            
            
        </div>
       
        

    )
}


export default List;