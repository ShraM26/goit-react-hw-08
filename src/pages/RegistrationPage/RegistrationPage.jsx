import { useDispatch } from "react-redux";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import { register } from "../../redux/auth/operations";

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const reg = (userRegData) => {
    dispatch(register(userRegData));
  };
  return (
    <div>
      <RegisterForm submit={reg} />
    </div>
  );
};

export default RegisterPage;