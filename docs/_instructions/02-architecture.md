---
title: Architecture
slug: architecture
---

Styles are grouped into the following categories:

Settings  
<span class="subtle-text">Settings contain global configurations like custom properties and breakpoints which are shared across the system.</span>

Base  
<span class="subtle-text">Base styles are default styles of base elements like headings or paragraphs without ID or class selectors. These styles serve as a browser reset and the foundation for everything specified afterwards in the cascade.</span>

Objects  
<span class="subtle-text">Objects are class-based selectors which define design patterns like containers or grids shared across the system. Classes of this category are prefixed with `o-`.</span>

Components  
<span class="subtle-text">Components are independent parts of any system. However, unity only exists when design elements are in agreement. Therefore, components here are not entirely isolated as they inherit base styles. Classes of this category are prefixed with `c-`.</span>

Utilities  
<span class="subtle-text">Utilities are high-specificity, very explicit style rules which serve one purpose. Classes of this category are prefixed with `u-`.</span>
