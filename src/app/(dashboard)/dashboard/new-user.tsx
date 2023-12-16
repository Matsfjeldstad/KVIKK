"use client";
import { Button } from "@/components/ui/button";
import { serverAction } from "./_actions/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    data: {
        id: string;
        email: string;
        name: string;
    };
    isNewUser?: boolean;
};

export function NewUserModal({ data, isNewUser }: Props) {
    const router = useRouter();
    return (
        <AnimatePresence>
            {isNewUser && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-gray-900 bg-opacity-80 h-screen w-screen z-[100] backdrop-blur-sm flex justify-center items-center">
                    <div className="max-w-xl w-full  bg-slate-800 rounded-lg p-6 relative overflow-hidden">
                        <div
                            className={cn(
                                "absolute inset-0 h-full w-full opacity-20",
                                `bg-[radial-gradient(at_top_left,_#C738DE_0%,_transparent_80%)]`
                            )}
                        />
                        <div className="flex flex-col gap-4 relative">
                            <h2 className="text-2xl font-bold">
                                Welcome to Kvikk ai!
                            </h2>
                            <p className="text-gray-400">
                                Before we start, you need to set up your
                                account.
                            </p>
                            <form
                                className="flex flex-col gap-4"
                                action={async (formData: FormData) => {
                                    const user = await serverAction(formData);
                                    if (user) {
                                        toast.success(
                                            "Account created successfully"
                                        );
                                        router.push("/dashboard");
                                    } else {
                                        toast.error("Error creating account");
                                    }
                                }}
                            >
                                <label className="flex flex-col gap-2">
                                    Your Name
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Name"
                                        defaultValue={data?.name}
                                        className="border p-3 bg-gray-100 border-gray-400 rounded-md text-gray-800"
                                    />
                                    <input
                                        hidden
                                        id="id"
                                        name="id"
                                        defaultValue={data?.id}
                                    />
                                </label>
                                <Button
                                    type="submit"
                                    className="bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900 w-fit"
                                >
                                    Update Profile
                                </Button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
