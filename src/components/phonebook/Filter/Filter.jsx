import style from "./Filter.module.css";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../../redux/filter/filterActions";
const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => dispatch(changeFilter(e.target.value))
  const value = useSelector((state) => state.filter)
  return (
    <div>
      <p>Find contacts by name</p>
      <label>
        <input
          className={style.input}
          value={value}
          onChange={handleChange}
          name="filter"
          type="text"
          placeholder="Filter"
        />
      </label>
    </div>
  );
};

export default memo(Filter);