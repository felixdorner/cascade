---
title: Grid System
slug: grid
category: grid
---

Baseline provides a grid system for simple layout explorations. To use it, the HTML markup should follow a specific structure:

```
.o-container
  .o-grid
    .o-grid__col .u-span--06
    .o-grid__col .u-span--06
```

Each `.o-grid` element can hold one or more `.o-grid__col` element(s) which can be sized or pushed with specific utility classes like `.u-span--*` or `.u-push--*` with modifiers ranging from 01 to 12. The modifiers represent the column-width based on overall 12 columns.

The maximum grid-width is set on the .o-grid element. The grid is always centered inside the .o-container element. Gutters are split horizontally with paddings on `.o-grid` and `.o-grid__col` elements.

#### Responsiveness

To set widths and shifts individually for the 4 custom breakpoints defined in the settings.css append the following modifiers at the end: sm, md, lg, xl

Example:

```
.o-container
  .o-grid
    .o-grid__col .u-span--12 .u-span--06md .u-span--08lg
    .o-grid__col .u-span--12 .u-span--06md .u-span--04lg
```

Note: Breakpoints overwrite each other from small to large!
