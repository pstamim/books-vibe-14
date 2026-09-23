import Readbutton from '@/component/bookdetails/Readbutton';
import Wishlist from '@/component/bookdetails/Wishlist';
import { IBook } from '@/types/books.type';
import Image from 'next/image';


interface Iparamsprops {
    params: Promise<{
        id: number
    }>
}

const getbooks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksdata.json`,{cache:'no-store'})
    const data = await res.json()
    return data
}

const page = async ({ params }: Iparamsprops) => {
    const { id } = await params

    const bookdata = await getbooks()

    const book = bookdata.find((books: IBook) => String(books.bookId) === String(id)) as IBook;

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="card lg:card-side bg-base-100 shadow-xl border border-base-300 overflow-hidden max-w-6xl mx-auto">

                {/* Book Image */}
                <figure className="lg:w-2/5 bg-base-200 p-8 flex items-center justify-center">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={400}
                        height={550}
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 176px"
                    />
                </figure>

                {/* Book Details */}
                <div className="card-body lg:w-3/5 p-6 md:p-10">

                    {/* Category */}
                    <div className="flex flex-wrap gap-2">
                        <span className="badge badge-primary badge-outline">
                            {book.category}
                        </span>

                        {book.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="badge badge-ghost"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Name */}
                    <h1 className="text-3xl md:text-4xl font-bold mt-3">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="text-lg text-base-content/70">
                        by <span className="font-semibold text-base-content">
                            {book.author}
                        </span>
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mt-2">
                        <div className="rating">
                            <span className="text-yellow-400 text-xl">★</span>
                            <span className="font-bold text-lg">
                                {book.rating}
                            </span>
                        </div>

                        <span className="text-base-content/60">
                            • {book.totalPages} Pages
                        </span>
                    </div>

                    <div className="divider"></div>

                    {/* Review */}
                    <div>
                        <h3 className="text-xl font-bold mb-2">
                            About this book
                        </h3>

                        <p className="text-base-content/70 leading-7">
                            {book.review}
                        </p>
                    </div>

                    {/* Book Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">

                        <div className="bg-base-200 rounded-xl p-4">
                            <p className="text-sm text-base-content/60">
                                Publisher
                            </p>
                            <p className="font-semibold mt-1">
                                {book.publisher}
                            </p>
                        </div>

                        <div className="bg-base-200 rounded-xl p-4">
                            <p className="text-sm text-base-content/60">
                                Published Year
                            </p>
                            <p className="font-semibold mt-1">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div className="bg-base-200 rounded-xl p-4">
                            <p className="text-sm text-base-content/60">
                                Total Pages
                            </p>
                            <p className="font-semibold mt-1">
                                {book.totalPages} Pages
                            </p>
                        </div>

                        <div className="bg-base-200 rounded-xl p-4">
                            <p className="text-sm text-base-content/60">
                                Category
                            </p>
                            <p className="font-semibold mt-1">
                                {book.category}
                            </p>
                        </div>

                    </div>

                    {/* Button */}
                    <div className="card-actions mt-6">
                        <Wishlist book={book} />

                        <Readbutton book={book} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;