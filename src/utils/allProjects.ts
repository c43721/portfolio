import type IProject from './project';

export default [
  {
    title: 'Payload',
    category: 'Discord Bot',
    description: `
		A discord bot and <a href="https://github.com/payload-bot" target="_blank">GitHub org</a> intended to integrate services from TF2 into Discord. This was my first major project that I had not only developed, but also deployed to end users.
		It's deployed to Fly.io using SQLite as the database, and the frontend is a static React Router site on Cloudflare Pages. The bot is running a separate microservice for handling screenshots on Puppeteer, both using the Deno runtime.`,
    stack: ['SQLite', 'TypeScript', 'NodeJS, Deno', 'React Router', 'Cloudflare', 'Fly.io'],
    starred: true
  },
  {
    title: 'rcon.tf',
    category: 'GitHub Organization',
    description: `An organization on <a href="https://github.com/rcontf" target="_blank">GitHub</a> to manage many projects building on <a href="https://developer.valvesoftware.com/wiki/Source_Dedicated_Server">srcds gameservers</a>. The goal is to have an open source organization to provide high-quality and tested implementations of various protocols against SRDS wire formats.`,
    stack: ['Node.js', 'GitHub', 'Cloudflare Workers', 'NPM Packages', "JSR Packages"]
  },
  {
    title: 'tf2pickup.org',
    category: 'Website',
    description: `An open sourced website to allow people to organize pick-up games for TF2. I got involved by doing some contributions to the backend, and do some tidying up here and there. Since I'm not a core maintainer and just a collaborator currently, most of my work is talking with the project owners and coding up some solutions, getting feedback, working on the feedback, and merging my PRs!`,
    stack: ['MongoDB', 'TypeScript', 'NodeJS']
  },
  {
    title: 'Portfolio',
    category: 'Website',
    description: `Originally written during bootcamp, I decided in mid 2021 to reface it and give it more meaning and give it a better feel.`,
    stack: ['JavaScript', 'SCSS', 'Svelte', 'Astro 7', 'Cloudflare Workers']
  },
] as IProject[];
