"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn, signOut, } from "next-auth/react";

type Props = {};

export function GoogleSignInButton({}: Props) {
    const handleClick = () => {
        signIn("google");
    };
    return <Button onClick={handleClick}>Sign in with Google</Button>;
}
export function GithubSignInButton({}: Props) {
    const handleClick = () => {
        signIn("github");
    };
    return <Button onClick={handleClick}>Sign in with Github</Button>;
}
export function EmailSignInButton({}: Props) {
    const handleClick = () => {
        signIn("email", {
            email: "mats.fjeldstad@outlook.com",
            callbackUrl: "http://localhost:3000/",    
        });
    };
    return <Button type="button" onClick={handleClick}>Sign in with Email</Button>;
}
export function SignOutButton({}: Props) {
    const handleClick = () => {
        signOut();
    };
    return <Button onClick={handleClick} variant={"destructive"}>Sign in with Github</Button>;
}
