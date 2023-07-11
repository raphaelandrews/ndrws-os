import Image from "next/image";
import logo from "@/public/logo.svg"

//shadow-[inset_0_0_0_10px_rgba(255,255,255,0.08)]

const Taskbar = () => {
    return (
        <section
            className="
                flex
                justify-between
                items-center
                w-11/12
                h-10
                mx-auto
                mt-2
                py-2
                px-3
                bg-[hsla(0,0%,100%,.05)]
                border
                rounded-full
                border-[hsla(0,0%,78%,.1)]
                backdrop-blur-3xl
            "
        >
                <Image src={logo} alt="ndrwsOS" width={24} height={24} />
        </section>
    );
}

export default Taskbar;