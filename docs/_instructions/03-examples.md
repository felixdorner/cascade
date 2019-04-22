---
title: Examples
slug: examples
---

<div class="c-faq">

<div class="c-faq__item">
<h4 class="c-faq__item-title">File structure</h4>
<div class="c-faq__item-content" markdown="1">

This is how Baseline is structured:

```
settings.css
base/
  _normalize.css
  _box-sizing.css
  _copy.css
  _buttons.css
  _forms.css
  _lists.css
  _tables.css
  _media.css
  base.css
objects/
  _container.css
  _grid.css
  objects.css
components/
  _example.css
  components.css
utilities/
  _margin.css
  _padding.css
  _push.css
  _span.css
  utilities.css
style.css
```

</div>
</div>

<div class="c-faq__item">
<h4 class="c-faq__item-title">Grid system</h4>
<div class="c-faq__item-content" markdown="1">

To leverage the grid system the HTML markup should follow such kind of structure:

```
.o-container
  .o-grid
    .o-grid__col u-span--06 /
    .o-grid__col u-span--06 /
  /
/
```

Each `.o-grid` element can hold one or more `.o-grid__col` element(s) which can be sized or pushed with specific utility classes. The maximum grid-width is set on the `.o-grid` element. The grid is always centered inside the `.o-container` element. Gutters are split equally with paddings on `.o-grid` and `.o-grid__col` elements.

#### Columns & Shifts

`.o-grid__col` elements can be supplemented with utility classes like `u-span--*` or `u-push--*` with modifiers ranging from `01` to `12`. The modifiers represent the column-width based on overall 12 columns. To set widths and shifts for certain breakpoints append another modifier at the end:

`s`: Append to adjust for small breakpoint  
`m`: Append to adjust for medium breakpoint  
`l`: Append to adjust for large breakpoint  
`x`: Append to adjust for extra large breakpoint

#### Example

```
.o-container
  .o-grid
    .o-grid__col u-span--12 u-span--06m u-span--08l /
    .o-grid__col u-span--12 u-span--06m u-span--04l /
  /
/
```

*Note:* Breakpoints overwrite each other from small to large (mobile-first approach).

#### Settings

Currently, there are two variables to fine-tune the grid:

1. --grid--max-width
2. --grid--gutter

</div>
</div>

<div class="c-faq__item">
<h4 class="c-faq__item-title">Base elements</h4>
<div class="c-faq__item-content" markdown="1">

Styles for most common HTML elements like headings, buttons, forms, lists and tables.

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

<p>
<input type="text" placeholder="Text Input">
<textarea></textarea>
<button href="#">This is a button</button>
</p>

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

```
This is code
```

> This is a quote

</div>
</div>
</div>
