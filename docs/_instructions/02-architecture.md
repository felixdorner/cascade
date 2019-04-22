---
title: Architecture
slug: architecture
---

Styles are grouped into the following categories:

<div class="c-faq">
<div class="c-faq__item">
<h4 class="c-faq__item-title">Settings</h4>
<div class="c-faq__item-content" markdown="1">
Settings contain global configurations like custom properties and breakpoints which are shared across the system.
</div>
</div>

<div class="c-faq__item">
<h4 class="c-faq__item-title">Base</h4>
<div class="c-faq__item-content" markdown="1">
Base styles are default styles of base elements like body, headings or paragraphs without ID or class selectors. These styles serve as the foundation.
</div>
</div>

<div class="c-faq__item">
<h4 class="c-faq__item-title">Objects</h4>
<div class="c-faq__item-content" markdown="1">
Objects are class-based selectors which define design patterns like containers or grids shared across the system. Classes of this category are prefixed with `o-`.
</div>
</div>

<div class="c-faq__item">
<h4 class="c-faq__item-title">Components</h4>
<div class="c-faq__item-content" markdown="1">
Components are independent parts of any system. However, unity only exists when design elements are in agreement. Therefore, components here are not entirely isolated as they inherit base styles while taking-in specific component-related styles of this category. Classes of this category are prefixed with `c-`.
</div>
</div>

<div class="c-faq__item">
<h4 class="c-faq__item-title">Utilities</h4>
<div class="c-faq__item-content" markdown="1">
Utilities are high-specificity, very explicit style rules which serve one purpose. Classes of this category are prefixed with `u-`.
</div>
</div>

</div>
