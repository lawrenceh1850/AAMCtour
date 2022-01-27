# AAMCtour

## Critical TODO
- [x] Make Alaska / Hawaii under US states
- [ ] redo the form for branching logic
  - [ ] UI after submitting the form
  - [ ] duplicate form submission
- [ ] airport deletion doesn't work - just deletes FIFO regardless of which city is deleted
- [ ] you can add arbitrary names that are not in the airport and this breaks the calculate emissions button
- [x] page starts halfway down on load

## Backlog
- add vue-cloak
- clean up the thank you animation iframe
- do we want animation after the form is submitted
- clean up code / comment code / document
- make the map not fixed width
- css of the form is ugly
- clicking on the destination should just add it right away without you having to click add or hit enter again
- make the entire initial page fit on the screen
- start using bootstrap for everything
- clean up the comparison chart area
- list of airports on the left overlaps with the map when the screen is too narrow
- web performance issues - might crash if there are too many airports
- mobile friendly
- airplane doesn't fully fly between all destinations
    - see bottom of `map.js`

## Resources
- Google Form tutorial
  - https://spin.atomicobject.com/2021/05/20/embedding-google-forms/
  - https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
- Google Docs tutorial
  - https://jeffreyeverhart.com/2018/09/17/auto-fill-google-doc-from-google-form-submission/
- map
    - Vue map here: https://codepen.io/shshaw/pen/vJNMQY
- itemtype
    - HTML5 Microdata - https://www.htmlgoodies.com/html/web-developer-tutorial-html5-microdata/#fbid=VCU32R9FqvD