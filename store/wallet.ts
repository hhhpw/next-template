import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const walletSlice = createSlice({
    name: "items",
    initialState: {
        walletInfo: {},
        netWork: "",
        account: "",
    },
    reducers: {
        setAccount: (state, action) => {
            state.account = action.payload;
        },
        setNetWork: (state, action) => {
            state.netWork = action.payload;
        }
    },

    //   extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //       state.server = action.payload.items.server;
    //     }
    //   }
});

export const { setAccount, setNetWork } = walletSlice.actions;

// const { setServerItems, setItems } = walletSlice.actions;

// export const getServerItems = () => async (dispatch) => {
//   const query = `
//     {
//       items {
//         id
//         name
//         price
//       }
//     }
//   `;
//   const res = await request(
//     "https://xgs67.sse.codesandbox.io/api/graphql",
//     query
//   );
//   console.log(res);
//   // dispatch(setServerItems(res.items));
// };

// export const getItems = () => async (dispatch) => {
//   const query = `
//     {
//       items {
//         id
//         name
//         price
//       }
//     }
//   `;
//   const res = await request("/api/graphql", query);
//   dispatch(setItems(res.items));
// };

/*
export const getItems = createAsyncThunk("items/status", async () => {
  const query = `
    {
      items {
        id
        name
        price
      }
    }
  `;
  const res = await request("/api/graphql", query);
  return res.items;
});

const walletSlice = createSlice({
  name: "items",
  initialState: {
    loading: "idle",
    items: []
  },
  /*
  reducers: {
    loadSuccess(state, action) {
      // return [...state, ...action.payload];
      return state.items.concat(action.payload);
    }
  }
  /
  extraReducers: {
    [getItems.pending](state) {
      state.loading = "pending";
      return state;
    },
    [getItems.fulfilled](state, action) {
      // state.items = action.payload;
      state.loading = "idle";
      state.items = state.items.concat(action.payload);
      return state;
    }
  }
});
*/

/*
export const { loadSuccess } = walletSlice.actions;

export const loadItems = () => async (dispatch) => {
  const query = `
    {
      items {
        id
        name
        price
      }
    }
  `;
  const res = await request("/api/graphql", query);
  dispatch(loadSuccess(res.items));
};
*/

export default walletSlice.reducer;
