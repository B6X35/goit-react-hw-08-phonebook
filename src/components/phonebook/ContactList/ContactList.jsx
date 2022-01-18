import ContactItem from "./ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../../redux/phonebook/phoneOperations";
import { memo } from "react";
import { getVisibleContacts } from "../../../redux/phonebook/phoneSelectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const visiblesContacts = useSelector(getVisibleContacts);
  const removePhones = (id) => dispatch(removeContact(id));


  const elements = visiblesContacts.map(({ id, ...item}) => (
    <ContactItem
      key={id}
      {...item}
      id={id}
      delet={removePhones}
    />
  ));
  return <ul>{elements}</ul>;
};

export default memo(ContactList);