import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/* Reset provided by https://github.com/gatsbyjs/gatsby-starter-blog via MIT license */

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

progress {
  vertical-align: baseline;
}

[hidden],
template {
  display: none;
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
  outline-width: 0;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: inherit;
  font-weight: bolder;
}

dfn {
  font-style: italic;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

mark {
  background-color: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

figure {
  margin: 1em 40px;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}

optgroup {
  font-weight: 700;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}

[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

html {
  box-sizing: border-box;
  font: 112.5%/1.45em georgia, serif;
  overflow-y: scroll;
}

* {
  box-sizing: inherit;
}

*::before {
  box-sizing: inherit;
}

*::after {
  box-sizing: inherit;
}

body {
  color: hsla(0, 0%, 0%, 0.8);
  font-family: sans-serif;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  font-kerning: normal;
  font-weight: normal;
  word-wrap: break-word;
}

img {
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  max-width: 100%;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

h1 {
  color: inherit;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  text-rendering: optimizeLegibility;
}

h2 {
  color: inherit;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  font-size: 1.62671rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  text-rendering: optimizeLegibility;
}

h3 {
  color: inherit;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  font-size: 1.38316rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  text-rendering: optimizeLegibility;
}

h4 {
  color: inherit;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  text-rendering: optimizeLegibility;
}

h5 {
  color: inherit;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  font-size: 0.85028rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  text-rendering: optimizeLegibility;
}

h6 {
  color: inherit;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  font-size: 0.78405rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  text-rendering: optimizeLegibility;
}

hgroup {
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

ul {
  list-style-image: none;
  list-style-position: outside;
  margin-bottom: 1.45rem;
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

ol {
  list-style-image: none;
  list-style-position: outside;
  margin-bottom: 1.45rem;
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

dl {
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

dd {
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

p {
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

figure {
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

pre {
  background: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  font-size: 0.85rem;
  line-height: 1.42;
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  overflow: auto;
  padding: 1.45rem;
  word-wrap: normal;
}

table {
  border-collapse: collapse;
  font-size: 1rem;
  line-height: 1.45rem;
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  width: 100%;
}

fieldset {
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

blockquote {
  margin-bottom: 1.45rem;
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

form {
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

noscript {
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

iframe {
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

hr {
  background: hsla(0, 0%, 0%, 0.2);
  border: none;
  height: 1px;
  margin-bottom: calc(1.45rem - 1px);
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

address {
  margin-bottom: 1.45rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

b {
  font-weight: bold;
}

strong {
  font-weight: bold;
}

dt {
  font-weight: bold;
}

th {
  font-weight: bold;
}

li {
  margin-bottom: calc(1.45rem / 2);
}

ol li {
  padding-left: 0;
}

ul li {
  padding-left: 0;
}

li > ol {
  margin-bottom: calc(1.45rem / 2);
  margin-left: 1.45rem;
  margin-top: calc(1.45rem / 2);
}

li > ul {
  margin-bottom: calc(1.45rem / 2);
  margin-left: 1.45rem;
  margin-top: calc(1.45rem / 2);
}

blockquote *:last-child {
  margin-bottom: 0;
}

li *:last-child {
  margin-bottom: 0;
}

p *:last-child {
  margin-bottom: 0;
}

li > p {
  margin-bottom: calc(1.45rem / 2);
}

code {
  font-size: 0.85rem;
  line-height: 1.45rem;
}

kbd {
  font-size: 0.85rem;
  line-height: 1.45rem;
}

samp {
  font-size: 0.85rem;
  line-height: 1.45rem;
}

abbr {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}

acronym {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}

abbr[title] {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
  text-decoration: none;
}

thead {
  text-align: left;
}

td,
th {
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  -moz-font-feature-settings: "tnum";
  -ms-font-feature-settings: "tnum";
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  padding-bottom: calc(0.725rem - 1px);
  padding-left: 0.96667rem;
  padding-right: 0.96667rem;
  padding-top: 0.725rem;
  text-align: left;
}

th:first-child,
td:first-child {
  padding-left: 0;
}

th:last-child,
td:last-child {
  padding-right: 0;
}

tt,
code {
  background-color: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  font-family:
    "SFMono-Regular",
    Consolas,
    "Roboto Mono",
    "Droid Sans Mono",
    "Liberation Mono",
    Menlo,
    Courier,
    monospace;
  padding: 0;
  padding-bottom: 0.2em;
  padding-top: 0.2em;
}

pre code {
  background: none;
  line-height: 1.42;
}

code::before,
code::after,
tt::before,
tt::after {
  content: " ";
  letter-spacing: -0.2em;
}

pre code::before,
pre code::after,
pre tt::before,
pre tt::after {
  content: "";
}

@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}
`

export default GlobalStyle
