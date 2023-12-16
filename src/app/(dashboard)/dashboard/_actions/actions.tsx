"use server";

import db from "@/lib/db";

export async function serverAction(formdata: FormData) {
    const id = formdata.get("id");
    const name = formdata.get("name");

    try {
        const user = await db.user.update({
            where: {
                id: id as string,
            },
            data: {
                name: name as string,
            },
        });
        return user;
    } catch (err) {
        return null;
    }
}
