import "./Button.css";

const Button = (props) => {
  return <button className={props.buttonWhite ? "button button_white" : "button"}>{props.children}</button>;
};

export default Button;
