import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface propsMenu{
  hidde:boolean;
}

const Menu = ({hidde}:propsMenu) => {

  const closeMenu = ()=>{
    document.getElementById("menu_check")?.click();
  }

  return (
    <nav className={classNames({[styles.menu__hidde]:hidde})}>
        <div className={styles.menuToggle}>
      <input id="menu_check" type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul className={styles.menu}>
        <Link to="/cadastro" onClick={closeMenu}>
          <li> Novo </li>
        </Link>

        <Link to="/historico" onClick={closeMenu}>
          <li>Histórico</li>
        </Link>
      </ul>
    </div>
    </nav>
  );
};

export default Menu;
