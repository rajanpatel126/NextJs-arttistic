import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = ({ cart, AddToCart, RemoveFromCart, clearCart, subTotal }) => {
  // console.log(cart, AddToCart, RemoveFromCart, clearCart, subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md">
      <div className="logo">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            className="rounded-full ml-2 my-2"
            alt="logo"
            width={65}
            height={40}
          />
        </Link>
      </div>
      <div className="nav mx-2">
        <ul className="flex items-center font-semibold md:text-xl space-x-6">
          <Link href={"/tshirt"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/Kurties"}>
            <li>Kurties</li>
          </Link>
          <Link href={"/Shirts"}>
            <li>Shirts</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cursor-pointer cart absolute right-0 top-8 mx-5 md:text-2xl text-3xl"
      >
        <AiOutlineShoppingCart />
      </div>
      <div
        ref={ref}
        className="sideCart py-10 px-8 top-0 right-0 bg-pink-100 absolute transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 text-2xl text-black cursor-pointer"
        >
          <AiOutlineClose />
        </span>
        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold">Your Cart is empty.</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <>
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">{cart[k].iname}</div>
                    <div className="w-1/3 flex items-center justify-center space-x-3">
                      <AiFillMinusCircle
                        onClick={() => {
                          RemoveFromCart(
                            k,
                            1,
                            cart[k].qty,
                            cart[k].price,
                            cart[k].iname,
                            cart[k].size,
                            cart[k].varient
                          );
                        }}
                        className="cursor-pointer"
                      />
                      <span className="mx-2 text-sm">{cart[k].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          AddToCart(
                            k,
                            1,
                            cart[k].qty,
                            cart[k].price,
                            cart[k].iname,
                            cart[k].size,
                            cart[k].varient
                          );
                        }}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </li>
              </>
            );
          })}
          {/* <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">tshirt - Customised</div>
              <div className="w-1/3 flex items-center justify-center space-x-3">
                <AiFillMinusCircle className="cursor-pointer" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">tshirt - Customised</div>
              <div className="w-1/3 flex items-center justify-center space-x-3">
                <AiFillMinusCircle className="cursor-pointer" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">tshirt - Customised</div>
              <div className="w-1/3 flex items-center justify-center space-x-3">
                <AiFillMinusCircle className="cursor-pointer" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">tshirt - Customised</div>
              <div className="w-1/3 flex items-center justify-center space-x-3">
                <AiFillMinusCircle className="cursor-pointer" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer" />
              </div>
            </div>
          </li> */}
        </ol>
        <div className="flex">
          <button class="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" />
            CheckOut
          </button>
          <button
            onClick={clearCart}
            class="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
