import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const money = useSelector((state)=>state.products.money)

    console.log(money)

  return (
    <>
      <div className='w-full mt-6'>
        <div className='container p-4 bg-white max-w-5xl h-[280px] flex flex-col items-center justify-center '>
            <img  alt="Bill Gattes" src="https://neal.fun/spend/billgates.jpg" className='rounded-full w-44 h-44 p-5'/>
            <p className='text-3xl font-bold mt-5 flex flex-col items-center justify-center text-[#333] mb-3 -mt-2'>     Spend Bill Gates Money</p>
        </div>

          
      </div>
      
      <div className='sticky top-0 mt-2 w-full z-40' >
            <div className='container rounded-xs bg-gradient-to-r from-[#2ecc71] to-[#1abc9c] max-w-5xl flex flex-col items-center justify-center' >
                <p className='text-4xl p-6 font-bold text-white'>  { new Intl.NumberFormat('en-us',{style:'currency', currency:'USD', minimumFractionDigits:0}).format(money)}</p>
            </div>

        </div>
    </>
  )
}

export default Header
