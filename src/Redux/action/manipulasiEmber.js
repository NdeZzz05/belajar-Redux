import { createSlice } from "@reduxjs/toolkit";

export const manipulasiEmber = createSlice({
  // nama di sesuaikan dengan kebutuhan
  name: "ember",
  // isi/data default yang dipunya
  initialState: {
    bajuKotor: 10,
    air: "keruh",
    detergent: "daia",
  },
  // reducer adalah aksi"/fungsi" yang bisa kalian lakukan, untuk merubah/memamipulasi value yang ada diember
  reducers: {
    kurangiBajuKotor: (state) => {
      state.bajuKotor = state.bajuKotor - 1;
    },
    tambahBajuKotor: (state) => {
      state.bajuKotor = state.bajuKotor + 1;
    },
    gantiDetergent: (state, action) => {
      state.detergent = action.payload.detergent;
    },
  },
});

export const { kurangiBajuKotor, tambahBajuKotor } = manipulasiEmber.actions;
export default manipulasiEmber.reducer;
