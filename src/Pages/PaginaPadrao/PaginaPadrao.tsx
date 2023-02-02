import { useState } from "react";
import {
  Outlet,
  useNavigate,
  useLocation,
  matchPath,
  useParams,
} from "react-router-dom";
import styles from "./PaginaPadrao.module.scss";
import Menu from "../../Components/Menu/Menu";
import BotaoDefault from "../../Components/Botao/BotaoDefault/BotaoDefault";
import classNames from "classnames";


const PaginaPadrao = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let { id } = useParams();
  let menuHamburgerHide = !matchPath(location.pathname, "/");

  let retornaTitulo = (id: string | undefined) => {
    let titulo = "";
    const mat =
      matchPath(location.pathname, `/cadastro/${id}`) ||
      matchPath(location.pathname, `/cadastro`);
    if (
      matchPath(location.pathname, `/cadastro/${id}`) ||
      matchPath(location.pathname, `/cadastro`)
    )
      titulo = "Cadastro WorkFlow";

    if (matchPath(location.pathname, "/")) titulo = "Dashboard";

    if (matchPath(location.pathname, "/historico"))
      titulo = "Histórico WorkFlow";

    return titulo;
  };

  return (
     
     <div className={styles.container}>    
      <header className={styles.header}>
        <Menu hidde={menuHamburgerHide}/>
        <div className={classNames(styles.header__btn_voltar, styles.header__btn_desktop)}>
          <BotaoDefault type="button" children={"< Voltar"} hidde={!menuHamburgerHide} onClick={() => {
              navigate(-1);
            }}/>
        </div>   
        <div className={classNames(styles.header__btn_voltar, styles.header__btn_mobile)}>
          <BotaoDefault type="button" children={"<"} hidde={!menuHamburgerHide} onClick={() => {
              navigate(-1);
            }}/>
        </div>         


        <h1 className={styles.header__titulo}>Kanban - {retornaTitulo(id)}</h1>
      </header>
         
      <div className={styles.outlet}>
         <Outlet/> 
      </div>
    </div> 
  );
};
export default PaginaPadrao;
