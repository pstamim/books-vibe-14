
'use client'

import { BookContext } from "@/context/Booksprovider";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";



const Readbutton = ({ book }: { book: IBook }) => {

    const { readbook, setreadbook } = useContext(BookContext)



    const handleReadbtn = () => {
        console.log('btn triggerd', book);
       setreadbook([...readbook, book])
       toast.success(`${book.bookName} Read add`)
    }
    return <button onClick={() => handleReadbtn()} className="btn btn-outline px-8">
        Read Now
    </button>


};

export default Readbutton;
