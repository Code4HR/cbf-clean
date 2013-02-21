cbf-clean
=============

testing/demo site: http://cbf-clean.meteor.com

[Clean the Bay Day](http://www.cbf.org/clean) (Chesapeake Bay) reporting app and live stats single-page-app.

This web app is written in [Node.js]() using the [Meteor.js](http://meteor.com) framework for the [Chesapeake Bay Foundation](http://www.cbf.org/) (CBD2013)

Goals of cbf-clean
==================
* Provide a simple, intutive form for "zone reporting" on Clean the Bay Day from "zone captains" in cities and counties around the East Coast of Viringia. Hundreds of people need to report in where and what they cleaned up.
* Easily provide a open data dump of those reports, for orgs and partners that need it.
* (optionally) provide live stats, and useful data or infographics to visitors, based on current data coming in, and previous year data.
* (optionally) inspire visitors to learn more about [CtBF](http://www.cbf.org) and clean the bay *everday*.

[Meteor](http://meteor.com) is an extensive web framework on top of Node.js, for writing live, modern, web apps quickly; and is quite different from what you might be used to in other rapid development frameworks like MVC-style and scafold-based systems. Before trying to get this to work, you may want to watch screencasts at http://meteor.com/screencast

Setup for Local Development (Mac or GNU/Linux)
===========================
* `curl https://install.meteor.com | sh`
* clone this repo to your machine
* inside the repo folder, type meteor to launch local server
* browse to localhost:3000 by default
* any editing you do will auto refresh in browser
* debug using the JavaScript console in your browser
* go dive into [Meteor documentation](http://docs.meteor.com/)

Setup for Local Development (Windows)
===========================
* Official Windows support for Meteor is still pending, but they have a port that tends to lag a little behind the main release at http://win.meteor.com/. I haven't tested it yet, but it should work with our repo.

Options for Deplying a Meteor App
===========================
* Details in the docs at http://docs.meteor.com/#deploying
* Push to free meteor.com hosting using meteor command-line. I wouldn't use this for production since I doubt it has a SLA, but great for quick testing with friends.
* Heroku supports meteor apps, with a bit more setup.
* Roll your own. Meh.

We're Here to Help
=====================
* Bret Fisher - bret@codeforamerica.org - @BretFisher
* find a few of us on IRC (freenode) in #codeforamerica (BretFisher, kmcurry, others I can't remember handles for)
* Search or post to our (Google Group)[https://groups.google.com/a/codeforamerica.org/forum/#!forum/hrva-brigade] for the local "Brigade" 