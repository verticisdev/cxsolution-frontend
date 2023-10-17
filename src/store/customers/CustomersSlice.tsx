import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { AppDispatch } from '../Store';

const API_URL = '/api/data/notes/NotesData';

interface StateType {
  customers: any[];
  customersContent: number;
  customerSearch: string;
}

const initialState = {
  customers: [],
  customersContent: 1,
  customerSearch: '',
};

export const CustomersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    getCustomers: (state, action) => {
      state.customers = action.payload;
    },
    SearchCustomers: (state, action) => {
      state.customerSearch = action.payload;
    },
    SelectCustomer: (state, action) => {
      state.customersContent = action.payload;
    },

    DeleteCustomer(state: StateType, action) {
      const index = state.customers.findIndex((customer) => customer.id === action.payload);
      state.customers.splice(index, 1);
    },

    UpdateCustomer: {
      reducer: (state: StateType, action: PayloadAction<any>) => {
        state.customers = state.customers.map((customer) =>
        customer.id === action.payload.id
            ? { ...customer, [action.payload.field]: action.payload.value }
            : customer,
        );
      },
      prepare: (id, field, value) => {
        return {
          payload: { id, field, value },
        };
      },
    },

    addCustomer: {
      reducer: (state: StateType, action: PayloadAction<any>) => {
        state.customers.push(action.payload);
      },
      prepare: (id, title, color) => {
        return { payload: { id, title, color, datef: new Date().toDateString(), deleted: false } };
      },
    },
  },
});

export const { SearchCustomers, getCustomers, SelectCustomer, DeleteCustomer, UpdateCustomer, addCustomer } =
CustomersSlice.actions;

export const fetchNotes = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getCustomers(response.data));
  } catch (err: any) {
    throw new Error(err);
  }
};

export default CustomersSlice.reducer;
