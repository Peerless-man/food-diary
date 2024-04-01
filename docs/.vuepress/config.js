import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "小张的美食日记",
  description: "分享周末小张会做的美食",
  base: "/xiao-zhangs-food-diary/",
  author: "小张",

  theme: defaultTheme({
    logo: "/image/cooker.png",
    navbar: ["/"],
    sidebar: ["/food-diary/小龙虾.md", "/food-diary/水煮牛肉.md", "/food-diary/酸辣土豆丝.md"],
  }),

  bundler: viteBundler(),
});
