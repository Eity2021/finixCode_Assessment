import React, { useState } from "react";
import { X, CreditCard, Banknote } from "lucide-react";
import tdesignMoneyFilled from "../../assets/image/modal/tdesign_money-filled.png";
import arcticonsBkash from "../../assets/image/modal/arcticons_bkash.png";
import hugeiconsPayment from "../../assets/image/modal/hugeicons_payment-02.png";
export default function PaymentModal({ isOpen, setIsOpen }) {
  const [paymentMethod, setPaymentMethod] = useState("bkash");

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-[#34735F] rounded-lg shadow-xl text-white">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-cream-100 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header with Icon */}
            <div className="pt-12 pb-6 flex flex-col items-center">
              <div>
                <div>
                  <img src={tdesignMoneyFilled} alt="tdesignMoneyFilled" />
                </div>
              </div>
              <h2 className="text-[32px] font-[700] text-center text-[#FDE8CD] text-cream-100">
                Choose Payment <br></br> Method
              </h2>
            </div>

            {/* Payment Options */}
            <div className="px-8 pb-6 space-y-4">
              {/* bKash Option */}
              <label className="flex items-start space-x-3 cursor-pointer">
                <div className="flex items-center h-6 mt-0.5">
                  <input
                    type="radio"
                    name="payment"
                    className="w-5 h-5 accent-cream-100"
                    checked={paymentMethod === "bkash"}
                    onChange={() => setPaymentMethod("bkash")}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-[500]  text-[20px]">bKash</span>
                    {/* <CreditCard className="w-4 h-4 ml-2 text-cream-100" /> */}
                    <img src={arcticonsBkash} alt="arcticonsBkash" />
                  </div>
                  <p className="font-[400]  text-[16px]  mt-1">
                    Send the payment now via bKash to confirm your spot
                    instantly.
                  </p>
                </div>
              </label>

              {/* Cash Option */}
              <label className="flex items-start space-x-3 cursor-pointer">
                <div className="flex items-center h-6 mt-0.5">
                  <input
                    type="radio"
                    name="payment"
                    className="w-5 h-5 accent-cream-100"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-[500]  text-[20px]">Cash</span>
                    <img src={hugeiconsPayment} alt="hugeiconsPayment" />
                  </div>
                  <p className="font-[400]  text-[16px] mt-1">
                    Pay the event fee directly to the host before the game
                    starts.
                  </p>
                </div>
              </label>
            </div>

            {/* Continue Button */}
            <div className="px-8 pb-8">
              <button
                onClick={() => {
                  if (paymentMethod) {
                    alert(`Continuing with ${paymentMethod} payment`);
                    setIsOpen(false);
                  } else {
                    alert("Please select a payment method");
                  }
                }}
                className="w-full py-[16px] bg-[#2B2B2B] text-[18px] text-white font-medium rounded-[100px] transition-colors"
                disabled={!paymentMethod}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
