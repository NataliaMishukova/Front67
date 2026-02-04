import { homerSimpson } from "./Card";
import "./styles.css"
function Homework_02() {
  return (
    <div className="homework_02_wrapper">
      <div className="simps_card">
        <img
          className="avatar"
          src={homerSimpson.avatarURL}
          alt="Avatar"
        />
        <p className="card_info">Name: {homerSimpson.name}</p>
        <p className="card_info">Surame: {homerSimpson.surname}</p>
        <p className="card_info">Occupation: {homerSimpson.occupation}</p>
        <p className="card_info">Hobby: {homerSimpson.hobby}</p>
      </div>
    </div>
  );
}

export default Homework_02;
