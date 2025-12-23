import { MdClose } from "react-icons/md";
import s from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <div className={s.wrapper}>
      <input
        type="checkbox"
        className={s.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={s.text}>{task.text}</p>

      <button className={s.button} type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
