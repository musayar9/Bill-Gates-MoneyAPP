import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAmount } from '../redux/productsSlice'


function ProductsList(props) {
    const money = useSelector((state) => state.products.money)
    const { id, price, name, link } = props;
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(Number(0))
    useEffect(() => {
        dispatch(updateAmount({ id, amount }))
    })

    const buyProduct = () => {
        setAmount(amount + 1)
    }
    const sellProduct = () => {
        if (amount > 0) {
            setAmount(amount - 1)
        }

    }



    const handleInput = (e) => {
        e.preventDefault()
        const newAmount = e.target.value
        console.log(newAmount)
        const maxAmount = Math.floor(money / price) + amount
        // if (isNaN(newAmount) || newAmount < 0) return;
        if ( newAmount && newAmount > 0) {
            if (newAmount > maxAmount && money >= 0) {
                setAmount(maxAmount)
            } else {
                setAmount(parseInt(newAmount))
            }
        } else {
            setAmount(0)
        }


    }

    return (
        <div className='bg-white p-3'>
            <div className='flex flex-col items-center justify-center '>
                <img src={link} alt={name} className='object-contain w-[150px] h-[150px] mt-4' />

                <p className='font-bold text-2xl text-[#333] mt-2'>{name}</p>
                <p className='text-xl font-bold text-[#24c486]'>{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)}</p>
            </div>


            <div className='flex items-center justify-around mt-4 md:space-x-2'>
                <button disabled={amount < 1} onClick={sellProduct} className={`disabled:cursor-not-allowed font-semibold   px-8 md:px-5  py-2 rounded-md ${amount > 0 ? "bg-gradient-to-t from-[#f53b82,#f53b57] to-[#f53b57] text-white" : "bg-gray-300 text-[#333]"}`} >Sell</button>
                <input className='px-6 py-2 w-20 lg:w-24 text-center border border-gray-400 rounded-lg' value={Number(amount) || 0} onChange={handleInput} />
                <button disabled={price > money} onClick={buyProduct} className={`disabled:cursor-not-allowed font-semibold px-8 md:px-5 py-2 rounded-md ${price < money ? "bg-gradient-to-t from-[#2ecc71] to-[#1abc9c] text-white" : "bg-gray-300 text-[#333]"}`}>Buy</button>

            </div>


        </div>
    )
}

export default ProductsList
