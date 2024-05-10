import { useEffect, useState } from "react";
import Form from "./Form";
import MemeContainer from "./MemeContainer";

export default function Main() {
  const [memesData, setMemesData]: [memesData: any, setMemesData: any] =
    useState();

  const [meme, setMeme] = useState({
    topText: "That's",
    bottomText: "What she said",
    url: "",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemesData(() => data.data.memes);
      });
  }, []);

  function generateMeme(e: any): void {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * memesData.length);
    const memeData = memesData[randomIndex];

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        url: memeData.url,
      };
    });
  }

  return (
    <main>
      <div className="container mx-auto">
        <Form generateMeme={generateMeme} meme={meme} setMeme={setMeme} />
        <MemeContainer meme={meme} />
      </div>
    </main>
  );
}
