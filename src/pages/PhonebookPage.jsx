import ContactForm from "../components/phonebook/ContactForm";
import Filter from "../components/phonebook/Filter";
import ContactList from "../components/phonebook/ContactList";
import { getContacts } from "../redux/phonebook/phoneOperations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function PhonebookPage() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth);

  useEffect(() => {
    token && dispatch(getContacts(token));
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default PhonebookPage;
