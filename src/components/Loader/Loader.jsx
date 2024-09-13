import { SyncLoader } from "react-spinners";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <>
      <SyncLoader className={css.loader} color="#1734f6" />;
    </>
  );
};

export default Loader;