import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authorization/authOperation";
import style from "./styles/RegisterPage.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label className={style.label}>
        Name
        <input
        className={style.input}
          type="text"
          name="name"
          value={form.name}
          placeholder="name"
          onChange={handleChange}
        />
      </label>
      <label className={style.label}>
        Email
        <input
        className={style.input}
          type="text"
          name="email"
          value={form.email}
          placeholder="email"
          onChange={handleChange}
        />
      </label>
      <label className={style.label}>
        Password
        <input
        className={style.input}
          type="text"
          name="password"
          value={form.password}
          placeholder="password"
          onChange={handleChange}
        />
      </label>

      <button type="submit"  className={style.btn}>register</button>
    </form>
  );
};

export default RegisterPage;
