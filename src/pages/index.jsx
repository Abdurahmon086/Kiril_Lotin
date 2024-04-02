import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import xIcon from "../../public/x.svg";
import changer from "../components/hello";

export default function Home() {
  const [data, setData] = useState("");
  const [text, setText] = useState("");

  const handleToggle = () => {
    setText("");
  };
  
  useEffect(() => {
    setData(changer(text));
  }, [text]);

  return (
    <>
      <Head>
        <title>Next app</title>
      </Head>
      <div className="container mx-auto p-3 ">
        <form action="#" className="mt-12 grid grid-cols-2 gap-7 max-sm:grid-cols-1">
          <div className="relative">
            <label htmlFor="input" className="  flex flex-col">
              <p className="text-black text-2xl font-bold mb-2  ml-3">
                Input <span className=" ml-3 text-sm text-gray-500">UZB | RUS</span>
              </p>
              <textarea
                cols="30"
                id="input"
                value={text}
                placeholder="Write somethink"
                className="relative h-[500px] rounded-md text-slate-950 p-3 outline-none shadow focus:border-4 resize-none"
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </label>
            <div
              onClick={handleToggle}
              style={text ? { display: "flex" } : { display: "none" }}
              className="absolute top-14 right-3 text-black w-8 h-8 shadow cursor-pointer bg-slate-200 rounded-full flex items-center justify-center"
            >
              <Image src={xIcon} alt="x icon" />
            </div>
          </div>
          <label htmlFor="output" className=" flex flex-col">
            <p className="text-black text-2xl font-bold mb-2 ml-3"> Output </p>
            <textarea
              cols="30"
              id="output"
              className="h-[500px] rounded-md text-slate-950 p-3 outline-none bg-white  shadow resize-none"
              disabled
              defaultValue={data}
              placeholder="This is where your answer comes from "
            ></textarea>
          </label>
        </form>
      </div>
    </>
  );
}
