---
title: Architecture
slug: architecture
---

Baseline is intended to be used as a simple starting point when writing CSS. It helps to create and maintain a mindful and scalable CSS structure. Therefore, styles are grouped into the following categories:

**Settings**  
Settings contain global configurations like custom properties and breakpoints which are shared across the system.

**Base**  
Base styles are default styles of base elements like headings or paragraphs without ID or class selectors. These styles serve as a browser reset and the foundation for everything specified afterwards in the cascade.

**Objects**  
<span class="subtle-text">Objects are class-based selectors which define design patterns like containers or grids shared across the system. Classes of this category are prefixed with `o-`.</span>

**Components**  
Components are independent parts of any system. However, unity only exists when design elements are in agreement. Therefore, components here are not entirely isolated as they inherit base styles. Classes of this category are prefixed with `c-`.

**Utilities**  
Utilities are high-specificity, very explicit style rules which serve one purpose. Classes of this category are prefixed with `u-`.
