## cbf-clean: Clean the Bay Day Reporting
=============

testing/demo site: http://cbf-clean.meteor.com
prod site: http://cleanthebayday.net

[Clean the Bay Day](http://www.cbf.org/clean) (Chesapeake Bay) reporting app and live stats single-page-app.

This web app is written in [Node.js](http://nodejs.org) using the [Meteor.js](http://meteor.com) framework for the [Chesapeake Bay Foundation](http://www.cbf.org/) (CBD2013)

Goals of cbf-clean
==================
* It's core features are the same as Google Forms: accept input via form and dump into spreadsheet for all to see. However we had potential issues with local gov's blocking access to Google Docs (web filters consider it file sharing) so had to roll our own.
* Provide a simple, intuitive form for "zone reporting" on Clean the Bay Day from "zone captains" in cities and counties around the East Coast of Virginia. Hundreds of people need to report in where and what they cleaned up.
* Easily provide a open data dump of those reports, for orgs and partners that need it.
* (optionally) provide live stats, and useful data or info-graphics to visitors, based on current data coming in, and previous year data.
* (optionally) inspire visitors to learn more about [CBF](http://www.cbf.org) and clean the bay *everyday*.

[Meteor](http://meteor.com) is an extensive web framework on top of Node.js, for writing live, modern, web apps quickly; and is quite different from what you might be used to in other rapid development frameworks like MVC-style and scaffold-based systems. 

Learn Meteor
==========================
* You don't have to know Node to get started with Meteor, but you do need to know JavaScript, CSS, HTML.
* Watch screencasts at http://meteor.com/screencast, tech talks at http://www.youtube.com/user/MeteorVideos
* Read a great [overview of Meteor development](http://andrewscala.com/meteor/), then go dive into [Meteor documentation](http://docs.meteor.com/).
* An [unoffical FAQ](https://github.com/oortcloud/unofficial-meteor-faq) that helps with some edge cases.

Setup for Local Development (Mac or GNU/Linux)
===========================
* `curl https://install.meteor.com | sh`
* fork+clone this repo to your machine
* inside the repo folder, type meteor to launch local server
* browse to localhost:3000 by default
* any editing you do will auto refresh in browser
* debug using the JavaScript console in your browser

Setup for Local Development (Windows)
===========================
* Official Windows support for Meteor is still pending, but the community has one that works fine at http://win.meteor.com/.
* Install it
* fork+clone this repo to your machine
* Open an Command Prompt or PowerShell Console
* Navigate to the folder where you cloned cbf-clean
* type meteor to launch local server
* browse to localhost:3000

Options for Deploying a Meteor App
===========================
* Details in the docs at http://docs.meteor.com/#deploying
* Push to free meteor.com hosting using meteor command-line. I wouldn't use this for production since I doubt it has a SLA, but great for QA and testing.
* Heroku supports meteor apps, with a bit more setup.
* Nodejitsu supports meteor with a [few extra steps](https://gist.github.com/blakmatrix/3038654).
* Roll your own. Meh.

We're Here to Help
=====================
* Bret Fisher - bret@codeforamerica.org - [@BretFisher](http://twitter.com/BretFisher)
* find a few of us on [IRC (freenode)](webchat.freenode.net/?channels=codeforamerica&uio=d4) in #codeforva (BretFisher, kmcurry, and others)
* Search or post to our [Google Group](https://groups.google.com/a/codeforamerica.org/forum/#!forum/c4hrva) for the local "Brigade" 
