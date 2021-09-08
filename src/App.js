import "./App.css";

function App() {
  return (
    <div className="container ">
      <ul className="user-list">
        <li className="user-item">
          <UserInfo
            userName="Вова"
            userGender="муж"
            userAge={27}
            yearsWorked={1}
          />
        </li>
        <li className="user-item">
          <UserInfo
            userName="Иван"
            userGender="муж"
            userAge={21}
            yearsWorked={2}
          />
        </li>
        <li className="user-item">
          <UserInfo
            userName="Ольга"
            userGender="жен"
            userAge={37}
            yearsWorked={3}
          />
        </li>
      </ul>
    </div>
  );
}

function UserInfo(props) {
  console.log(props);
  return (
    <div>
      Имя: {props.userName} <br />
      Пол: {props.userGender} <br />
      Возраст: {props.userAge} <br />
      Работает: {props.yearsWorked} <br />
      ___________________
      <br />
      Зарплата: {props.yearsWorked * 10}
    </div>
  );
}

export default App;
