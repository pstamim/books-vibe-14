import React from 'react';
import Bookcard from '../sheard/Bookcard';
import { IBook } from '@/types/books.type';


const getbooks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksdata.json`, { cache: 'no-store' })
    const data = await res.json()
    return data
}


const Books = async () => {
    const booksdata = await getbooks()

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 container mx-auto px-4'>
            {
                booksdata.map((book: IBook) => {
                    return <Bookcard key={book.bookId} book={book} />
                })
            }
        </div>
    );
};

export default Books;