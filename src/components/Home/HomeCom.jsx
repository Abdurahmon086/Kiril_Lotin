import { useEffect, useState } from "react"

function HomeCom() {

    const [data, setData] = useState('')
    const [text, setText] = useState('')

    useEffect(() => {

        fetch('/api/hello', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text
            }),
        })
            .then((res) => res.json())
            .then((result) => setData(result == null ? '' : result))
            .catch((err) => console.log(err + 'error'))
    }, [text])


    return (
        <div className="container mx-auto p-3 ">
            <form action="#" className="mt-12 grid grid-cols-2 gap-7 max-sm:grid-cols-1" >
                <label htmlFor="input" className=" flex flex-col"> <p className="text-black text-2xl font-bold mb-2  ml-3"> Input <span className=" ml-3 text-sm text-gray-500">UZB | RUS</span></p>
                    <textarea cols="30" id="input" placeholder="Write somethink" className="h-[500px] rounded-md text-slate-950 p-3 outline-none shadow focus:border-4 resize-none" onChange={(e) => setText(e.target.value)}></textarea>
                </label>
                <label htmlFor="output" className=" flex flex-col"> <p className="text-black text-2xl font-bold mb-2 ml-3"> Output </p>
                    <textarea cols="30" id="output" className="h-[500px] rounded-md text-slate-950 p-3 outline-none bg-white  shadow resize-none" disabled defaultValue={data} placeholder="This is where your answer comes from "></textarea>
                </label>
            </form>
        </div>
    )
}

export default HomeCom