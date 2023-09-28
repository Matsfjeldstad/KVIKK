"use client";
import React from "react";
import { FormEvent } from "react";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { Mail } from "@/assets/Icons";
import { MailIcon } from "lucide-react";

type Props = {
    type: "signin" | "signup";
};

function SigninButton({ type }: Props) {
    return (
        <Button
            className="bg-gray-100 flex items-center gap-2 text-gray-800 hover:bg-gray-50 border border-gray-400 hover:border-gray-500"
            onClick={() => {
                signIn("email", {
                    callbackUrl: "http://localhost:3000/",
                });
            }}
        >
            <MailIcon className="h-6 w-6" />
            {type === "signin" && "Sign in with Email"}
            {type === "signup" && "Sign up with Email"}
        </Button>
    );
}

export default function EmailAuthForm({ type }: Props) {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        // console.log(formData.get("email"));

        signIn("email", {
            email: formData.get("email"),
            callbackUrl: "http://localhost:3000/",
        });
    }
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <label className="flex flex-col gap-2">
                Email*
                <input
                    name="email"
                    id="email"
                    type="email"
                    className="border p-3 bg-gray-100 border-gray-400 rounded-md"
                    placeholder="John@example.com"
                    autoComplete="email"
                />
            </label>
            <SigninButton type={type} />
        </form>
    );
}
