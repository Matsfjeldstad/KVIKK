"use client";
import { Button } from "@/components/ui/button";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import React from "react";

type Props = {
    name: string;
    email: string;
};

export default function UpdateButton({ name, email }: Props) {
    const { pending } = useFormStatus();
    return (
        <Button
            type="submit"
            disabled={pending}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900 w-fit"
        >
            {pending ? "Updating Profile" : "Update Profile"}
        </Button>
    );
}
