import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getRegisters, postRegister } from '../../service/service';

export const fetchRegisters = createAsyncThunk(
  'users/fetchRegisters',
  async (_userId, thunkAPI) => {
    const response = await getRegisters();
    console.log(response);
    return response
  }
)

export const createRegister = createAsyncThunk(
  'users/createRegister',
  async (inputField, { rejectWithValue }) => {
    try {
      const response = await postRegister(inputField);
      return response
    } catch (err) {
      return rejectWithValue(err);
    }
  }
)

const initialState = {
  value: 0,
  registersList: [],
  currentRequestId: "",
  loading: false,
  error: false,
  created: false,
  refresh: false,
  renderDetail: false,
  idToDetailRender: '',
  showForm: false
}

export const registerSlice = createSlice({
  name: 'counterType',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if(state.value <= 1) {
        state.value = 0
      } else {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    renderDetails: (state, action) => {
      state.renderDetail = !state.renderDetail
      state.idToDetailRender = action.payload
    },
    showForm: (state) => {
      state.showForm = !state.showForm
    }
  },
  extraReducers: {
    [fetchRegisters.fulfilled]: (state, action) => {
      state.registersList = [...action.payload]
      state.loading = false
    },
    [fetchRegisters.pending]: (state, action) => {
      state.loading = true
    },
    [fetchRegisters.rejected]: (state, action) => {
      state.error = true
    },
    [createRegister.pending]: (state, { meta }) => {
      // state.registersList = [...action.payload]
      state.currentRequestId = meta;
      state.created = true
      // state.loading = true
    },
    [createRegister.fulfilled]: (state, action) => {
      // state.registersList = [...action.payload]
      if(state.created) {
        state.refresh = !state.refresh;
        state.created = false;
      }
      // state.loading = false
    }
  }

})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, renderDetails, showForm } = registerSlice.actions

export default registerSlice.reducer
