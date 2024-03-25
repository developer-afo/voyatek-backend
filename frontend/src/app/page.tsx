"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login");
  }, [router]);

  return (
    <main className="w-full h-screen grid place-items-center">
      <p>
        Redirecting ... or click{" "}
        <Link href="/auth/login" className="text-blue-400">
          here
        </Link>
      </p>
    </main>
  );
}
