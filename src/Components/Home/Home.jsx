import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../Logo/Logo";
import messages from "./Home.messages";
import styles from "./Home.module.css";
import { LoadPage, OnLoadedPage } from "../../Actions/PageActions";

const Home = () => {
  const dispatch = useDispatch();
  const load_status = useSelector(state => state.GeneralReducer.load_status);
  console.log(load_status)

  useEffect(() => {
    dispatch(LoadPage());
  });

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Logo />
        <p>{messages.primary}</p>
        <button
          className={styles.AppLink}
          onClick={() => dispatch(OnLoadedPage())}
        >
          {messages.learnReact}
        </button>
      </header>
    </div>
  );
};
export default Home;
