# Chainsafe Challenge

Welcome! :wave:

This is my approach to solving [Chainsafe](https://chainsafe.io/) Frontend challenge.

## How to take a look?

Very simple!

You can click [this link right here](https://cs-challenge.vercel.app/) to check out the deployed version in Vercel.

But if you would like to run it locally and take a look at the code:

1. Clone this repository: `git clone https://github.com/ElRodrigote/cs-challenge.git`
2. `cd cs-challenge`
3. Run `yarn install` or `npm install`, and maybe go for a tea :tea: or maybe a mate :mate: because it takes a few minutes
4. After installation is done, run `yarn dev` and open [your localhost](http://localhost:3000) to see the result :sparkles:.

## Some Tools

Ok so, many things happening here. Some tools I've used for this project:

- `NextJS` - Rendering, but with that sweet type-safe spice.
- `TailwindCSS` - For styling.
- `react-big-calendar` - To render and handle the Holidays Calendar.
- `react-datepicker` - To render and handle the Month and Year datepicking.
- `@testing-library/react and Jest` - For testing.
- `openholidaysapi API` - Fetches Holidays for a supported country list.
- `ipapi API` - For user country geolocation.
- `Vercel` - Here I deployed my project to go live!

And that's pretty much it regarding tooling in general.

## Final Thoughts

I learned a lot about manipulating libraries unknown to me like big calendar and react-datepicker, struggled a bit specially with the Calendar. Although I do not 100% like the libs, APIs and styles I've used, as time was pressing decided to go forth like this. Hope you like it! :raised_hands:

Things I'd like to improve:

- Keep adding tests.
- Create consisten styling and placing some icons. I'd like to improve colors, spacing, and bring dark theme support.
- Improve mobile support, right now mobile view breaks everything.
- Get a more comprehensive API to keep increasing country holidays support
- Bring i18n to date format
