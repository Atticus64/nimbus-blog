import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Nimbus Jona Blog",
  author: "Jona (turtlejona)",
  avatar: "./tulip.jpg",
  avatarClass: "full",
  links: [
    { title: "GitHub", url: "https://github.com/tylung" },
  ],
  background: "#fff",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
