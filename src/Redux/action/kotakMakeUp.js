import { createSlice } from "@reduxjs/toolkit";

export const kotakMakeUp = createSlice({
  // nama di sesuaikan dengan kebutuhan
  name: "kotak",
  // isi/data default yang dipunya
  initialState: {
    jumlahMakeUp: 10,
    namaBrand: "Lato Lato",
    penerbit: "Sari Roti",
    listBedak: ["bedak_tabur", " bedak_foundation", " bedak_halus"],
  },
  // reducer adalah aksi"/fungsi" yang bisa kalian lakukan, untuk merubah/memamipulasi value yang ada diember
  reducers: {
    kurangiMakeUp: (state) => {
      if (state.jumlahMakeUp >= 1) {
        state.jumlahMakeUp = state.jumlahMakeUp - 1;
      }
    },
    tambahMakeUp: (state) => {
      state.jumlahMakeUp = state.jumlahMakeUp + 1;
    },
    gantiBrand: (state, action) => {
      state.namaBrand = action.payload.namaBrand;
      state.penerbit = action.payload.penerbit;
    },

    hapusListBedak: (state) => {
      state.listBedak = state.listBedak.slice(0, -1);
    },

    tambahListBedak: (state, action) => {
      state.listBedak.push(action.payload);
    },
  },
});
// export fungsi yang akan digunakan
export const { kurangiMakeUp, tambahMakeUp, gantiBrand, hapusListBedak, tambahListBedak } = kotakMakeUp.actions;
export default kotakMakeUp.reducer;
