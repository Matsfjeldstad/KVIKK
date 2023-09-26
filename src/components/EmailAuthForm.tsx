"use client";
import React from "react";
import { FormEvent } from "react";
import { Button } from "@react-email/components";
import { signIn } from "next-auth/react";

type Props = {};

export default function EmailAuthForm({}: Props) {
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
        <form onSubmit={onSubmit}>
            <input
                name="email"
                id="email"
                type="email"
                className="border p-4"
                placeholder="Email"
                autoComplete="email"
            />

            <Button type="submit" className="">
                Sign in with Email
            </Button>
        </form>
    );
}
