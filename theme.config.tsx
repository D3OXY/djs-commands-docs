import Link from "next/link";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const logo = (
    <>
        <style jsx>{`
            span {
                padding: 0.5rem 0.5rem 0.5rem 0;
                mask-image: linear-gradient(
                    60deg,
                    black 25%,
                    rgba(0, 0, 0, 0.2) 50%,
                    black 75%
                );
                mask-size: 400%;
                mask-position: 0%;
            }
            span:hover {
                mask-position: 100%;
                transition: mask-position 1s ease, -webkit-mask-position 1s ease;
            }
        `}</style>
        <h1 className="flex flex-row items-baseline text-2xl font-bold">
            <span className="tracking-tight hover:cursor-pointer dark:text-white">
                <span className="text-[#5865F2]">{`DJS`}</span>
                {`-`}
                <span className="text-red-600">{`Commands`}</span>
                <span className="ml-1 font-semibold">docs</span>
            </span>
        </h1>
    </>
);

const config: DocsThemeConfig = {
    logo,
    // logo: <span>Mishal Ikkas Logo Here</span>,
    logoLink: "/",
    project: {
        link: "https://github.com/D3OXY/djs-commands",
    },
    chat: {
        link: "https://deoxy.dev/links?redirect=discord",
    },
    docsRepositoryBase: "https://github.com/D3OXY/djs-commands-docs/tree/main",
    footer: {
        text: () => (
            <div className="flex flex-col w-full items-center justify-center gap-4">
                <div className="flex font-semibold text-md items-center gap-2 justify-center ">
                    Copyright © 2023 DEOXY . All Rights Reserved
                </div>
                <div className="flex font-semibold text-md items-center gap-2 justify-center">
                    Made With
                    <span className="hover:scale-[2] cursor-none duration-500 ease-in-out hover:rotate-[360deg]  ">
                        💙
                    </span>
                    By
                    <Link
                        className="hover:underline hover:scale-[1.1] duration-200 ease-in-out hover:text-blue-500"
                        href="https://deoxy.dev"
                    >
                        DEOXY
                    </Link>
                </div>
            </div>
        ),
    },
    head: () => {
        const { asPath, defaultLocale, locale } = useRouter();
        const { frontMatter } = useConfig();
        const url =
            "https://djscommands.deoxy.dev" +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
        return (
            <>
                <meta property="og:url" content={url} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta property="og:title" content="DJS-Commands" />
                <meta
                    property="og:description"
                    content="A simple, powerful, and extendable command framework for Discord.JS"
                />
            </>
        );
    },
    useNextSeoProps() {
        const { asPath } = useRouter();
        const title =
            asPath === "/" ? "DJS-Commands | D3OXY" : "%s – DJS-Commands";
        return {
            titleTemplate: title,
            description:
                "A simple, powerful, and extendable command framework for Discord.JS",
        };
    },
    banner: {
        key: "1.4.4-release",
        text: (
            <a href="/changelog" target="_blank">
                🎉 1.4.4 released. Read more →
            </a>
        ),
    },
    nextThemes: {
        defaultTheme: "system",
    },
    primaryHue: {
        dark: 180,
        light: 241,
    },
    navigation: {
        prev: true,
        next: true,
    },
    faviconGlyph: "📖",
};

export default config;
