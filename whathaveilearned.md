# What have I learned

- Initialize a NextJS project through `create-next-app`

- How to use `Mongoose` to connect to `MongoDB` through serverless function
  - Prevent redefine bug by using `models.ModelName`
  - Learn mongodb
    - `aggregate`,
    - `$lookup`: similar to join SQL (from: joined DB, localField, foreignField, as),
    - `$unwind`: deconstructs an array fields and puts each field into its own document.
    
      E.g. Prompt ( creator: [a, b] ... ) => Prompt ( creator: a ... ) & Prompt ( creator: b ... ),
    - and `$match`: same as filter condition (should be prioritized in the pipeline order)

- Relearn basics of defining `Mongoose` schema

- Basic schema validation (unique, required, match regex)

- Handle search value query parameter:
  - When a user clicks on a prompt's tag, the web redirects the user to the `Home` page with a `search` query parameter. Let the <Feed /> component within the `Home` page sets the initial search state's value by `useSearchParams()` and the `get` method.
  - And a `useEffect` is responsible for `setSearchValue` if the `search` query parameter changes in case of the user wants to navigate back by the back button. If we don't have this `useEffect`, the `search` state won't change and the prompts won't get updated.

- Learn basic NextAuth (`SessionProvider`, `useSession`)
- handler:
  - providers
    - GoogleProviders: console.developer.google.com
      - Oauth Screen => Credentials => client id & client secret
      - Redirect JS URIs: localhost:3000 & /api/auth/callback/google: https://next-auth.js.org/providers/google
  - callbacks
    - signIn: handle signin logic
    - session: return an object which we can get when `useSession`

- Learn NextJS basic API routes
  - GET (request, { params })
  - Always connect to DB as serverless API dies after serving
  - Use JS `Response` object to return response

- Learn file-based routing in NextJS
  - [dynamic] => path parameter
  - [...dynamic] => Catch-all Segments
  - `request.nextUrl.searchParams.get`
- Learn basic `next/navigation` (`useRouter`, `useSearchParams`)

- Favicon:
  - Put Favicon in `/app` directory or
  - A `icon.js` file

- Relearn & implement debounce search

- Nice tailwind responsive `navbar`

