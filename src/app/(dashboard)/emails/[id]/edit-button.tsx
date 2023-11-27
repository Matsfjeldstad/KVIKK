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

export function DeleteButton({
    id,
    setIsOpen,
}: {
    id: number;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const utils = trpc.useContext();
    const deleteMutation = trpc.deleteEmail.useMutation({
        onSuccess: () => {
            toast.success(`Email with id ${id} deleted!`);
            utils.getAllEmailDraftsInfinite.invalidate();
            setIsOpen(false);
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
};

export default function EditButton({ id }: Props) {
    const [isOpen, setIsOpen] = useState(false);
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

                                <DeleteButton id={id} setIsOpen={setIsOpen} />
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
