import michael from "../../assets/images/thatswhatshesaid.jpg";

export default function MemeContainer({
  meme,
}: {
  meme: {
    topText: string;
    bottomText: string;
    url: string;
  };
}) {
  const src = !meme.url ? michael : meme.url;

  return (
    <div className="container relative mx-auto  flex items-center justify-center  px-4 py-4">
      <img
        src={src}
        alt=""
        className=" bottom-0 top-0 min-w-80 max-w-[1000px] rounded-lg border-4 border-gray-700"
      />
      <p className="text-outline absolute top-10 max-w-[14ch] cursor-default text-center text-4xl font-black uppercase text-white md:top-11  md:text-5xl">
        {meme.topText}
      </p>
      <p className=" text-outline absolute bottom-10 max-w-[14ch] cursor-default text-center text-4xl font-black uppercase text-white md:bottom-11 md:text-5xl ">
        {meme.bottomText}
      </p>
    </div>
  );
}
