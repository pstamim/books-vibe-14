
import Image from "next/image";
import banner from "../../../public/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto mt-8 px-4 md:mt-10 md:px-0">

      {/* Banner Container */}
      <div className="relative flex min-h-[350px] flex-col items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#E8F5E9] via-[#F1F8E9] to-[#E0F2F1] px-6 py-10 shadow-sm sm:px-10 md:flex-row md:px-16 md:py-10">

        {/* Decorative Background */}
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-green-200/40 blur-3xl"></div>

        <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-teal-200/30 blur-3xl"></div>

        {/* Banner Content */}
        <div className="relative z-10 w-full md:w-[55%]">

          {/* Small Badge */}
          <span className="inline-block rounded-full bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-green-700 shadow-sm">
            YOUR NEXT GREAT READ
          </span>

          {/* Heading */}
          <h1 className="mt-5 text-center font-serif text-4xl font-bold leading-[1.15] text-[#18231B] sm:text-5xl md:text-left md:text-[42px]">
            Books to freshen up
            <br />
            your bookshelf
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-md text-center text-sm leading-6 text-gray-600 md:text-left">
            Discover amazing stories, explore new worlds,
            and find your next favorite book.
          </p>

          {/* CTA Button */}
          <div className="mt-7 flex justify-center md:justify-start">
            <button className="rounded-lg bg-gradient-to-r from-[#16A34A] to-[#15803D] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-700/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              View The List
            </button>
          </div>

        </div>

        {/* Book Image */}
        <div className="relative z-10 mt-10 flex w-full items-center justify-center md:mt-0 md:w-[45%]">

          {/* Image Glow */}
          <div className="absolute h-52 w-52 rounded-full bg-white/60 blur-3xl"></div>

          <Image
            src={banner}
            alt="Featured book"
            width={300}
            height={340}
            priority
            className="relative h-[230px] w-auto rotate-5 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.20)] transition duration-600 rounded-2xl hover:rotate-0 hover:scale-105 sm:h-[270px] md:h-[290px]"
          />

        </div>

      </div>

    </section>
  );
};

export default Banner;