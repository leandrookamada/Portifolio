import Image from "next/image";
import Link from "next/link";
import {House, User, Cpu, FolderGit2} from "lucide-react";

export default function SideBar() {
    return (
        <header className="flex gap-10 min-h-screen w-110 flex-col fixed left-0 right-0 items-center justify-center p-24 bg-gray-800 shadow-xl">
            <div className="overflow-hidden rounded-full w-[150px] h-[150px]">
                <Image
                    src="/image/perfil.jpeg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    className="scale-125  transition-transform duration-300"
                />
            </div>
            <nav className="flex flex-col gap-4 ">
                <Link href="/" className="flex flex-row items-center gap-4 border-2 border-white">
                    <House />
                    <h1>Home</h1>
                </Link>

                <Link href="/sobre" className="flex flex-row items-center gap-4 border-2 border-white">
                    <User />
                    <h1>Sobre</h1>
                </Link>

                <Link href="/tecnologias" className="flex flex-row items-center gap-4 border-2 border-white">
                    <Cpu />
                    <h1>Tecnologias</h1>
                </Link>

                <Link href="/projetos" className="flex flex-row items-center gap-4 border-2 border-white">
                    <FolderGit2 />
                    <h1>Projetos</h1>
                </Link>
            </nav>
        </header>
    );
}
