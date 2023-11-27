import React from "react";
import DraftList from "./draftList";

type Props = {};

export default function page({}: Props) {
    return (
        <>
            <div className="w-full h-full absolute top-0 left-0 opacity-5 pointer-events-none bg-[radial-gradient(at_top_left,_#F8F8F8_0%,_transparent_80%)] z-0" />
            <section className="p-20 relative z-10">
                <h1 className="text-2xl font-bold">Your drafts</h1>
                <form className="mt-10">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent p-2 border rounded-md"
                    />
                </form>
                <div>
                    <DraftList />
                </div>
            </section>
        </>
    );
}
