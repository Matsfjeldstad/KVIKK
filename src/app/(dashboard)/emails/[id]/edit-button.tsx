"use client";

import { trpc } from "@/app/_trpc/client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { MoreHorizontal, Trash } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { formatEmailText } from "@/lib/utils";

export function DeleteButton({
    id,
    setIsOpen,
    isOpen,
}: {
    id: number;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
}) {
    const router = useRouter();
    const utils = trpc.useContext();
    const deleteMutation = trpc.deleteEmail.useMutation({
        onSuccess: () => {
            toast.success(`Email with id ${id} deleted!`);
            utils.getAllEmailDraftsInfinite.invalidate();
            setIsOpen(false);
            setTimeout(() => {
                router.push("/emails");
            }, 1000);
        },
        onError: () => {
            toast.error("Error delteing email...");
        },
    });
    const handleDelete = () => {
        deleteMutation.mutate({ id });
    };
    return (
        <Button
            variant={"destructive"}
            onClick={handleDelete}
            className="gap-2 items-center"
        >
            <Trash className="h-4 w-4" />
            {deleteMutation.isLoading ? "Deleting..." : "Delete"}
        </Button>
    );
}

type Props = {
    id: number;
    text: string;
    to: string;
    from: string;
    subject: string;
};

export default function EditButton({ id, text, to, subject, from }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const { mutate: sendEmail, isLoading} = trpc.resend.sendDraft.useMutation({
        onSuccess: () => {
            toast.success("Email sent!");
        },
        onError: () => {
            toast.error("Error sending email...");
        },
    });
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <Dialog>
                        <DialogTrigger>
                            <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                            >
                                Update item
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogContent className="bg-black">
                            <DialogHeader>
                                <DialogTitle>Update form</DialogTitle>
                                <DialogDescription>
                                    Here you can add fields to update your form
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    <DropdownMenuSeparator />
                    <Dialog>
                        <DialogTrigger>
                            <DropdownMenuItem
                                onSelect={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                send email
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogContent className="bg-black max-w-2xl">
                            <DialogHeader>
                                <DialogTitle>
                                    Email ready to be sent:
                                </DialogTitle>
                            </DialogHeader>
                            <DialogDescription className="whitespace-pre-line p-6 gap-4 flex flex-col bg-gray-900 text-gray-300 rounded-md">
                                <div className="p-2 bg-gray-700 rounded-md">
                                    To: {to}
                                </div>
                                <div className="font-bold">
                                    Subject: {subject}
                                </div>
                                <div>{formatEmailText(text)}</div>
                            </DialogDescription>
                            <Button
                                variant={"outline"}
                                className="text-gray-900 hover:text-gray-700"
                                onClick={() =>
                                    sendEmail({
                                        text: text,
                                        from: from,
                                        to: to,
                                        subject: subject,
                                    })
                                }
                            >
                                {isLoading ? "Sending..." : "Send"}
                            </Button>
                        </DialogContent>
                    </Dialog>
                    <DropdownMenuSeparator />
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger>
                            <DropdownMenuItem
                                onSelect={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Delete item
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogContent className="bg-black">
                            <DialogHeader>
                                <DialogTitle>
                                    Are you sure absolutely sure?
                                </DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will
                                    permanently delete your account and remove
                                    your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                            <DeleteButton
                                id={id}
                                setIsOpen={setIsOpen}
                                isOpen={isOpen}
                            />
                        </DialogContent>
                    </Dialog>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
