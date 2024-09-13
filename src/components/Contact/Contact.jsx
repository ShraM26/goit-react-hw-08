import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { GrEdit } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";

export const Contact = ({ element: { id, name, phoneNumber } }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleDelete = () => {
    setOpenDelete(true);
  };

  const handleEdit = () => {
    setOpenEdit(true);
  };

  return (
    <>
      <div className={css.item}>
        <div>
          <p>
            <FaUser /> {name}
          </p>
          <p>
            <FaPhoneAlt /> {phoneNumber}
          </p>
        </div>
        <div className={css.btnWrapper}>
          <button type="button" className={css.editButton} onClick={handleEdit}>
            <GrEdit />
          </button>
          {openEdit && (
            <EditModal
              active={openEdit}
              setActive={setOpenEdit}
              id={id}
              name={name}
              number={phoneNumber}
            />
          )}
          <button type="button" className={css.button} onClick={handleDelete}>
            <FaRegTrashCan />
          </button>
          {openDelete && (
            <DeleteModal
              active={openDelete}
              setActive={setOpenDelete}
              id={id}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;