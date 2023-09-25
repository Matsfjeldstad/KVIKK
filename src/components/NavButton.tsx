import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Button } from "./ui/button";
import Image from "next/image";
import { DropdownMenu } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import DropDown from "./AuthDropdown";
import Link from "next/link";

export async function LogedInButton() {
    const session = await getServerSession(authConfig);
    if (session?.user) {
        return (
            <DropDown>
                {/* <Button className="bg-gray-200 py-3 flex gap-2 text-gray-900 hover:bg-gray-300 hover:text-gray-800"> */}
                {session.user?.image ? (
                    <Image
                        width={80}
                        height={80}
                        className="w-8 h-8 object-cover object-center rounded-full"
                        src={session.user.image}
                        alt={"profile avatar of " + session.user.name}
                    />
                ) : (
                    <div>{session.user.name![0]} </div>
                )}
                Hello, {session.user?.name}
                {/* </Button> */}
            </DropDown>
            // <DropdownMenu>
            //     <DropdownMenuTrigger>
            //
            //     </DropdownMenuTrigger>
            // </DropdownMenu>
        );
    }
    return (
        <Link href={"/signin"}>
            <Button className="bg-gray-200 text-gray-900 hover:bg-gray-300 hover:text-gray-800">
                Sign in
            </Button>
        </Link>
    );
}