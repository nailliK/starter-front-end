# Front-End Project Starter

Created By:

* Killian Grant

Contributors:

* Scott Kisloski

## DEVELOPMENT

### Front End Compilation Tasks

React:

* `npm run gulp-watch-react`
* `npm run gulp-build-react`

Vue:

* `npm run gulp-watch-vue`
* `npm run gulp-build-vue`

### Starting http-server

* `npm run server-local`
* `npm run server-prod`

## REMMY

### Breakpoints

Breakpoints should be applied to override (cascade) any elements styles at specific browser widths.

* @ include breakpoint(breakpoint-name) { ... }: overrides styles before and up-to the defined screen-size.
* The breakpoint screen-size parameter also privides the number of columns available to the grid at that breakpoint. For example, 'desktop' carries 12 columns, whereas 'tablet' carries only 8

### The Grid
* @ include container: houses groups of columns. should be applied to grouped content. Flexbox vertical alignment properties may be applied to containers without ill effects.
* @ include cols($columns, $context): determines the width of each element.
  * $columns is the number of columns the element should span out of the number of columns available (via $context or breakpoint).
  * If $context is provided, it overrides the default number of columns available from the breakpoint.