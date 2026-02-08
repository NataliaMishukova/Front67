import "./styles.css";
import { homerSimpson } from "./data"

// props - это возможность передавать данные из родительского компонента в дочерний
// props является обьектом
// Синтакси без деструктуризации
// function SimpsonsCard(props) {
//   console.log(props)
// Синтаксис с деструктуризацией
// function SimpsonsCard({ avatar, firstName, lastName, job, hobby }) {
  function SimpsonsCard() {
  // Данные храняться в самом компоненте, это старый подход
  // const homerSimpson = {
  //   firstName: "Homer",
  //   lastName: "Simpson",
  //   job: "Nuclear Security Specialist",
  //   hobby: "Bear, TV, FastFood",
  //   avatarURL:
  //     "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  // };

  // const { firstName, lastName, job, hobby, avatarURL } = homerSimpson;

  return (
    <div className="card">
      <div className="img"><img className="avatar" src={homerSimpson.avatarURL} alt="User Avatar" /></div>
      <div className="card_info">
        <p><span className="info_title">Fullname: </span>
        {`${homerSimpson.name} ${homerSimpson.surname}`}</p>
      </div>
      <div className="card_info">
       <p> <span className="info_title">Job:</span>
        {homerSimpson.occupation}</p>
      </div>
      <div className="card_info">
        <p><span className="info_title">Hobby: </span>
        {homerSimpson.hobby}</p>
      </div>
    </div>
  );
}

export default SimpsonsCard;
