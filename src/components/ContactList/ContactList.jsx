import { nanoid } from "nanoid";
import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors.js";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts
        ? filteredContacts.map((el) => {
            return (
              <li key={nanoid()}>
                <Contact element={el} />
              </li>
            );
          })
        : "no contacts"}
    </ul>
  );
};

export default ContactList;