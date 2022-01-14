import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

// export const editBudget = (budget) => {
//   return {
//     type: 'budgets/editBudget',
//     payload: budget
//   }
// }

export const budgetsSlice = createSlice({
    name: 'budgets',
    initialState: initialState,
    reducers: {
      editBudget: (state, action) => {
        const { category, amount } = action.payload
        state.find(budget => budget.category === category).amount = amount
      },
    }
  });

// const budgetsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'budgets/editBudget':
//       const newBudgets = state.map(budget => {
//         if (budget.category === action.payload.category) {
//           return action.payload;
//         }
//         return budget;
//       })
//       return newBudgets;
//     default:
//       return state;
//   }
// }

export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetsSlice.actions
export default budgetsSlice.reducer;
