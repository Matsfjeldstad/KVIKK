import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatEmailText(email_text: string) {
    return email_text.replaceAll("\\n", "\n");
}
