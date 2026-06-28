import Image from "next/image"

export default function Header() {
    return (
        <div>
            <Image
                src="/folders.svg"
                alt="Folders"
                width={1600}
                height={800}
                className="block w-full h-auto"
            />
        </div>
    )
}