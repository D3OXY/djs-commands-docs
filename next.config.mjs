import nextra from "nextra";
const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
    // staticImage: true,
    readingTime: true,
    latex: true,
    flexsearch: {
        codeblocks: false,
    },
});

export default withNextra({
    reactStrictMode: true,
    eslint: { ignoreDuringBuilds: true },
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
