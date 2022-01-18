import { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ContactForm.module.css";
import { addContact } from "../../../redux/phonebook/phoneOperations";

function ContactForm( ) {
  const dispatch = useDispatch();
  const contactSelector = useSelector((state) => state.contacts.items)
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onAddContact = (e) => {
    e.preventDefault();
    const contact = { name, number };
    const isNameContact = contactSelector.some( e => e.name.toLowerCase() === name.toLowerCase())
    if (isNameContact) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContact(contact));
    setName('');
    setNumber('')
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
      switch (name) {
        case 'name':
          setName(value);
          return;
        case 'number':
          setNumber(value);
          return;
        default:
          return;
      }
  };

  return (
    <form className={style.form} onSubmit={onAddContact}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.label}>
        Number
        <input
          className={style.input}
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={style.btn}>
        Add Contact
      </button>
    </form>
  );
}

export default memo(ContactForm);