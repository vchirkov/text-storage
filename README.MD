# Text-storage
You can save text from pages by selecting it and pressing `alt+s`.  
You can filter text by topic and domain.  

### Features:
* **Save text:** select text on page and press `alt+s`.
* **Change topic:** open popup and select another topic.
* **Add new topic:** open popup, enter name in filter input, press `add` control.
* **Open selections viewer:** open popup, press `open app` control.

> __*Pro tip:*__
> if text is saved correctly, you'll see cool green icon in top right corner of the page.

### Viewer features:
* **filter by topic:** click on topic in "Topics" column.
* **filter by domain:** click on domain in "Domains" column.
* **disable domain filter:** click on current domain in "Domains" column.
* **open link, where selection was made:** click on selection header (contains domain and topic).

## Technical details
Project consists of four major applications:
* **app** - viewer of section. [Angular, Component approach, ui-router, less]
* **popup** - popup with topics. [Angular, Component approach, ui-router, less]
* **background** - database management, listens to pages, popup and app. [pure js, es6]
* **content-scripts** - script, loaded on page to make selection snapshot. [pure js, es6]

### Build
requires: 
[NodeJS](https://nodejs.org/en/), [Gulp (global installation)](https://www.npmjs.com/package/gulp).

#### Whole project

```
npm install
gulp
```
#### Manifest update
```
npm install
gulp manifest
```
#### Applications separatelly
```
gulp build-app
gulp build-popup
gulp build-background
gulp build-content
```

## To install unpacked version in Chrome
* Open options (three vertical dots in top right corner)
* "More tools"
* "Extensions"
* "Load unpacked extension" (top of the page).
* Open `./dist` folder in project root (after you compiled the project :)).