import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import SignInButton from "~/app/_components/signInButton";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export default async function Home() {
  const session = await getServerAuthSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex max-w-screen-2xl flex-col items-center justify-center gap-12 px-4 py-8 sm:flex-row ">
        <div className="flex basis-1/2 flex-col items-center justify-center gap-4">
          <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Welcome to <span className="text-accent">Trakr</span>
          </h1>
          <h3 className="text-center font-bold sm:text-xl">
            Track Real estate with <span className="text-accent">ease.</span>
          </h3>
        </div>
        <Separator
          orientation="vertical"
          className="hidden h-[600px] max-h-screen sm:block"
        />
        <div className="flex basis-1/2 flex-col items-center gap-4 p-6">
          <p className="text-center">
            {session && (
              <span>
                Logged in as{" "}
                <span className="font-bold">{session.user?.name}</span>
              </span>
            )}
          </p>
          <div className="flex flex-col gap-8">
            {!session && <SignInButton />}
            {session && (
              <Button asChild>
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
