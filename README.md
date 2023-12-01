# Promptopia

Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts

[View live website ↗](https://promptopia-two-inky.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Acknowledgments](#acknowledgments)

## Installation

To run Promptopia locally, use the following npm commands:

```bash
npm install
npm run dev

# open localhost:3000 to view the running website
```

## Features

1. Sign In

   Utilize the `next-auth` package in conjunction with Google OAuth 2.0 for authentication.

2. Create Prompt

   Establish a connection to MongoDB using Mongoose to store user prompts. Leverage the Next.js API routes feature for seamless integration.

3. Profile Page

   Each user has a dedicated profile page where they can store all their prompts. The prompt's owner can edit or delete it at their discretion.

4. Search

   Users have the ability to search prompts based on the username, the content of the prompt, or the associated tag.

5. Responsive Design

   All pages have been designed to be responsive, ensuring a consistent experience across various devices and screen sizes.

## Acknowledgments

- Based on [JavaScript Mastery Next.js 14 tutorial](https://www.youtube.com/watch?v=wm5gMKuwSYk)
