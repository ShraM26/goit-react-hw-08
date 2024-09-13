import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { loginOAuth } from "../../redux/auth/operations";
import { useEffect } from "react";

export const OAuthLogin = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const code = searchParams.get("code");
  console.log(code);
  useEffect(() => {
    dispatch(loginOAuth(code));
  }, []);
};

export default OAuthLogin;