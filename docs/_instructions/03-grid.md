---
title: Grid system
slug: grid
---

To leverage the simple grid system, the HTML markup should follow a specific structure:

```
.o-container
  .o-grid
    .o-grid__col .u-span--06
    .o-grid__col .u-span--06
```

Each `.o-grid` element can hold one or more `.o-grid__col` element(s) which can be sized or pushed with specific utility classes. The maximum grid-width is set on the `.o-grid` element. The grid is always centered inside the `.o-container` element. Gutters are split equally with paddings on `.o-grid__col` elements.

#### Columns & Shifts

`.o-grid__col` elements can be supplemented with utility classes like `.u-span--*` or `.u-push--*` with modifiers ranging from `01` to `12`. The modifiers represent the column-width based on overall 12 columns. To set widths and shifts for certain breakpoints append another modifier at the end:

`s`: Append to adjust for small breakpoint  
`m`: Append to adjust for medium breakpoint  
`l`: Append to adjust for large breakpoint  
`x`: Append to adjust for extra large breakpoint

#### Example

```
.o-container
  .o-grid
    .o-grid__col .u-span--12 .u-span--06m .u-span--08l
    .o-grid__col .u-span--12 .u-span--06m .u-span--04l
```

<small>Breakpoints overwrite each other from small to large (mobile-first approach).</small>
