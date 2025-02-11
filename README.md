# AAMCtour

- want to launch by the end of February

## Critical TODO
- [x] Make Alaska / Hawaii under US states
- [x] redo the form for branching logic
  - [x] UI after submitting the form
  - [x] duplicate form submission
- [x] page starts halfway down on load
- [x] airport deletion doesn't work - just deletes FIFO regardless of which city is deleted
- [x] take out the flying / other means
- [x] import airport list
- [x] airport markers messed up
- [x] add in the airports selected to the google form
- [x] consent popup
- [x] header with different sections
- [x] CO2 calculation
- [x] individualized carbon emissions infographic
- [x] double check the distances
- [x] move the form to be right next to the infographic
- [x] make the questions on the form not all required
- [x] references
- [x] deleting a destination and then recalculating emissions breaks the infographic
- [x] you can add arbitrary names that are not in the airport and this breaks the calculate emissions button
- [x] fix github pages build
- [x] double check form submit

### Google form to do
- [x] make google form questions required
- [x] add in residency specialties
- [x] update for new questions

- [ ] check through all the text
- [x] link all of the petition links
- [x] change font
- [x] change about us
- [x] update email in consent popup
- [x] move references to only appear after entering travel info

## Backlog
- [x] style google form
- [ ] you have to click calculate emissions again for the google form to include the newly included airports
- [ ] *Website adapted from mycarmsfooptrint.com* footer
- [ ] convert infographic to use background-image
- [ ] add required warning for certain questions not an alert dialog - https://getbootstrap.com/docs/5.0/forms/validation/
- [ ] basic mobile friendly cleanup - most people using it on desktop
- add vue-cloak
- do we want animation after the form is submitted
- clean up code / comment code / document
- make the map not fixed width
- clicking on the destination should just add it right away without you having to click add or hit enter again
- make the entire initial page fit on the screen
- start using bootstrap for everything
- clean up the comparison chart area
- list of airports on the left overlaps with the map when the screen is too narrow
- web performance issues - might crash if there are too many airports
- mobile friendly
- airplane doesn't fully fly between all destinations
  - see bottom of `map.js`
- airport tags hover
- create custom 404 page - https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site

## Dependencies
- display the advocacy page on a separate page - Karly will generate something with the images
  - https://twitter.com/CFMS_HEART/status/1375195994825048067
- form needs to be finalized
- list of airports

## Resources
- Google Form tutorial
  - https://spin.atomicobject.com/2021/05/20/embedding-google-forms/
  - https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
  - https://www.youtube.com/watch?v=0ZobsvqYA94
- Google Docs tutorial
  - https://jeffreyeverhart.com/2018/09/17/auto-fill-google-doc-from-google-form-submission/
- map
    - Vue map here: https://codepen.io/shshaw/pen/vJNMQY
- itemtype
    - HTML5 Microdata - https://www.htmlgoodies.com/html/web-developer-tutorial-html5-microdata/#fbid=VCU32R9FqvD
- font awesome - icons
- Github Pages tutorial for different custom domains on the same GH account
  - https://deanattali.com/blog/multiple-github-pages-domains/#background
