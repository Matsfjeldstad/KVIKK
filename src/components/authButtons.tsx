"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { GithubIcon, GoogleIcon } from "@/assets/Logo";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";

type Props = {
    type: "signin" | "signup";
};

export function GoogleSignInButton({ type }: Props) {
    const handleClick = () => {
        signIn("google");
    };
    return (
        <Button
            className="bg-gray-100 flex items-center gap-2 text-gray-800 hover:bg-gray-50 border border-gray-400 hover:border-gray-500"
            onClick={handleClick}
        >
            <GoogleIcon className="h-6 w-6" />
            {type === "signin" && "Sign in with Google"}
            {type === "signup" && "Sign up with Google"}
        </Button>
    );
}
export function GithubSignInButton({ type }: Props) {
    const handleClick = () => {
        signIn("github");
    };
    return (
        <Button
            onClick={handleClick}
            className="bg-gray-100 text-gray-800 flex items-center gap-2 hover:bg-gray-50 border border-gray-400 hover:border-gray-500"
        >
            <GithubIcon className="h-6 w-6" />
            {type === "signin" && "Sign in with Github"}
            {type === "signup" && "Sign up with Github"}
        </Button>
    );
}

export function SignOutButton({}: Props) {
    const handleClick = () => {
        signOut();
    };
    return (
        <Button onClick={handleClick} variant={"destructive"}>
            Sign in with Github
        </Button>
    );
}

export function SignOutLink({ className }: { className: string }) {
    const handleClick = () => {
        signOut();
    };
    return (
        <div onClick={handleClick} className={cn(className)}>
            <LogOut className="h-4 w-4" />
            sign out
        </div>
    );
}
