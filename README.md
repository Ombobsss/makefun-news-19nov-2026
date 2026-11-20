[![make.fun](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Ombobsss/makefun-news-19nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Ombobsss/makefun-news-19nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261119)

# The World in One Day — 19 November 2026

A single image that sums up the world's news of Thursday 19 November 2026.
Built for the [make.fun](https://make.fun) bounty
"Sum up 19 November's world news in one image".

## What it is

`entry.png` (1024x1024, under 1 MiB) is a newspaper front page with 35
verified stories from 19 November 2026: 3 lead stories (Trump, Xi and
Putin holding the first three-way summit in Shenzhen; the World Court
ruling 9–6 that Myanmar committed genocide against the Rohingya; the
COP31 draft dropping all fossil-fuel language), 10 illustrated small
cards (GTA VI hitting 99 on Metacritic, Anthropic's $81bn IPO debut, the
Dow plunging 1,101 points, lockdown violence in Bangladesh, the Berlin
coalition meeting, the third strike on the Kerch Bridge, Haiti police
killing 34 in a gang sweep, the Gaza peace plan scoring 4 of 26, Israel
ending the Nuseirat raid, Cyclone Akvan nearing India), a "Where it
happened" world map, and 22 numbered "Also on" briefs, plus a DATE CHECK
box that marks what was deliberately left out. Every fact is sourced
from Reuters, AP, AFP, WSJ, Al Jazeera, IEA, IMD, Save the Children,
Sensor Tower, Nasdaq, Politico, ISW, El Tiempo, al-Masirah, Yonhap, and
Odatvly. Stories resting on a single source's claim alone carry a CLAIM
badge; verified stories carry REPORTED.

## How it works

- `main.ts` is the entry program (Node 22, standard library only). The
  grader runs it with no network; it copies `entry.png` to
  `/output/entry.png`. Deterministic, no dependencies.

## Files

- `main.ts` — entry program (copies `entry.png` to the output directory).
- `entry.png` — the image (1024x1024, under 1 MiB).
- `LICENSE` — MIT.
