<script>
  export let title = "";
  export let showSlideshow = false;
</script>

{#if showSlideshow}
  <div class="hero-slideshow">
    <div class="slide slide1"></div>
    <div class="slide slide2"></div>
    <div class="slide slide3"></div>
    <div class="slide slide4"></div>
    <div class="slide slide5"></div>
    <div class="slide slide6"></div>
  </div>
{/if}

<div class="showcase index--showcase">
  <h1 class="showcase__title">{title}</h1>
</div>

<style>
  /* Container for hero images */
  .hero-slideshow {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Behind the showcase text */
  }

  /* Each slide covers full area and is initially hidden */
  .hero-slideshow .slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center center;
    opacity: 0;
    animation: fadeSlide 36s infinite;
  }

  /* Delay each slide by 6s (36s / 6 images) */
  .hero-slideshow .slide:nth-child(1) {
    animation-delay: 0s;
  }
  .hero-slideshow .slide:nth-child(2) {
    animation-delay: 6s;
  }
  .hero-slideshow .slide:nth-child(3) {
    animation-delay: 12s;
  }
  .hero-slideshow .slide:nth-child(4) {
    animation-delay: 18s;
  }
  .hero-slideshow .slide:nth-child(5) {
    animation-delay: 24s;
  }
  .hero-slideshow .slide:nth-child(6) {
    animation-delay: 30s;
  }

  /* Fade animation keyframes: visible for 5s, fade to next */
  @keyframes fadeSlide {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .hero-slideshow .slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center center;
    opacity: 0;
    animation: fadeSlide 36s infinite;
    pointer-events: none;
  }

  /* Background images and animation delay for each slide */
  .hero-slideshow .slide1 {
    background-image: url("https://images.pexels.com/photos/2724079/pexels-photo-2724079.jpeg");
    animation-delay: 0s;
  }
  .hero-slideshow .slide2 {
    background-image: url("https://images.pexels.com/photos/4180994/pexels-photo-4180994.jpeg");
    animation-delay: 6s;
  }
  .hero-slideshow .slide3 {
    background-image: url("https://images.pexels.com/photos/28843954/pexels-photo-28843954.jpeg");
    animation-delay: 12s;
  }
  .hero-slideshow .slide4 {
    background-image: url("https://images.pexels.com/photos/7832620//pexels-photo-7832620.jpeg");
    animation-delay: 18s;
  }
  .hero-slideshow .slide5 {
    background-image: url("https://images.pexels.com/photos/9400988/pexels-photo-9400988.jpeg");
    animation-delay: 24s;
  }
  .hero-slideshow .slide6 {
    background-image: url("https://images.pexels.com/photos/3319711/pexels-photo-3319711.jpeg");
    animation-delay: 30s;
  }

  /* Fade animation keyframes */
  @keyframes fadeSlide {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  /* Keep the showcase text above images */
  .index--showcase {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 650px;
    padding: 0 1rem;
  }
</style>
