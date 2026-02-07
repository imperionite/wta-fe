<svelte:head>
  <title>Suites | Skye Suites</title>
</svelte:head>

<main class="suites-main">
  <!-- Junior Suite Section -->
  <section
    id="suites-top"
    class="suites-section"
    aria-labelledby="suites-top-heading"
  >
    <div class="container">
      <!-- BOOTSTRAP: Container -->
      <div class="suites-intro">
        <h2 id="suites-top-heading" class="suites-heading">Junior Suite</h2>
        <p class="suites-subheading">
          Our junior suite rooms are well equipped and offer spectacular views.
        </p>
      </div>

      <div class="suites-card">
        <div class="suites-card-tabs">
          <!-- Junior Suite Tabs using buttons and proper ARIA roles -->
          <ul
            class="nav nav-pills suites-tabs"
            role="tablist"
            aria-label="Junior Suite Room Types"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active suites-tab"
                id="tab-silene-junior"
                data-bs-toggle="pill"
                data-bs-target="#tab-content-silene-junior"
                type="button"
                role="tab"
                aria-controls="tab-content-silene-junior"
                aria-selected="true"
                tabindex="0"
              >
                SILENE JUNIOR SUITE
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link suites-tab"
                id="tab-lupine-junior"
                data-bs-toggle="pill"
                data-bs-target="#tab-content-lupine-junior"
                type="button"
                role="tab"
                aria-controls="tab-content-lupine-junior"
                aria-selected="false"
                tabindex="-1"
              >
                LUPINE JUNIOR SUITE
              </button>
            </li>
          </ul>
        </div>

        <div class="tab-content">
          <div
            class="tab-pane fade show active suites-room-info"
            role="tabpanel"
            id="tab-content-silene-junior"
            aria-labelledby="tab-silene-junior"
            tabindex="0"
          >
            <div class="row">
              <div class="col-md-7 col-sm-12 left">
                <img
                  class="img-fluid suites-room-img"
                  src="https://images.pexels.com/photos/16436963/pexels-photo-16436963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="A two-person bed inside the Junior Suite room with elegant décor"
                  loading="lazy"
                />
              </div>

              <div class="col-md-5 col-sm-12 right">
                <div class="suites-room-features">
                  <ul class="suites-features-list">
                    <li class="suites-features-item">
                      <span
                        ><i
                          class="fa-solid fa-ruler-combined suites-features-icon"
                        ></i>215 sq.ft. / 20 sq.m</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-user-group suites-features-icon"
                        ></i>For 2 people</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-bath suites-features-icon"
                        ></i>Shower or bathtub</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-wifi suites-features-icon"
                        ></i>Wifi &amp; TV</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-mug-saucer suites-features-icon"
                        ></i>Kettle or coffee machine</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-mountain suites-features-icon"
                        ></i>Mountain view</span
                      >
                    </li>
                  </ul>
                  <button
                    class="suites-book-btn btn btn-danger"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#bookNowModal"
                    data-suite="silene-junior-suite"
                    aria-label="Book Silene Junior Suite"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade suites-room-info"
            role="tabpanel"
            id="tab-content-lupine-junior"
            aria-labelledby="tab-lupine-junior"
            tabindex="0"
          >
            <div class="row">
              <div class="col-md-7 col-sm-12 left">
                <img
                  class="img-fluid suites-room-img"
                  src="https://images.pexels.com/photos/31817153/pexels-photo-31817153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Lupine Junior Suite room with modern furniture and large windows"
                  loading="lazy"
                />
              </div>

              <div class="col-md-5 col-sm-12 right">
                <div class="suites-room-features">
                  <ul class="suites-features-list">
                    <li class="suites-features-item">
                      <span
                        ><i
                          class="fa-solid fa-ruler-combined suites-features-icon"
                        ></i>230 sq.ft. / 21 sq.m</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-user-group suites-features-icon"
                        ></i>For 2 people</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-bath suites-features-icon"
                        ></i>Bathtub</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-wifi suites-features-icon"
                        ></i>Wifi &amp; TV</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-mug-saucer suites-features-icon"
                        ></i>Coffee machine</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i
                          class="fa-solid fa-umbrella-beach suites-features-icon"
                        ></i>Ocean view</span
                      >
                    </li>
                  </ul>
                  <button
                    class="suites-book-btn btn btn-danger"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#bookNowModal"
                    data-suite="lupine-junior-suite"
                    aria-label="Book Lupine Junior Suite"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Suite Section -->
  <section class="suites-section" aria-labelledby="suites-main-heading">
    <div class="container">
      <!-- BOOTSTRAP: Container -->
      <div class="suites-intro">
        <h2 id="suites-main-heading" class="suites-heading">Suite</h2>
        <p class="suites-subheading">
          Our suite rooms are spacious with spectacular views and luxurious
          amenities.
        </p>
      </div>
      <div class="suites-card">
        <div class="suites-card-tabs">
          <ul
            class="nav nav-pills suites-tabs"
            role="tablist"
            aria-label="Suite Room Types"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active suites-tab"
                id="tab-silene-suite"
                data-bs-toggle="pill"
                data-bs-target="#tab-content-silene-suite"
                type="button"
                role="tab"
                aria-controls="tab-content-silene-suite"
                aria-selected="true"
                tabindex="0"
              >
                SILENE SUITE
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link suites-tab"
                id="tab-lupine-suite"
                data-bs-toggle="pill"
                data-bs-target="#tab-content-lupine-suite"
                type="button"
                role="tab"
                aria-controls="tab-content-lupine-suite"
                aria-selected="false"
                tabindex="-1"
              >
                LUPINE SUITE
              </button>
            </li>
          </ul>
        </div>

        <div class="tab-content">
          <div
            class="tab-pane fade show active suites-room-info"
            role="tabpanel"
            id="tab-content-silene-suite"
            aria-labelledby="tab-silene-suite"
            tabindex="0"
          >
            <div class="row">
              <div class="col-md-7 col-sm-12 left">
                <img
                  class="img-fluid suites-room-img"
                  src="https://images.pexels.com/photos/28054852/pexels-photo-28054852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="A two-person bed inside the Suite Room with elegant bedding and mountain view"
                  loading="lazy"
                />
              </div>

              <div class="col-md-5 col-sm-12 right">
                <div class="suites-room-features">
                  <ul class="suites-features-list">
                    <li class="suites-features-item">
                      <span
                        ><i
                          class="fa-solid fa-ruler-combined suites-features-icon"
                        ></i>430 sq.ft. / 40 sq.m</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-user-group suites-features-icon"
                        ></i>For 2 people</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-bath suites-features-icon"
                        ></i>Shower or bathtub</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-wifi suites-features-icon"
                        ></i>Wifi &amp; TV</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-mug-saucer suites-features-icon"
                        ></i>Kettle or coffee machine</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i
                          class="fa-solid fa-bell-concierge suites-features-icon"
                        ></i>Room Service</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-mountain suites-features-icon"
                        ></i>Mountain view</span
                      >
                    </li>
                  </ul>
                  <button
                    class="suites-book-btn btn btn-danger"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#bookNowModal"
                    data-suite="silene-suite"
                    aria-label="Book Silene Suite"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade suites-room-info"
            role="tabpanel"
            id="tab-content-lupine-suite"
            aria-labelledby="tab-lupine-suite"
            tabindex="0"
          >
            <div class="row">
              <div class="col-md-7 col-sm-12 left">
                <img
                  class="img-fluid suites-room-img"
                  src="https://images.pexels.com/photos/31817155/pexels-photo-31817155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Lupine Suite room with luxurious furnishings and scenic view."
                  loading="lazy"
                />
              </div>

              <div class="col-md-5 col-sm-12 right">
                <div class="suites-room-features">
                  <ul class="suites-features-list">
                    <li class="suites-features-item">
                      <span
                        ><i
                          class="fa-solid fa-ruler-combined suites-features-icon"
                        ></i>450 sq.ft. / 42 sq.m</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-user-group suites-features-icon"
                        ></i>For 2 people</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-bath suites-features-icon"
                        ></i>Bathtub</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-wifi suites-features-icon"
                        ></i>Wifi &amp; TV</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i class="fa-solid fa-mug-saucer suites-features-icon"
                        ></i>Coffee machine</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i
                          class="fa-solid fa-bell-concierge suites-features-icon"
                        ></i>Room Service</span
                      >
                    </li>
                    <li class="suites-features-item">
                      <span
                        ><i
                          class="fa-solid fa-umbrella-beach suites-features-icon"
                        ></i>Ocean view</span
                      >
                    </li>
                  </ul>
                  <button
                    class="suites-book-btn btn btn-danger"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#bookNowModal"
                    data-suite="lupine-suite"
                    aria-label="Book Lupine Suite"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  /*=============== Suites Page ===============*/

  /* Suites page specific styles - BEM using suites-prefix */

  /* Layout & Spacing */
  .suites-main {
    padding: 3rem 0rem 1.5rem 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .suites-section {
    /* margin-bottom: 5rem; */
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .suites-intro {
    margin-bottom: 2rem;
  }

  .suites-heading {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--color-text-dark);
  }

  .suites-subheading {
    font-size: 1.2rem;
    color: #555;
    max-width: 650px;
    margin: 0 auto;
  }

  /* Main Container */
  .container {
    width: 90%;
  }

  /* Tabs */
  .suites-tabs {
    display: flex;
    justify-content: space-evenly;
    gap: 0rem;
    border-bottom: 3px solid var(--color-primary);
    list-style: none;
    margin: 0;
    padding-top: 0.5rem;
    user-select: none;
    flex-wrap: nowrap;
  }

  .suites-tab {
    font-weight: 700;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: var(--color-text-dark);
    border-bottom: 3px solid transparent;
    transition:
      color var(--transition),
      border-color var(--transition);
  }

  .suites-tab[aria-selected="true"],
  .suites-tab:hover,
  .suites-tab:focus-visible {
    color: var(--color-primary);
    border-color: var(--color-primary);
    outline: none;
  }

  /* Bootstrap Overrides for Nav Pills */
  .nav-pills .nav-link {
    background-color: #fff;
    color: var(--color-text-dark);
    border-radius: 0rem;
    padding: 0.5rem;
    width: 100%;
    text-align: center;
    white-space: nowrap;
  }

  .nav-pills .nav-link.active {
    background-color: var(--color-text-dark);
    color: #fff;
  }

  /* Room info */
  .suites-room-info {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 1.5rem 0;
    align-items: center;
    width: 100%;
    max-width: 1000px;
  }

  .suites-room-img {
    display: block;
    width: 30rem;
    height: auto;
    object-fit: cover;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
    margin-left: auto;
    margin-right: 0;
  }

  /* Features list */
  .suites-room-features {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: auto;
    margin-top: 1.4rem;
    padding-left: 30px;
  }

  .suites-features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1.2rem 0;
    font-weight: 600;
    color: var(--color-text-dark);
  }

  .suites-features-item {
    margin-bottom: 0.4rem;
    position: relative;
    /* padding-left: 1.3rem; */
    text-align: left;
    font-weight: 300;
  }

  .suites-features-icon {
    color: var(--color-text-dark);
    margin-right: 0.6rem;
  }

  /* Book Button */
  .suites-book-btn {
    background-color: var(--color-primary);
    color: var(--color-bg-light);
    border: none;
    border-radius: var(--border-radius);
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 2px 3px 8px var(--color-primary-dark);
    transition:
      background-color var(--transition),
      box-shadow var(--transition);
    width: fit-content;
  }

  .suites-book-btn:hover,
  .suites-book-btn:focus-visible {
    background-color: var(--color-primary-dark);
    box-shadow: 0 0 10px var(--color-primary);
    outline: 2px solid var(--color-primary-dark);
    outline-offset: 2px;
    outline-offset: 2px;
    outline-style: solid;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .suites-room-info {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .suites-room-img,
    .suites-room-features {
      width: 100%;
    }

    .suites-features-list {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 400px) {
    main {
      padding: 2rem 1rem;
    }

    .suites-heading {
      font-size: 1.8rem;
    }

    .suites-subheading {
      font-size: 1rem;
    }

    .suites-tabs {
      flex-direction: column;
      gap: 0.75rem;
    }

    .suites-tab {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 600px) {
    .nav-link {
      font-size: 2.6vw;
    }
  }
</style>
