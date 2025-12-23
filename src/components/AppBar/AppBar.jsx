import StatusFilter from "../StatusFilter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";
import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={s.wrapper}>
      <section className={s.section}>
        <h2 className={s.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={s.section}>
        <h2 className={s.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};

export default AppBar;
