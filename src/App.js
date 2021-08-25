import "./App.css";

function App() {
  return (
    <div>
      <UserInfo userName="Вова" 
        userGender="муж" 
        userAge="27" 
        yearsWorked="1" />
      <br />
      <UserInfo 
        userName="Иван" 
        userGender="муж" 
        userAge="21" 
        yearsWorked="2" />
      <br />
      <UserInfo
        userName="Ольга"
        userGender="жен"
        userAge="37"
        yearsWorked="3"
      />
    </div>
  );
  // <div>
  //   <SayHi user="Jone" a="1" b="123"/>
  //   <SayHi user="Drus" a="10" b="23123"/>
  // </div>
}

// function SayHi(props) {
//   console.log(props)
//   return (
//   <div>
//     Hi, {props.user}
//   </div>
//   )
// }

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
