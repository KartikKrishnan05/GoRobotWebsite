# Fitness For All — GoRobot

A website with home exercises for people with physical disabilities, built by team **GoRobot** as the research project for the **FIRST LEGO League 2020/21** season, whose theme was getting people to move more.

Visitors pick the body parts they *can't* or don't want to use, and the site shows exercises that work without them. Every exercise was tested by wheelchair racer Marc Schuh. The site is in German.

## Features

- **Filter by body part** on the start page (shoulders, trunk, arms, chest, back, stomach, legs)
- **Exercise catalogue** with filtering by type: strength, stretching, relaxation
- **Exercise detail pages** with step-by-step instructions, photos, difficulty, required equipment (e.g. a broom handle instead of a gym bar), and which body parts are trained vs. rested
- About and contact pages

## Tech

Plain HTML, CSS and vanilla JavaScript — no build step or framework.

| Path | Contents |
| --- | --- |
| `index.html` | Start page with the body-part selector |
| `AlleUebungen.html` | All exercises, filterable by type (`javascript/Filter.js`) |
| `exerciseDetail.html` | Detail view rendered from `javascript/exerciseStorage.js` |
| `AlleKörperteile/` | One page per body part |
| `AlleÜbungen/` | Individual exercise pages |
| `Übungen/`, `images/`, `ArtderÜbung/` | Exercise photos and icons |
| `Styles/` | Stylesheets |

## Running it

Open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

then go to <http://localhost:8000>.

## Team

Built in 2021 by the GoRobot FIRST LEGO League team.
