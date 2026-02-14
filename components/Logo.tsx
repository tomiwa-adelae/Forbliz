import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = ({ color = "white" }: { color: "white" | "black" }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center space-x-2",
        color === "white" && "text-white",
        color === "black" && "text-black dark:text-white",
      )}
    >
      <Image
        src="/assets/images/logo.png"
        alt="FORBLIZ"
        width={120}
        height={40}
        className="h-16 w-auto object-contain"
        priority
      />
    </Link>
  );
};
