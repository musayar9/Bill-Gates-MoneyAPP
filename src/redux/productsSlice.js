import { createSlice } from "@reduxjs/toolkit"
import products from '../Api/products'

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: products,
        money: Number(0),
        totalMoney: Number(100000000000),
        invoice: false



    },

    reducers: {


        updateAmount: (state, action) => {
            const productAmount = state.products.findIndex((product) => product.id === action.payload.id)
            state.products[productAmount].amount = action.payload.amount
            state.money = state.totalMoney - (state.products.reduce((acc, product) => acc + product.amount * product.price, 0))

            if (state.money === 100000000000) {
                state.invoice = false
            } else {
                state.invoice = true
            }
        },



    }
})
export const { updateAmount } = productsSlice.actions
export default productsSlice.reducer