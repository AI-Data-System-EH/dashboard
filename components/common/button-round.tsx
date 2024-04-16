"use client";

export default function ButtonRound({
    children,
    onClick,
    className,
}: Readonly<{
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}>) {
    return (
        <div
            className={`
                z-auto flex p-[1px] rounded-full
                bg-gradient-to-br
                from-gray-400 via-gray-300 to-gray-500
                hover:from-heensan-cyan hover:to-heensan-blue
                dark:from-zinc-600 dark:via-zinc-500 dark:to-zinc-700
                dark:hover:from-heensan-blue dark:hover:to-heensan-cyan
            `}
        >
            <button
                onClick={onClick}
                className={`
                    rounded-full px-4 py-1
                    font-medium text-sm
                    drop-shadow-md
                    bg-gradient-to-b
                    from-zinc-100 to-zinc-300
                    dark:from-zinc-700 dark:to-zinc-900
                    hover:bg-clip-text hover:text-transparent
                    dark:hover:text-off-white
                ${className}`}
            >
                {children}
            </button>
        </div>
    );
}
