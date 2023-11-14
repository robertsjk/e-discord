import { auth } from "@clerk/nextjs";
<<<<<<< HEAD
import db from "@/lib/db";

export const currentProfile = async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }
=======
import { db } from "./db";

export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) return null;
>>>>>>> v-2

  const profile = await db.profile.findUnique({
    where: {
      userId: userId,
    },
  });

  return profile;
};
