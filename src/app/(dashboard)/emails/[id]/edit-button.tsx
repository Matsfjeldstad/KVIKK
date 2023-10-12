"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogOverlay,
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
import { DialogClose } from "@radix-ui/react-dialog";
import { Delete, Edit, MoreHorizontal, Trash } from "lucide-react";
import React from "react";

type Props = {};

export default function EditButton({}: Props) {
    return (
        <>
            {/* <Dialog>
                <DropdownMenu>
                    <DropdownMenuTrigger className="h-fit px-2 py-1 rounded-md border-gray-500 border hover:bg-white/[0.05]">
                        <MoreHorizontal />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className="p-4 gap-4 flex flex-col bg-[#262626] text-gray-200 rounded-xl"
                    >
                        <DropdownMenuItem className="flex gap-2 items-center">
                            <Edit className="h-4 w-4" />
                            Edit
                        </DropdownMenuItem>
                        <DialogTrigger asChild>
                            <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                                className="flex gap-2 items-center"
                            >
                                <Trash className="h-4 w-4 stroke-red-500" />
                                Delete
                            </DropdownMenuItem>
                        </DialogTrigger>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent className="bg-black">
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogContent>
            </Dialog> */}
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
                                onSelect={(e) => e.preventDefault()}
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
                                <DialogClose  asChild>
                                    <Button variant={"destructive"}>
                                        Delete
                                    </Button>
                                </DialogClose>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
