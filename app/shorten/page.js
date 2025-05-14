"use client";
import React, { useState } from 'react';
import Link from 'next/link'


const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState("");

    const handleChange = (e) => {
        if (e.target.placeholder === "Enter your URL") {
            seturl(e.target.value);
        } else {
            setshorturl(e.target.value);
        }

    }

    const generate = (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
                alert(result.message);
                seturl("");
                setshorturl("");
            })
            .catch((error) => console.error(error));
    }


    return (
        <div className='w-[90vw] md:w-[70vw] mx-auto text-center text-white min-h-[calc(100vh-6rem)] 
            flex flex-col items-center justify-center overflow-hidden'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8'>
                Generate Your Short URL
            </h1>
            
            <form onSubmit={generate} className='flex flex-col gap-4 items-center justify-center w-full max-w-2xl'>
                <input 
                    type="url" 
                    required
                    onChange={handleChange}
                    value={url}
                    placeholder='Enter your URL'
                    className='bg-white text-black rounded-full w-full sm:w-3/4 md:w-4/5
                        px-6 py-3 outline-none focus:ring-2 focus:ring-blue-500 
                        transition-all duration-300 hover:scale-105 focus:scale-105
                        transform-gpu shadow-md hover:shadow-lg'
                />

                <input 
                    type="text"
                    onChange={handleChange}
                    value={shorturl}
                    required
                    placeholder='Enter your prefered short URL text'
                    className='bg-white text-black rounded-full w-full sm:w-3/4 md:w-4/5
                        px-6 py-3 outline-none focus:ring-2 focus:ring-blue-500 
                        transition-all duration-300 hover:scale-105 focus:scale-105
                        transform-gpu shadow-md hover:shadow-lg'
                />

                <button 
                    type="submit" 
                    className='w-full sm:w-auto min-w-[160px] bg-blue-950 px-8 py-3 
                        rounded-xl hover:bg-blue-900 hover:scale-105 transition-all 
                        duration-300 text-lg text-white shadow-lg hover:shadow-xl'
                >
                    Generate
                </button>
            </form>
            
            {generated && (
                <div className='mt-8 space-y-2'>
                    <span className='text-white text-base'>Your Link: </span>
                    <code>
                        <Link 
                            href={generated} 
                            target='_blank' 
                            className='text-blue-200 hover:underline break-all text-base'
                        >
                            {generated}
                        </Link>
                    </code>
                </div>
            )}
        </div>
    )
}

export default Shorten
