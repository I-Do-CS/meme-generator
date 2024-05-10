import trollFaceImg from "../assets/images/troll-face.png";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-950 to-gray-700 tracking-tight">
      <div className="container mx-auto flex cursor-default flex-col items-start justify-center px-10 py-8 md:flex-row md:items-center md:justify-start">
        <div className="flex items-center gap-3">
          <img src={trollFaceImg} alt="trollface logo" className="max-h-11" />
          <span className="text-2xl font-semibold text-white">
            Meme Generator
          </span>
        </div>
      </div>
    </header>
  );
}
