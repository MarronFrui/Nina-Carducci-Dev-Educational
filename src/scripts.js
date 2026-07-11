import $ from 'jquery';
import '../scss/style.scss';
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
