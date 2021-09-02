import React from 'react';
import PersonDescription from './person-description';

const people = [
    {
        name: 'Дима',
        job:'Спикер',
        salary: 1
    },
    {
        name: 'Вова',
        job:'Тим-лид',
        salary: 2000
    },
    {
        name: 'Андрей',
        job:'Фрон-энд разработчик',
        salary: 1500
    },
    {
        name: 'Даниил',
        job:'Верстальщик',
        salary: 1000
    }
]

function ListNotGoodButNotBad() {
    let list = []
    for(let i = 0; i < people.length; i++){
        list.push(
            <PersonDescription 
                person={people[i]}
            />
        )
    }
    const heading = (
        <h2>
        Информация о сотрудниках:
        </h2>
    )
        
       return (
       <div>
            {heading}
            {list}
       </div>
    )
}

function List () {
    return (
        <div>
             <h2>
                 Информация о сотрудниках:
            </h2>
            {
                people.map((item, index)=>{
                    return (
                        <PersonDescription 
                            person={item}
                        />
                    )
                })
            }
        </div>
       
        

    )
}


export default List;