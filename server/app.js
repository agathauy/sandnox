// server/app.js

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); 
// Always return the main index.html, so react-router render the route in the client


app.get('/api/terminal-frames', (req, res, next) => {
    const mystate = {
        name: "sandnox",
        routes: ['/terminal/welcome', '/terminal/about-sandnox', '/terminal/about-developer', '/terminal/blog', '/terminal/projects', '/terminal/links'],
        frames: [
            {
                route: "/terminal/welcome",
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
                        route: "/terminal/about-sandnox",
                    },
                    {
                        text: "about_developer.sh",
                        link: null,
                        route: "/terminal/about-developer"
                    },
                    {
                        text: "blog.sh",
                        link: null,
                        route: "/terminal/blog",
                    },
                    {
                        text: "projects.sh",
                        link: null,
                        route: "/terminal/projects",
                    },
                    {
                        text: "links.sh",
                        link: null,
                        route: "/terminal/links",
                    },
                    {
                        text: "frontpage.sh",
                        link: "/",
                        route: null,
                    }
                ]
            },
            {
                route: "/terminal/about-sandnox",
                cmd: "./about.sh",
                lines: [
                    {
                        text: "Sandnox /(noun) sandbox (Eng. space for play/experimentation) + nox (Lat. night)/.",
                        link: null,
                        route: null
                    },
                    {
                        text: " ",
                        link: null,
                        route: null
                    },
                    {
                        text: "Ergo, a place for projects and knick-knacks usually done at night time.",
                        link: null,
                        route: null
                    },
                    {
                        text: " ",
                        link: null,
                        route: null
                    },
                    {
                      text: "Return to main",
                      link: null,
                      route: "/terminal/welcome"
                    }
                ]
            },
            {
                route: "/terminal/about-developer",
                cmd: "./about_developer.sh",
                lines: [
                    {
                        text:'Coming soon!',
                        link: null,
                        route: null
                    },
                    {
                        text: " ",
                        link: null,
                        route: null
                    },
                    {
                        text: 'Email:',
                        link: null,
                        route: null
                    },
                    {
                        text: 'agathauy@gmail.com',
                        link: 'mailto:agathauy@gmail.com',
                        route: null,
                    },
                    {
                        text: " ",
                        link: null,
                        route: null
                    },
                    {
                      text: "Return to main",
                      link: null,
                      route: "/terminal/welcome"
                    }
                ]
            },
            {
                route: "/terminal/blog",
                cmd: "./blog.sh",
                lines: [
                    {
                        text: "Coming soon!",
                        link: null,
                        route: null
                    },
                    {
                        text: " ",
                        link: null,
                        route: null
                    },
                    {
                      text: "Return to main",
                      link: null,
                      route: "/terminal/welcome"
                    }
                ]
            },
            {
                route: "/terminal/projects",
                cmd: "./projects.sh",
                lines: [
                    {
                        text: "Coming soon!",
                        link: null,
                        route: null
                    },
                    {
                        text: " ",
                        link: null,
                        route: null
                    },
                    {
                      text: "Return to main",
                      link: null,
                      route: "/terminal/welcome"
                    }
                ]
            },
            {
                route: "/terminal/links",
                cmd: "./links.sh",
                lines: [
                    {
                        text: "Coming soon!",
                        link: null,
                        route: null
                    },
                    {
                        text: " ",
                        link: null,
                        route: null
                    },
                    {
                      text: "Return to main",
                      link: null,
                      route: "/terminal/welcome"
                    }
                ]
            },
            {
              route: "/404",
              cmd: "./404.sh",
              lines: [
                  {
                      text: "Page Not Found.",
                      link: null,
                      route: null,
                  },
                  {
                    text: " ",
                    link: null,
                    route: null
                },
                  {
                      text: "Go to main terminal",
                      link: null,
                      route: "/terminal/welcome"
                  },
                  {
                    text: "Go to front page",
                    link: "/",
                    route: null
                  }
              ]
          }
        ]
      }
    res.status(200).json(mystate);
});
/*
app.post('/api/terminal-frames', (req, res, next) => {

});
*/
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });


const PORT = process.env.PORT || 9001;
const server = require('http').Server(app);
server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
  



