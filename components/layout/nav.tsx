import { getServerSession } from "next-auth/next";
import Navbar from "./navbar";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Nav() {
    // const session = await getServerSession(authOptions);
    const session = null;
    return <Navbar session={session} />;
}
