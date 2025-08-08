import Image from "next/image";
import Link from "next/link";
import {House, User, Cpu, FolderGit2, SendHorizontal} from "lucide-react";
import DecryptedText from "../blocks/TextAnimations/DecryptedText/DecryptedText";

export default function Home() {
    return (
        <>
            <DecryptedText
                text="Wello Hord!"
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
            />
        </>
    );
}
