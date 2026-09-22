'use client'

import { IBook } from '@/types/books.type';
import React, { createContext, ReactNode, useState } from 'react';

interface IbookContext {
    readbook: IBook[]
    setreadbook: React.Dispatch<React.SetStateAction<IBook[]>>
    Wishlist: IBook[]
    setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>
    Manuber: boolean
    setmanuber: React.Dispatch<React.SetStateAction<boolean>>
}


export const BookContext = createContext<IbookContext>({
    readbook: [],
    setreadbook: () => { },
    Wishlist: [],
    setWishlist: () => { },
    Manuber: false,
    setmanuber: () => { },
})



const Booksprovider = ({ children }: { children: ReactNode }) => {
    const [readbook, setreadbook] = useState<IBook[]>([])
    const [Wishlist, setWishlist] = useState<IBook[]>([])
    const [Manuber, setmanuber] = useState<boolean>(false)

    const shearddata = {
        Wishlist,
        setWishlist,
        readbook,
        setreadbook,
        Manuber,
        setmanuber,
    }


    return (
        <BookContext.Provider value={shearddata}>{children}</BookContext.Provider>
    );
};

export default Booksprovider;