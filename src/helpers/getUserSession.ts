import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export const getUserSession = async () => await getServerSession(authOptions);
