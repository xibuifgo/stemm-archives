"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FOLDER_ROUTES = {
  main: "/",
  dk: "/dk",
  yk: "/yk",
  fk: "/fk",
} as const;

type FolderItem = {
  key: keyof typeof FOLDER_ROUTES;
  label: string;
  href: string;
  imageSrc: string;
};

const folderItems: FolderItem[] = [
  { key: "main", label: "Main", href: FOLDER_ROUTES.main, imageSrc: "/bro_folders/main_folder.svg" },
  { key: "dk", label: "DK", href: FOLDER_ROUTES.dk, imageSrc: "/bro_folders/dk_folder.svg" },
  { key: "yk", label: "YK", href: FOLDER_ROUTES.yk, imageSrc: "/bro_folders/yk_folder.svg" },
  { key: "fk", label: "FK", href: FOLDER_ROUTES.fk, imageSrc: "/bro_folders/fk_folder.svg" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Folder navigation"
      className="relative left-1/2 mx-auto h-[clamp(14rem,40vw,26rem)] w-screen -translate-x-1/2 overflow-visible"
    >
      {folderItems.map((folder, index) => {
        
        const isActive = pathname === folder.href;
        const xOffset = `calc(${index} * 3.6vw)`;
        const isMain = folder.key === "main";
        const stackZIndex = isMain ? 40 : isActive ? 25 : index + 1;

        if (isMain && isActive) {
            const height = "50%";
        }

        return (
          <Link
            key={folder.href}
            href={folder.href}
            aria-label={`Open ${folder.label} folder`}
            className={`group absolute left-0 top-0 block overflow-hidden rounded-md transition-all duration-300 ease-out ${
              isActive
                ? "-translate-y-1 drop-shadow-[0_14px_20px_rgba(0,0,0,0.35)]"
                : "hover:-translate-y-0.5 hover:drop-shadow-[0_10px_16px_rgba(0,0,0,0.28)]"
            }`}
            style={{
              width: "100vw",
              height: "100%",
              transform: `translateX(${xOffset})${isActive ? " translateY(-0.3rem)" : ""}`,
              zIndex: stackZIndex,
            }}
          >
            <Image
              src={folder.imageSrc}
              alt={`${folder.label} folder`}
              width={800}
              height={320}
              className="block h-full w-full object-contain"
              priority
            />
          </Link>
        );
      })}
    </nav>
  );
}