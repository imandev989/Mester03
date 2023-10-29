import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    topAd: {
        pic: '/images/configsImages/tabligh.jpg',
        url: 'https://www.google.com/',
        backColor: '#0172FF'
    },
    sidebarToggle:false,
    searchToggle:false,
}

// export const fetchConfig = createAsyncThunk("config/fetchConfig", async () => {
//     // const response = await getAllUsers();
//     // return response.data;
//     return initialState
// });
 


const configsSlice = createSlice({
    name:"config",
    initialState: initialState,
    reducers: {
        sidebarChange: (state) => {state.sidebarToggle = ! state.sidebarToggle},
        searchChange: (state) => {state.searchToggle = ! state.searchToggle}

    },


    // extraReducers(builder) {
    //     builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //       return action.payload;
    //       //with returing a new result Immer will replace existing state with whatever we return

})


// export const getConfig = (state) => state.config;
export const {sidebarChange,searchChange} = configsSlice.actions;

export default configsSlice.reducer;