'use client'
import { BookContext } from '@/context/Booksprovider';
import React, { useContext } from 'react';

import { IBook } from '@/types/books.type';
import Image from 'next/image';

const Listedbook = () => {
    const { readbook, Wishlist } = useContext(BookContext)
    console.log(readbook, 'readbook', Wishlist, 'wislist');

    return (

        <div className="tabs tabs-lift container mx-auto mt-30">
            <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Book : ${readbook.length}`} />
            <div className="tab-content bg-base-100 border-base-300 p-6">
                {readbook.length > 0 ? (
                    readbook.map((book: IBook) => {
                        return <div key={book.bookId} className="w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col sm:flex-row gap-6">

                            {/* Book Image */}
                            <div className="w-full sm:w-44 h-60 sm:h-56 shrink-0 overflow-hidden rounded-xl">
                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    height={450}
                                    width={300}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Book Content */}
                            <div className="flex flex-col justify-between flex-1">

                                <div>
                                    {/* Category + Rating */}
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
                                            {book.category}
                                        </span>

                                        <span className="text-sm font-semibold text-yellow-500">
                                            ⭐ {book.rating}
                                        </span>
                                    </div>

                                    {/* Book Name */}
                                    <h2 className="text-2xl font-bold text-slate-800 mt-3">
                                        {book.bookName}
                                    </h2>

                                    {/* Author */}
                                    <p className="text-slate-500 mt-1">
                                        By <span className="font-medium text-slate-700">{book.author}</span>
                                    </p>

                                    {/* Review */}
                                    <p className="text-slate-500 text-sm leading-6 mt-3 line-clamp-2">
                                        {book.review}
                                    </p>

                                    {/* Book Info */}
                                    <div className="flex flex-wrap gap-3 mt-4 text-sm">
                                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600">
                                            📄 {book.totalPages} Pages
                                        </span>

                                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600">
                                            📅 {book.yearOfPublishing}
                                        </span>

                                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600">
                                            🏷️ {book.publisher}
                                        </span>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {book.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-600"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom */}
                                <div className="flex justify-end mt-5">
                                    <button className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-indigo-600 transition-colors">
                                        View Details →
                                    </button>
                                </div>

                            </div>
                        </div>
                    })
                ) : (
                    <div className="col-span-full flex items-center justify-center py-20">
                        <h2 className="text-2xl font-bold text-gray-500">
                            {`${readbook.length === 0 ? 'Read book Not Found' : ''}`}
                        </h2>
                    </div>
                )}
            </div>

            <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist book : ${Wishlist.length}`} defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6">
                {readbook.length > 0 ? (
                    readbook.map((book: IBook) => {
                        return <div key={book.bookId} className="w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col sm:flex-row gap-6">

                            {/* Book Image */}
                            <div className="w-full sm:w-44 h-60 sm:h-56 shrink-0 overflow-hidden rounded-xl">
                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    height={450}
                                    width={300}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Book Content */}
                            <div className="flex flex-col justify-between flex-1">

                                <div>
                                    {/* Category + Rating */}
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
                                            {book.category}
                                        </span>

                                        <span className="text-sm font-semibold text-yellow-500">
                                            ⭐ {book.rating}
                                        </span>
                                    </div>

                                    {/* Book Name */}
                                    <h2 className="text-2xl font-bold text-slate-800 mt-3">
                                        {book.bookName}
                                    </h2>

                                    {/* Author */}
                                    <p className="text-slate-500 mt-1">
                                        By <span className="font-medium text-slate-700">{book.author}</span>
                                    </p>

                                    {/* Review */}
                                    <p className="text-slate-500 text-sm leading-6 mt-3 line-clamp-2">
                                        {book.review}
                                    </p>

                                    {/* Book Info */}
                                    <div className="flex flex-wrap gap-3 mt-4 text-sm">
                                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600">
                                            📄 {book.totalPages} Pages
                                        </span>

                                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600">
                                            📅 {book.yearOfPublishing}
                                        </span>

                                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600">
                                            🏷️ {book.publisher}
                                        </span>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {book.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-600"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom */}
                                <div className="flex justify-end mt-5">
                                    <button className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-indigo-600 transition-colors">
                                        View Details →
                                    </button>
                                </div>

                            </div>
                        </div>
                    })
                ) : (
                    <div className="col-span-full flex items-center justify-center py-20">
                        <h2 className="text-2xl font-bold text-gray-500">
                            {`${Wishlist.length === 0 ? 'Wishlist book Not Found' : ''}`}
                        </h2>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Listedbook;