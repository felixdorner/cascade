---
title: Example Grid
slug: example-grid
---

To leverage the grid system the HTML markup should follow this structure:

```
├── .o-container
│   ├── .o-grid
│   │   ├── .o-grid__col u-span--**
```

Each `.block` element can hold one or more `.row` element(s) which can be filled with a 12 column grid. The maximum grid-width is set on the `.row` element. A row is always centered inside a `.block` element. Gutters are split equally with paddings on `.row` and `.col-*` elements. `.item` elements inside the column serve as content-holder.

### Columns & Shifts

`.col` elements need to be expanded with a modifier ranging from `-01` to `-12`. Shifting columns is possible by adding the class `.shf` and modifying it with `-01` to `-11`. The modifiers represent the column-width based on overall 12 columns. To set columns and shifts for certain breakpoints append another modifier at the end:

`--s`: Append to adjust for small breakpoint  
`--m`: Append to adjust for medium breakpoint  
`--l`: Append to adjust for large breakpoint  
`--x`: Append to adjust for extra large breakpoint

**Example**

`<div class="col-12 col-06--m col-04--l">`

*Note:* Breakpoints overwrite each other from small to large (mobile-first approach).

### Settings

There are some variables to fine-tune the grid:

1. Max grid-width
2. Vertical & horizontal gutters for different breakpoints
