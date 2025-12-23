import { createSlice } from "@reduxjs/toolkit";

// export const setStatusFilter = createAction("filters/setStatusFilter");
const slice = createSlice({
  name: "filters",
  initialState: {
    status: "all",
  },

  reducers: {
    setStatusFilter(state, action) {
      // ✅ Immer заменит это на операцию обновления
      state.status = action.payload;
    },
  },
});
// Экспортируем фабрики экшенов
export const { setStatusFilter } = slice.actions;
// Экспортируем редюсер слайса
export default slice.reducer;

// export default function filtersReducer(state = initialState, action) {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// }
// Оголошується екшен setStatusFilter, який відповідає за зміну статусного фільтра задач.

// Початковий стан фільтра визначається обʼєктом initialState і містить поле status зі значенням "all".

// Reducer filtersReducer відповідає за керування гілкою filters у Redux-стані.

// При отриманні екшена з типом "filters/setStatusFilter" reducer повертає новий стан, у якому поле status оновлюється значенням, переданим у action.payload.

// Для всіх інших екшенів reducer не змінює стан і повертає поточний state.

// Коротка “мідл-версія”

// Reducer filters зберігає поточний статус фільтра і оновлює його через екшен setStatusFilter.

// Як це звучить на співбесіді

// The filters reducer manages the status filter state and updates it in response to the setStatusFilter action by replacing the status value with the action payload.
