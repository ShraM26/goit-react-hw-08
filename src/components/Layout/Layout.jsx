import { useSelector } from "react-redux";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import { selectIsLoading } from "../../redux/contacts/selectors";

export const Layout = ({ children }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <AppBar />
      <Message />
      {children}
    </>
  );
};

export default Layout;