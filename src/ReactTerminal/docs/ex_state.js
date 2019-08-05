const state = {
    name: "sandnox",
    routes: ['/welcome', '/about-sandnox', '/about-developer', '/blog', '/projects', '/links'],
    frames: [
        {
            route: "/welcome",
            cmd: "./welcome.sh",
            lines: [
                {
                    text: "Welcome to Sandnox!",
                    link: null,
                    route: null,
                },
                {
                    text: "---------------------",
                    link: null,
                    route: null,
                },
                {
                    text: "about_sandnox.sh",
                    link: null,
                    route: "/about-sandnox",
                },
                {
                    text: "about_developer.sh",
                    link: null,
                    route: "/about-developer"
                },
                {
                    text: "blog.sh",
                    link: null,
                    route: "/blog",
                },
                {
                    text: "projects.sh",
                    link: null,
                    route: "/projects",
                },
                {
                    text: "links.sh",
                    link: null,
                    route: "/links",
                },
                {
                    text: "frontpage.sh",
                    link: "https://sandnox.com",
                    route: null,
                }
            ]
        },
        {
            route: "/about",
            cmd: "./about.sh",
            lines: [
                {
                    text: "In about",
                    link: null,
                    route: null
                }
            ]
        },
        {
            route: "/about-developer",
            cmd: "./about_developer.sh",
            lines: [
                {
                    text: "In about developer",
                    link: null,
                    route: null
                }
            ]
        },
        {
            route: "/blog",
            cmd: "./blog.sh",
            lines: [
                {
                    text: "In blog",
                    link: null,
                    route: null
                }
            ]
        },
        {
            route: "/projects",
            cmd: "./projects.sh",
            lines: [
                {
                    text: "In projects",
                    link: null,
                    route: null
                }
            ]
        },
        {
            route: "/links",
            cmd: "./links.sh",
            lines: [
                {
                    text: "In links",
                    link: null,
                    route: null
                }
            ]
        }
    ]
}