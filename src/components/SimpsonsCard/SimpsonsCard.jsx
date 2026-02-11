import "./styles.css";
// import { homerSimpson } from "./data"

// props - это возможность передавать данные из родительского компонента в дочерний
// props является обьектом
// Синтакси без деструктуризации
// function SimpsonsCard(props) {
//   console.log(props)
// Синтаксис с деструктуризацией
// function SimpsonsCard({ avatar, firstName, lastName, job, hobby }) {
//  -----------СТАРЫЙ СПОСОБ---------- 
// function SimpsonsCard() {
  // Данные храняться в самом компоненте, это старый подход
  // const homerSimpson = {
  //   firstName: "Homer",
  //   lastName: "Simpson",
  //   job: "Nuclear Security Specialist",
  //   hobby: "Bear, TV, FastFood",
  //   avatarURL:
  //     "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  // };

 

//   return (
//     <div className="card">
//       <div className="img"><img className="avatar" src={homerSimpson.avatarURL} alt="User Avatar" /></div>
//       <div className="card_info">
//         <p><span className="info_title">Fullname: </span>
//         {`${homerSimpson.name} ${homerSimpson.surname}`}</p>
//       </div>
//       <div className="card_info">
//        <p> <span className="info_title">Job:</span>
//         {homerSimpson.occupation}</p>
//       </div>
//       <div className="card_info">
//         <p><span className="info_title">Hobby: </span>
//         {homerSimpson.hobby}</p>
//       </div>
//     </div>
//   );
// }
// ----------СПОСОБ-С-ПОМОЩЬЮ-ДЕСТРУКТУРИЗАЦИИ---------- 
function SimpsonsCard({ avatar, firstName, lastName, job, hobby }) {
//  const { name, surname, occupation, hobby, avatarURL } = homerSimpson;
 return (
    <div className="card">
      <div className="img"><img className="avatar" src={avatar} alt="User Avatar" /></div>
      <div className="card_info">
        <p><span className="info_title">Fullname: </span>
        {`${firstName} ${ lastName}`}</p>
      </div>
      <div className="card_info">
       <p> <span className="info_title">Job:</span>
        {job}</p>
      </div>
      <div className="card_info">
        <p><span className="info_title">Hobby: </span>
        {hobby}</p>
      </div>
    </div>
  );
}

export default SimpsonsCard;
