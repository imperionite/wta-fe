export const headerMap = {
  "/": {
    class: "index-header",
    showcase: {
      title: "Your Sanctuary of Calm Adventure",
      slideshow: true,
    },
  },

  "/access": {
    class: "access-header",
    showcase: {
      title: "Seamless Access to Paradise",
    },
  },

  "/suites": {
    class: "suites-header",
    match: (path) => path.startsWith("/suites"),
    showcase: {
      title: "Experience Like Never Before",
    },
  },

  "/dining": {
    class: "dining-header",
    showcase: {
      title: "Excellence with Every Bite",
    },
  },

  "/experience": {
    class: "experience-header",
    showcase: {
      title: "Serenity Meets Adventure",
    },
  },
};
