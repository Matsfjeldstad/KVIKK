import React from "react";

type Props = {};

export default async function page({}: Props) {
    const string = `Dear [Landlord],

I am writing to express my frustration about the extremely poor internet connection in my building. As a digitally connected tenant, I depend on the connection to do both work and leisure activities, and I am unable to do either of them due to ongoing problems with the internet.

 Please send a technician to my building to repair the issues.`;
    return (
        <main>
            <div className="py-40 text-white mx-auto max-w-6xl flex gap-20">
                <section className="flex flex-col gap-6 w-full">
                    <h1>Drafts</h1>
                    <label>
                        <input
                            type="text"
                            className="p-4 bg-transparent border border-gray-700 w-full rounded-md"
                            placeholder="Search"
                        />
                    </label>
                    <div className="p-6 border flex flex-col gap-6 border-gray-500/50 rounded-3xl w-full bg-gray-600/20">
                        <div className="text-gray-500">Yesterday</div>
                        <div
                            data-active
                            className="border-l p-4 cursor-pointer duration-300 hover:bg-gray-400/10 data-[active]:bg-gray-400/10"
                        >
                            Subject: Rental car at Gardemoen Airport
                        </div>
                        {/* <div className="text-gray-500">September 10th 2023</div>
                        <div className="border-l p-4 cursor-pointer duration-300 hover:bg-gray-400/10 data-[active]:bg-gray-400/10">
                            Subject: Rental car at Gardemoen Airport
                        </div>
                        <div className="border-l p-4 cursor-pointer duration-300 hover:bg-gray-400/10 data-[active]:bg-gray-400/10">
                            Subject: Rental car at Gardemoen Airport
                        </div>
                        <div className="border-l p-4 cursor-pointer duration-300 hover:bg-gray-400/10 data-[active]:bg-gray-400/10">
                            Subject: Rental car at Gardemoen Airport
                        </div>
                        <div className="text-gray-500">September 8th 2023</div>
                        <div className="border-l p-4 cursor-pointer duration-300 hover:bg-gray-400/10 data-[active]:bg-gray-400/10">
                            Subject: Rental car at Gardemoen Airport
                        </div> */}
                    </div>
                </section>
                <div className="p-10 w-full rounded-3xl flex bg-gray-500/0 gap-10 flex-col">
                    <div className="flex justify-between items-center">
                        <h3>Subject: subject test blabla</h3>
                        <button className="w-fit bg-slate-50 text-gray-800 py-2 px-4 text-sm rounded-md">
                            Edit Draft
                        </button>
                    </div>
                    <p className="whitespace-pre-line">{string}</p>
                </div>
            </div>
        </main>
    );
}
