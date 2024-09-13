import axios from "axios";
import * as Yup from "yup";

export const API = axios.create({
  // baseURL: "https://connections-api.goit.global",
  // baseURL: "https://nodejs-hw-mongodb-j3zc.onrender.com",
  baseURL: "http://localhost:3000",
});

export const ValidSchemaContact = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short name!")
    .max(50, "Too long name!")
    .required("Required"),
  number: Yup.string()
    .min(9, "Too short, min 9 digits!")
    .max(13, "Too long number!")
    .required("Required"),
});

export const ValidSchemaLogin = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(7, "Min 7 simbols!")
    .max(15, "Too long password!")
    .required("Password required!"),
});

export const ValidSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short name!")
    .max(50, "Too long name!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Min 7 simbols!")
    .max(15, "Too long password!")
    .required("Password required!"),
});

export const initialValues = { name: "", number: "", contactType: "personal" };