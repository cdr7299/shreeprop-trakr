import { getServerAuthSession } from "~/server/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  return (
    <main className="mt-[4.5rem] flex h-[calc(100vh-4.5rem)] w-full flex-col items-center">
      {session ? (
        children
      ) : (
        <div className="flex size-full items-center justify-center">
          You are not authorized to view this page :(
        </div>
      )}
    </main>
  );
}
