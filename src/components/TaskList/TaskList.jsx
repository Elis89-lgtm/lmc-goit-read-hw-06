import { useSelector } from "react-redux";
import Task from "../Task/Task";
import s from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case "active":
      return tasks.filter((task) => !task.completed);
    case "completed":
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

const TaskList = () => {
  // 2. Получаем массив задач из состояния Redux
  const tasks = useSelector((state) => state.tasks.items);

  // 3. Получаем значение фильтра из состояния Redux
  const statusFilter = useSelector((state) => state.filters.status);

  // 4. Вычисляем массив задач, которые необходимо отображать в интерфейсе
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={s.list}>
      {visibleTasks.map((task) => (
        <li className={s.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
