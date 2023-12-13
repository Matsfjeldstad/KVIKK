"use client";
import React from "react";
import UpdateButton from "./UpdateButton";
import { serverAction } from "../account/actions/serverFormAction";
import { toast } from "sonner";

type Props = {
    data: {
        name: string | null | undefined;
        email: string;
        id: string;
    };
};

export default function AccountForm({ data }: Props) {
    return (
        <form
            action={async (formdata: FormData) => {
                const user = await serverAction(formdata);
                if (!user) {
                    toast.error(`some error happend!`);
                    return;
                }
                toast.success(`Profile updated!`);
            }}
            className="flex flex-col gap-6"
        >
            <div className="flex flex-col gap-2">
                <label className="flex flex-col gap-2">
                    <h3 className="font-bold">Your Email</h3>
                    <input
                        name="email"
                        type="email"
                        className="bg-gray-800 py-2 px-3 w-full border rounded-md"
                        defaultValue={data?.email!}
                    ></input>
                </label>
                <p className="text-sm text-gray-400">
                    This email will be automaticly set to as the sender on your
                    emails generated
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <label className="flex flex-col gap-2">
                    <h3 className="font-bold">Your Name</h3>
                    <input
                        name="name"
                        className="bg-gray-800 py-2 px-3 w-full border rounded-md"
                        defaultValue={data?.name!}
                        placeholder="Your name"
                    ></input>
                </label>
                <p className="text-sm text-gray-400">
                    This name will be automaticly set to as the sender on your
                    emails generated
                </p>
            </div>
            <input hidden defaultValue={data?.id} name="id" />
            <UpdateButton name={data?.name!} email={data?.email!} />
        </form>
    );
}
