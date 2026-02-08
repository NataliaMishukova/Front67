import "./styles.css";

function Button({name = "Send"}) {
  return <button className="button_component">{name}</button>;
}

export default Button;
