import Image from "next/image";
import logo from "@/public/logo.svg"

const Taskbar = () => {
    return (
        <section
            className="
                flex
                justify-between
                items-center
                w-11/12
                h-taskbar-height
                mx-auto
                mt-taskbar-margin-top
                py-2
                px-3
                bg-frosted-white/5
                border
                rounded-full
                border-frosted-grey/10
                backdrop-blur-3xl
                shadow-md
            "
        >
                <Image src={logo} alt="ndrwsOS" width={24} height={24} />
        </section>
    );
}

export default Taskbar;