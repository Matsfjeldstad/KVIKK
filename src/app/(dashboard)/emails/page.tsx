
import React from "react";
import DraftList from "./draftList";

type Props = {};

export default function page({}: Props) {
    return (
        <section className="p-20">
            <h1>Your drafts</h1>
            {/* <search>
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent p-2 border rounded-md"
                />
            </search> */}

            <div>
                <DraftList />
            </div>
        </section>
    );
}
