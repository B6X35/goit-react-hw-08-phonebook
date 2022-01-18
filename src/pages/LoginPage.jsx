import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authorization/authOperation";
import style from "./styles/LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
    setForm({ email: "", password: "" });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <button type="submit" className={style.btn}>
        login
      </button>
    </form>
  );
};

export default LoginPage;
