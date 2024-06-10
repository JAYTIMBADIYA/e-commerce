import React from 'react'

const OrderTotel = ({ subtotal, taxes, total, onPromoCode, onCheckout }) => {

    subtotal = isNaN(subtotal) ? 0 : subtotal;
    taxes = isNaN(taxes) ? 0 : taxes;
    total = isNaN(total) ? 0 : total;
  return (
    <div>
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl mt-4 py-3 px-4 max-md:py-2 max-md:px-3">
                <div>
                    <div>
                        <h2 className="font-semibold text-xl" >Order Totel</h2>
                    </div>
                    <hr className="mt-2"/>
                    <div className="my-10 max-md:my-3">
                        <div className="flex justify-between font-semibold text-[#999CAD] text-[16px]">
                            <p>Subtotal:</p>
                            <h5>{subtotal} QAR</h5> 
                        </div>
                        <div className="flex justify-between font-semibold text-[#999CAD] mt-3 text-[16px]">
                            <p>Taxes:</p>
                            <h5>{taxes.toFixed(2)} QAR</h5>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="flex justify-between font-semibold mt-3 text-[16px]">
                            <p>Total:</p>
                            <h5>{total.toFixed(2)} QAR</h5>
                        </div>
                    </div>
                    <div className="text-center mt-12 mb-5 max-md:mt-7">
                        <button className="bg-[#ffffff] text-[#1CC0A0] border-2 border-[#1CC0A0] px-10  py-3 rounded-md" onClick={onPromoCode}>
                            I have a promo code
                        </button>
                        <button className="bg-[#FFB800] text-[#ffffff] mt-6 px-10  py-3 rounded-md" onClick={onCheckout}>
                            Process Checkout
                        </button>
                    </div>
                </div>
         </div>
    </div>
  )
}

export default OrderTotel
