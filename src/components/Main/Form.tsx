import { MouseEventHandler } from "react";

export default function Form({
  generateMeme,
  meme,
  setMeme,
}: {
  generateMeme: MouseEventHandler;
  meme: { topText: string; bottomText: string; url: string };
  setMeme: React.Dispatch<
    React.SetStateAction<{
      topText: string;
      bottomText: string;
      url: string;
    }>
  >;
}) {
  return (
    <div role="form" className="py-6">
      <div className="items flex flex-col items-center gap-6">
        <div className="flex min-w-full flex-col gap-3 px-4 text-center md:flex-row md:justify-center md:gap-5">
          <div className="space-y-2 text-left md:min-w-[36%]">
            <label htmlFor="top-text" className="pl-1">
              Top Text
            </label>
            <input
              type="text"
              name="topText"
              id="topText"
              value={meme.topText}
              onChange={handleFormChange}
              placeholder="That's..."
              className="min-w-full rounded-lg border-2 border-gray-800 bg-gray-200 p-2 text-center outline-gray-700"
            />
          </div>
          <div className="space-y-2 text-left md:min-w-[36%]">
            <label htmlFor="bottom-text" className="pl-1">
              Bottom Text
            </label>
            <input
              type="text"
              name="bottomText"
              id="bottomText"
              value={meme.bottomText}
              onChange={handleFormChange}
              placeholder="What she said!"
              className="min-w-full rounded-lg border-2 border-gray-800 bg-gray-200 p-2 text-center outline-gray-700"
            />
          </div>
        </div>

        <div className=" flex min-w-full justify-center">
          <button
            onClick={generateMeme}
            className="  min-w-[72%] cursor-pointer rounded-lg bg-gradient-to-b from-gray-700 to-gray-800 px-4 py-3 tracking-tight text-white duration-150 hover:opacity-90 active:from-gray-950 active:to-gray-950"
          >
            🖼️ GET A NEW MEME IMAGE 🖼️
          </button>
        </div>
      </div>
    </div>
  );

  function handleFormChange(e: any): void {
    const { name, value } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
}
