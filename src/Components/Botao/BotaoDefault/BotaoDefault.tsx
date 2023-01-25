import styles from "./BotaoDefault.module.scss";
import classNames from "classnames";

interface propsBotao {
  hidde?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  type: "button" | "submit" | "reset";
  nipple?: "default" | "danger" | "success";
}
const BotaoDefault = ({ ...props }: propsBotao) => {
  if (!props.nipple) props.nipple = "default";
  return (
    <button
      type={props.type}
      className={classNames({
        [styles.botaoDefault]: true,
        [styles[`botaoDefault__${props.nipple}`]]:true,
        [styles.botaoDefault__hidde]: props.hidde,
      })}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default BotaoDefault;
