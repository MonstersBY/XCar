/*
 * External dependencies
 */
// When dropping the lite-youtube-embed, don't forget to remove the path to the appropriate files in webpack.config.js to the PurgeCSSPlugin plugin
import 'lite-youtube-embed/';
import 'lite-youtube-embed/src/lite-yt-embed.css';

// Bootstrap all modules
//import 'bootstrap/dist/js/bootstrap.bundle.min';

// Or import just what we need
//import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
//import 'bootstrap/js/dist/dropdown';
import bootstrapModal from 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/offcanvas';
//import 'bootstrap/js/dist/popover';
//import 'bootstrap/js/dist/scrollspy';
//import 'bootstrap/js/dist/tab';
//import 'bootstrap/js/dist/toast';
//import 'bootstrap/js/dist/tooltip';

/*
 * Internal dependencies
 */

import '../index.html'; // Hack for recompile webpack when html changes (requires null-loader)
import './styles/style.scss';

import 'glightbox/dist/css/glightbox.min.css';
import GLightbox from 'glightbox';

import bootstrapModalHash from './components/bootstrapModalHash';

import Swiper from 'swiper';
import { EffectFade, Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

document.addEventListener('DOMContentLoaded', () => {
  GLightbox();
  bootstrapModalHash(bootstrapModal);

  new Swiper('.swiper__main',{
    modules: [EffectFade, Autoplay],
    speed: 2500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })

  document.querySelectorAll('.modal-catalog').forEach((container) => {
    // Modal first Thumb
    var modalCatalogThumb = new Swiper(container.querySelector('.swiper__catalog-thumbs'), {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(container.querySelector('.swiper__catalog'), {
      modules: [Thumbs],
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: modalCatalogThumb,
      },
    });

    // Modal color Thumb
    var modalColorThumb = new Swiper(container.querySelector('.swiper__color-thumbs'), {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(container.querySelector('.swiper__color'), {
      modules: [Thumbs],
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: modalColorThumb,
      },
    });
  })
});
