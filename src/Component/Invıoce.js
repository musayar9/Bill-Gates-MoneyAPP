
import { useSelector } from 'react-redux'

function Invioce() {

    const {products, money, totalMoney, invoice}= useSelector((state)=>state.products)


  return (
    <>
    {invoice && (
        <div className='w-full '>
        <div className='container     max-w-5xl mt-5 mb-5'>
            <div className='bg-white text-[#333] flex flex-col items-center justify-center p-1'>
                <h2 className='text-gray-700 font-bold text-3xl mt-2'>Your Receipt</h2>
    
                <div className='flex flex-col max-w-md mx-auto my-2'>
                        {
                            products.map((product)=>product.amount > 0 &&(
                                <div className='grid grid-cols-3 gap-2 ' key={product.id}>
                                    <h6 className='font-bold text-[18px]' >{product.name}</h6>
                                    <p className='text-center font-bold text-[18px]'>x {product.amount}</p>
                                    <p className='text-end font-bold text-[18px] text-[#24c486]'>{new Intl.NumberFormat('en-us',{style:"currency", currency:"USD", currencyDisplay:"symbol", notation:"compact", compactDisplay:"long",   minimumFractionDigits: 0}).format(product.amount*product.price)}</p>
                                </div>
                            ))
                        }
    
    
                        <div className='flex flex-col mx-0 my-[15px] jusrify-between border-t-2 font-bold text-[18px] max-w-full'>
                            <div className='grid grid-cols-2 gap-2'>
                                <p className='font-bold text-[20px] text-gray-700'>Total Money</p>
                                <p className='text-end text-[#24c486] font-bold'>{new Intl.NumberFormat("en-us",{style:"currency", currency:"USD", minimumFractionDigits:"0"}).format(totalMoney-money)}</p>
                            </div>
                        </div>
                </div>
            </div>
    
        </div>
    
        </div>
    )}
    
   
      
    </>
  )
}

export default Invioce
