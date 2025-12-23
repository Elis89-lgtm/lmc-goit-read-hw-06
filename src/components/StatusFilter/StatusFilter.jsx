import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import s from "./StatusFilter.module.css";
import { setStatusFilter } from "../../redux/filtersSlice";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));
  return (
    <div className={s.wrapper}>
      <Button
        selected={filter === "all"}
        onClick={() => handleFilterChange("all")}
      >
        All
      </Button>
      <Button
        selected={filter === "active"}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </Button>
      <Button
        selected={filter === "completed"}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
// The StatusFilter component reads the current filter value from the Redux store and updates it by dispatching a setStatusFilter action when a user interacts with the filter buttons.
// Компонент StatusFilter відповідає за керування фільтром задач у Redux-стані.

// Усередині компонента за допомогою useSelector отримується поточне значення статус-фільтра з гілки filters.status глобального стану.

// Хук useDispatch використовується для відправлення екшенів у Redux-store.

// Функція handleFilterChange інкапсулює логіку зміни фільтра і диспатчить екшен setStatusFilter з новим значенням статусу.

// Компонент рендерить групу кнопок-фільтрів.
// Кожна кнопка:
// – передає нове значення фільтра при кліку,
// – отримує проп selected, який визначає її активний візуальний стан,
// – відображає активність на основі поточного Redux-стану.
