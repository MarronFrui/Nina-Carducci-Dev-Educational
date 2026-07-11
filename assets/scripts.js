import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './maugallery.js';

$(document).ready(function () {
  console.log('scripts.js ready, gallery found:', $('.gallery').length);
  $('.gallery').mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: 'myAwesomeLightbox',
    showTags: true,
    tagsPosition: 'top',
  });
});
