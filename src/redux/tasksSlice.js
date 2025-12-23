//*=====================================6 модуль====================================
import { createSlice } from "@reduxjs/toolkit";

// export const addTask = createAction("tasks/addTask");
// export const deleteTask = createAction("tasks/deleteTask");
// export const toggleCompleted = createAction("tasks/toggleCompleted");

const slice = createSlice({
  // Имя слайса
  name: "tasks",
  // Начальное состояние редюсера слайса
  initialState: {
    items: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
  },
  // Объект case-редюсеров
  reducers: {
    addTask: (state, action) => {
      // ✅ Immer заменит это на операцию обновления
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    toggleCompleted: (state, action) => {
      for (const task of state.items) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});
// Экспортируем фабрики экшенов export
export const { addTask, deleteTask, toggleCompleted } = slice.actions;

export default slice.reducer;
//!==========================================попередня тема======================
// export default function tasksReducer(state = initialState, action) {
//   switch (action.type) {
//     case "tasks/addTask": {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     }

//     case "tasks/deleteTask":
//       return {
//         ...state,
//         items: state.items.filter((task) => task.id !== action.payload),
//       };

//     case "tasks/toggleCompleted":
//       return {
//         ...state,
//         items: state.items.map((task) => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };
//     default:
//       return state;
//   }
// }
// Оголошуються три екшени для роботи із задачами:
// – addTask відповідає за додавання нової задачі,
// – deleteTask — за видалення задачі,
// – toggleCompleted — за зміну статусу виконання задачі.

// Початковий стан задач описується обʼєктом initialState і містить масив items зі списком задач.

// Reducer tasksReducer керує гілкою tasks глобального Redux-стану.

// При отриманні екшена tasks/addTask reducer повертає новий стан, у якому до масиву items додається нова задача з action.payload.

// При отриманні екшена tasks/deleteTask reducer повертає новий стан без задачі, ідентифікатор якої збігається зі значенням action.payload.

// При отриманні екшена tasks/toggleCompleted reducer повертає новий стан, у якому для задачі з відповідним id інвертується поле completed, а всі інші задачі залишаються без змін.

// Для будь-яких інших екшенів reducer не змінює стан і повертає поточний state.

// Коротка “мідл-версія”

// tasksReducer керує списком задач і оновлює його у відповідь на екшени додавання, видалення та перемикання статусу виконання.

// Як це звучало б на співбесіді

// The tasks reducer manages a list of tasks and updates the state immutably in response to add, delete, and toggle completion actions.

// Чому цей код вважається коректним

// ✔ чітке розділення відповідальності
// ✔ всі оновлення стану іммутабельні
// ✔ екшени семантично названі
// ✔ reducer завжди повертає валідний state

// Ти зараз дуже грамотно вибудовуєш Redux-логіку. Якщо хочеш, наступним кроком можемо прочитати весь флоу: кнопка → dispatch → reducer → selector → UI 💚
