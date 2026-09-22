import React from 'react';
import { FaStar, FaBookOpen } from "react-icons/fa";
import Image from "next/image";
import { IBook } from '@/types/books.type';
import Link from 'next/link';
interface Ibookprops {
    book: IBook
}

const Bookcard = ({ book }: Ibookprops) => {
    return (

        <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Book Image */}

            <div className="relative h-72 overflow-hidden bg-slate-100">

                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-indigo-600 shadow-md backdrop-blur-sm">
                        {book.category}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                    <FaStar className="text-yellow-400" size={13} />
                    {book.rating}
                </div>

            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col p-5">

                {/* Book Title */}
                <h2 className="line-clamp-1 text-xl font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-slate-500">
                    By{" "}
                    <span className="font-medium text-slate-700">
                        {book.author}
                    </span>
                </p>

                {/* Review */}
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Information */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">

                    <div>
                        <p className="text-xs text-slate-400">
                            Total Pages
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-700">
                            {book.totalPages} Pages
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">
                            Published
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                    <button
                        type="button"
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-indigo-700 hover:to-violet-700 active:scale-95"
                    >
                        <FaBookOpen size={14} />
                        View Details
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Bookcard;