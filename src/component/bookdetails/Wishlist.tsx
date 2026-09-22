
'use client'

import { BookContext } from "@/context/Booksprovider";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";


const Wishlist = ({ book }: { book: IBook }) => {

    const { Wishlist, setWishlist } = useContext(BookContext)

    const handleReadbtn = () => {
        console.log('btn triggerd', book);
        setWishlist([...Wishlist, book])
        toast.success(`${book.bookName} wishlist add`)
    }
    return <button onClick={()=>handleReadbtn()} className="btn btn-primary px-8">
        Add to Wishlist
    </button>
};
export default Wishlist;
