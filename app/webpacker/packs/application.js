import '../stylesheets/application';

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")
require("bootstrap/dist/js/bootstrap")

var Trix = require("trix")
require("@rails/actiontext")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

// import '../javascripts/direct_uploads.js';

window.jQuery = $;
window.$ = $;

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip();
})

//require("packs/custom.js")
