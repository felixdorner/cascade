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

### Utilitis

Utilities are high-specificity, very explicit classes. They are used as overrides or for rapid prototyping.
