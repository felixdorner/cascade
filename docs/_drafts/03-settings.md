---
title: Settings
slug: settings
---

These are the settings Bica is shipped with. Feel free to add your own:

```
:root {
  --font--primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font--secondary: Athelas, Georgia, times, serif;
  --font--code: Consolas, Monaco, monospace;

  --color--main: #0D0D0D;
  --color--accent: #0020FF;
  --color--subtle: #D2D2D2;
  --color--subtle-darker: #A2A2A2;
  --color--subtle-lighter: #F5F5F5;
  --color--light: #FFFFFF;
  --color--success: #48B260;
  --color--warning: #F0B242;
  --color--error: #CC4444;

  --grid--max-width: 1304px;
  --grid--gutter: 28px;

  --span--01: calc(100% / 12);
  --span--02: calc((100% / 12) * 2);
  --span--03: 25%;
  --span--04: calc((100% / 12) * 4);
  --span--05: calc((100% / 12) * 5);
  --span--06: 50%;
  --span--07: calc((100% / 12) * 7);
  --span--08: calc((100% / 12) * 8);
  --span--09: 75%;
  --span--10: calc((100% / 12) * 10);
  --span--11: calc((100% / 12) * 11);
  --span--12: 100%;

  --spacing--01: 4px;
  --spacing--02: 8px;
  --spacing--03: 16px;
  --spacing--04: 32px;
  --spacing--05: 64px;
  --spacing--06: 96px;
  --spacing--07: 128px;
  --spacing--08: 160px;
  --spacing--09: 192px;
  --spacing--10: 224px;
}

@custom-media --breakpoint--sm screen and (min-width: 480px);
@custom-media --breakpoint--md screen and (min-width: 740px);
@custom-media --breakpoint--lg screen and (min-width: 960px);
@custom-media --breakpoint--xl screen and (min-width: 1140px);
```
