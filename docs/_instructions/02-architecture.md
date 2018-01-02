---
title: Architecture
slug: architecture
---

One of the main aspects of StarrrtCSS is to encourage a sane and scalable CSS architecture. Therefor styles are grouped into the following categories:

1. Settings
2. Base
3. Objects
4. Components
5. Utilities

### Settings

The settings file contains global configurations like variables and breakpoints which are shared across the system.

### Base

Base styles are the default styles of base elements without ID or class selectors.

### Objects

Objects are class-based selectors which define undecorated design patterns like containers or grids. They provide structure to your page and do not contain any cosmetic CSS.

### Components

Components are UI elements. They consist mostly of cosmetic CSS but can also incorporate structural rules if they only affect the corresponding component itself.

### Utilities

Utilities are high-specificity, very explicit classes. They are used as overrides or for rapid prototyping.

### File structure

```
├── settings.css
├── base/
│   ├── _normalize.css
│   ├── _box-sizing.css
│   ├── _copy.css
│   ├── _buttons.css
│   ├── _forms.css
│   ├── _lists.css
│   ├── _tables.css
│   ├── _media.css
│   └── base.css
├── objects/
│   ├── _container.css
│   ├── _grid.css
│   └── objects.css
├── components/
│   ├── _example.css
│   └── components.css
├── utilities/
│   ├── _animations.css
│   ├── _clearfix.css
│   ├── _color.css
│   ├── _copy.css
│   ├── _display.css
│   ├── _flexbox.css
│   ├── _float.css
│   ├── _margin.css
│   ├── _padding.css
│   ├── _position.css
│   ├── _push.css
│   ├── _span.css
│   ├── _vertical-align.css
│   ├── _z-index.css
│   └── utilities.css
└── style.css
```
