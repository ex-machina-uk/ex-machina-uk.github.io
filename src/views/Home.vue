<template>
  <div class>
    <!-- Hero and nav -->
    <div class="hero is-cover is-relative is-default is-bold" style="z-index:0 !important;">
      <div class="Wallop Wallop--scale">
        <div class="Wallop-list">
          <!-- Slide -->
          <div
            class="Wallop-item has-background-image"
            style="background-image: url(&quot;assets/img/unsplash/office/office-5.jpg&quot;);"
          >
            <div class="Wallop-overlay"></div>
            <div class="Wallop-caption-wrapper">
              <div class="Wallop-caption is-centered">
                <div class="main-inner has-text-centered">
                  <img
                    class="light-logo is-hidden-mobile"
                    src="assets/img/logos/bulkit-white.svg"
                    width="55px"
                  />
                  <h1 style="vertical-align:middle; display:inline;">Ex Machina</h1>
                </div>
                <div>
                  <h2>We are Tech Project Managers</h2>
                </div>

                <div class="caption-action">
                  <a
                    href="#services"
                    class="button button-cta btn-align light-btn btn-outlined is-bold rounded"
                  >Get Started</a>
                </div>
              </div>
            </div>
          </div>
          <!-- Slide -->
          <div
            class="Wallop-item has-background-image Wallop-item--hidePrevious"
            style="background-image: url(&quot;assets/img/unsplash/devs/dev-9.jpg&quot;);"
          >
            >
            <div class="Wallop-overlay"></div>
            <div class="Wallop-caption-wrapper">
              <div class="Wallop-caption is-centered">
                <div class="main-inner">
                  <img
                    class="light-logo is-hidden-mobile"
                    src="assets/img/logos/bulkit-white.svg"
                    width="55px"
                  />
                  <h1 style="vertical-align:middle; display:inline;">Ex Machina</h1>
                </div>
                <div>
                  <h2>Augment your Team With Us</h2>
                </div>
                <div></div>
                <div class="caption-action">
                  <a
                    href="#services"
                    class="button button-cta btn-align light-btn btn-outlined is-bold rounded"
                  >Get Started</a>
                </div>
              </div>
            </div>
          </div>
          <!-- Slide -->
          <div
            class="Wallop-item has-background-image Wallop-item--current Wallop-item--showNext"
            style="background-image: url(&quot;assets/img/unsplash/office/office-2.jpg&quot;);"
          >
            <div class="Wallop-overlay"></div>
            <div class="Wallop-caption-wrapper">
              <div class="Wallop-caption is-centered">
                <div class="main-inner">
                  <img
                    class="light-logo is-hidden-mobile"
                    src="assets/img/logos/bulkit-white.svg"
                    width="55px"
                  />
                  <h1 style="vertical-align:middle; display:inline;">Ex Machina</h1>
                </div>
                <div>
                  <h3>The Future is Remote</h3>
                </div>
                <div></div>
                <div class="caption-action">
                  <a
                    href="#services"
                    class="button button-cta btn-align light-btn btn-outlined is-bold rounded"
                  >Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Pagination dots -->
        <div class="Wallop-pagination">
          <button class="Wallop-dot">go to item 1</button>
          <button class="Wallop-dot">go to item 2</button>
          <button class="Wallop-dot Wallop-dot--current">go to item 3</button>
        </div>
        <!-- Navigation arrows -->
        <button class="Wallop-buttonPrevious is-hidden-mobile">
          <i class="material-icons">arrow_back</i>
        </button>
        <button class="Wallop-buttonNext is-hidden-mobile">
          <i class="material-icons">arrow_forward</i>
        </button>
      </div>
    </div>

    <section
      id="card-testimonials"
      class="section section-feature-grey is-medium is-skewed-sm"
      style="z-index: 2; margin-top: -150px;"
    >
      <div class="container is-reverse-skewed-sm">
        <div class="section-title-wrapper has-text-centered">
          <!-- Clients references -->
          <div class="hero-foot is-pulled">
            <div class="container">
              <div class="tabs partner-tabs is-centered">
                <ul>
                  <li>
                    <a v-lazy-container="{ selector: 'img' }">
                      <img data-src="assets/img/unsplash/work/mb.webp" alt class="partner-logo" />
                    </a>
                  </li>
                  <li>
                    <a v-lazy-container="{ selector: 'img' }">
                      <img data-src="assets/img/unsplash/work/cambridge.png" alt class="partner-logo" />
                    </a>
                  </li>
                  <li>
                    <a v-lazy-container="{ selector: 'img' }">>
                      <img data-src="assets/img/unsplash/work/az-logo.png.png" alt class="partner-logo" />
                    </a>
                  </li>
                  <li>
                    <a v-lazy-container="{ selector: 'img' }">
                      <img
                        data-src="assets/img/unsplash/work/MedImmune_logo.gif"
                        alt
                        class="partner-logo"
                      />
                    </a>
                  </li>
                  <li>
                    <a v-lazy-container="{ selector: 'img' }">
                      <img
                        data-src="assets/img/unsplash/work/cs.png"
                        height="200px"
                        alt
                        class="partner-logo"
                      />
                    </a>
                  </li>
                  <li>
                    <a v-lazy-container="{ selector: 'img' }">

                      <img
                        data-src="assets/img/unsplash/work/oxford.png"
                        height="200px"
                        alt
                        class="partner-logo"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />

          <div class="clean-bg-symbol">
            <i class="fa fa-gg"></i>
          </div>
          <div>
            <h2 class="clean-section-title">What is Our Secret?</h2>
            <h3
              class="subtitle is-3"
            >Pairing industry experts with local talent, to give you stellar development at a price you can afford</h3>
          </div>
        </div>

        <div class="content-wrapper hover-cards">
          <!-- Hover boxes -->
          <div class="columns is-vcentered">
            <div class="column is-10 is-offset-1">
              <div class="columns is-vcentered">
                <div class="column is-6">
                  <!-- Hover box -->
                  <div class="flex-card icon-card-hover first-card light-bordered">
                    <h3 class="card-title is-clean">Deliver Faster</h3>
                    <p
                      class="card-description"
                    >We help you scale up or scale down your team, ensuring faster delivery at lower cost</p>
                  </div>
                  <!-- Hover box 
                  <div class="flex-card icon-card-hover second-card light-bordered">
                    <h3 class="card-title is-clean">Deliver stronger</h3>
                    <p
                      class="card-description"
                    >Taking on work that is fatiguing your team, we will improve your developers productivity.</p>
                  </div>-->
                </div>
                <div class="column is-6">
                  <!-- Hover box -->
                  <div class="flex-card icon-card-hover third-card light-bordered">
                    <h3 class="card-title is-clean">Boost Productivity</h3>
                    <p
                      class="card-description"
                    >Need that extra bit of help with automation, deployment or testing? We have you covered</p>
                  </div>
                  <!-- Hover box 
                  <div class="flex-card icon-card-hover fourth-card light-bordered">
                    <h3 class="card-title is-clean">Expand Products</h3>
                    <p
                      class="card-description"
                    >Explore alternative product paths, at a lower budget. </p>
                  </div>
                  -->
                </div>
              </div>
            </div>
          </div>
          <div class="section-title-wrapper has-text-centered">
            <h2 class="clean-section-title">Half Price for 3 Days</h2>
            <h3 class="subtitle is-3">First 3 days offered at half-price while you try us</h3>
          </div>
          <div
            class="button-wrap has-text-centered is-title-reveal is-bold"
            data-sr-id="1"
            style="; visibility: visible;  -webkit-transform: translateY(0) scale(1); opacity: 1;transform: translateY(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s; transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s; "
          >
            <router-link
              to="/contact"
              class="button button-cta btn-align raised primary-btn raised"
              style="font-weight: strong;"
            >Contact us</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio -->
    <div class="section is-medium section-feature-grey">
      <div class="container">
        <div class="section-title-wrapper has-text-centered">
          <h2 class="clean-section-title">Our Developers - Top 3% of Global Talent</h2>
          <h3
            class="subtitle is-3"
          >We recruit the top 3% of global developer talent. Click a link below to see their profiles</h3>
        </div>

        <div class="content-wrapper">
          <div class="portfolio">
            <div class="columns is-gapless">
              <!-- Portfolio item -->
              <div class="column is-4">
                <div class="portfolio-item" v-lazy-container="{ selector: 'img' }">
                  <img
                    data-src="assets/img/unsplash/other/code-3.jpg"
                    alt
                    data-demo-src="assets/img/unsplash/dev-1.jpg"
                  />
                  <div class="circle-overlay"></div>
                  <div class="project-info has-text-centered">
                    <div class="wrapper">
                      <div class="project-title">Code</div>
                      <div class="project-link"></div>
                    </div>
                  </div>
                </div>
                <!-- Portfolio item -->
                <div class="portfolio-item" v-lazy-container="{ selector: 'img' }">

                  <img
                    data-src="assets/img/unsplash/devs/dev-2.jpg"
                    alt
                    data-demo-src="assets/img/agency/ceramic.jpg"
                  />
                  <div class="circle-overlay"></div>
                  <div class="project-info has-text-centered">
                    <div class="wrapper">
                      <div class="project-title">David </div>
                      <div class="project-link">
                        <a>
                          <i class="material-icons">keyboard_arrow_right</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Portfolio item -->
              <div class="column is-4">
                <div class="portfolio-item" v-lazy-container="{ selector: 'img' }">

                  <img
                    data-src="assets/img/unsplash/devs/dev-4.jpg"
                    alt
                    data-demo-src="assets/img/agency/tin.jpg"
                  />
                  <div class="circle-overlay"></div>
                  <div class="project-info has-text-centered">
                    <div class="wrapper">
                      <div class="project-title">James Dyson</div>
                      <div class="project-link">
                        <a>
                          <i class="material-icons">keyboard_arrow_right</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Portfolio item -->
                <div class="portfolio-item"  v-lazy-container="{ selector: 'img' }">

                  <img
                    data-src="assets/img/unsplash/smiles/smile-1.jpg"
                    alt
                    data-demo-src="assets/img/agency/poster.jpg"
                  />
                  <div class="circle-overlay"></div>
                  <div class="project-info has-text-centered">
                    <div class="wrapper">
                      <div class="project-title">Sohaib Mohammed Ahmad</div>
                      <div class="project-link">
                        <a >
                          <i class="material-icons">keyboard_arrow_right</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Portfolio item -->
                <div class="portfolio-item" v-lazy-container="{ selector: 'img' }">

                  <img
                    data-src="assets/img/unsplash/other/conference.jpg"
                    alt
                    data-demo-src="assets/img/agency/office-brand.jpg"
                  />
                  <div class="circle-overlay"></div>
                  <div class="project-info has-text-centered">
                    <div class="wrapper">
                      <div class="project-title">Kunal Aggarwal</div>
                      <div class="project-link">
                        <a>
                          <i class="material-icons">keyboard_arrow_right</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <!-- Portfolio item -->
                <div class="portfolio-item" v-lazy-container="{ selector: 'img' }">

                  <img
                    data-src="assets/img/unsplash/other/python.jpg"
                    alt
                    data-demo-src="assets/img/agency/frame.jpg"
                  />
                  <div class="circle-overlay"></div>
                  <div class="project-info has-text-centered">
                    <div class="wrapper">
                      <div class="project-title">Sunhil Khabra</div>
                      <div class="project-link">
                        <a >
                          <i class="material-icons">keyboard_arrow_right</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Portfolio item -->
                <div class="portfolio-item"  v-lazy-container="{ selector: 'img' }">

                  <img
                    data-src="assets/img/unsplash/devs/dev-3.jpg"
                    alt
                    data-demo-src="assets/img/agency/iphonex.jpg"
                  />
                  <div class="circle-overlay"></div>
                  <div class="project-info has-text-centered">
                    <div class="wrapper">
                      <div class="project-title">Damilaare Isaac</div>
                      <div class="project-link">
                        <a @click="$router.push({name: 'blog_one'})">
                          View profile
                          <i class="material-icons">keyboard_arrow_right</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About section -->
    <div id="product" class="section is-medium is-skewed-sm">
      <div class="container is-reverse-skewed-sm">
        <!-- Title -->

        <div class="section-title-wrapper has-text-centered">
          <div class="clean-bg-symbol">
            <i class="fa fa-gg"></i>
          </div>

          <h2 class="clean-section-title">Our Strengths</h2>
          <h3 class="subtitle is-3">Strong developers at an affordable rate, managed by a team with 30 years combined experince in technology,
            with backgrounds from Imperial, Oxford and Cambridge. 
          </h3>
        </div>

        <div class="content-wrapper">
          <!-- Icon boxes -->
          <div class="columns is-vcentered">
            <div class="column is-5 is-offset-1 has-text-centered">
              <div class="columns is-vcentered has-text-centered is-multiline">
                <!-- Icon box -->
                <div class="column is-6">
                  <div class="flex-card icon-card hover-inset" v-lazy-container="{ selector: 'img' }">

                    <img data-src="assets/img/icons/invoice.svg" alt />
                    <div class="icon-card-text is-clean">Cost</div>
                  </div>
                </div>
                <!-- Icon box -->
                <div class="column is-6">
                  <div class="flex-card icon-card hover-inset" v-lazy-container="{ selector: 'img' }">

                    <img data-src="assets/img/icons/tablet-dots.svg" alt />
                    <div class="icon-card-text is-clean">API Interfaces</div>
                  </div>
                </div>
                <!-- Icon box -->
                <div class="column is-6">
                  <div class="flex-card icon-card hover-inset"  v-lazy-container="{ selector: 'img' }">
                    <img data-src="assets/img/icons/records.svg" alt />
                    <div class="icon-card-text is-clean">Communication</div>
                  </div>
                </div>
                <!-- Icon box -->
                <div class="column is-6">
                  <div class="flex-card icon-card hover-inset"  v-lazy-container="{ selector: 'img' }">
                    <img data-src="assets/img/icons/sync.svg" alt />
                    <div class="icon-card-text is-clean">Deployments</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Feature text -->
            <div class="column is-5">
              <div class="side-feature-text">
                <h2 class="feature-headline is-clean">Our Strengths</h2>
                <p>You won't find better managed developers at our price-point. We source the best talent globally.</p>
                <p>We combine global talent with strong communication through our management team, having completed technology projects at Barclays, Credit Suisse, Oxford etc.</p>
                <p>Our company has a strong focus on back-end development, data integrations and the languages: python, JAVA and JS.</p>

                <div class="button-wrap">
                  <router-link
                    to="/portfolio"
                    class="button button-cta btn-align raised primary-btn"
                  >Portfolio</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <portfolio />

    <!-- Team section -->
    <div class="section is-medium">
      <div class="container">
        <div class="centered-title">
          <h2>Meet the Executive Team</h2>
          <div class="title-divider"></div>
          <div
            class="subheading"
          >Over 30 years of combined experience in the technology sector. Check out our linkedin profiles</div>
        </div>

        <div class="content-wrapper">
          <div class="modern-team column is-12">
            <!-- Team member -->
            <article class="modern-team-item circle-mask zoom-effect">
              <div class="item-wrapper">
                <div class="item-img"  v-lazy-container="{ selector: 'img' }">
                  <img
                    data-src="assets/img/unsplash/directors/me2.png"
                    class="member-avatar"
                    alt
                    data-demo-src="assets/img/agency/team/one.jpg"
                  />
                </div>
                <div class="overlay-wrapper">
                  <div>

                    <a href="https://www.linkedin.com/in/max-chamberlin-8a68093b/" target="_blank" class="social">
                      <i class="social-icon fa fa-linkedin" ></i>
                    </a>

                  </div>
                </div>
              </div>
              <div class="member-info">
                <h3 class="member-name">
                  Maximilian
                  <strong>Chamberlin</strong>
                </h3>
                <span class="member-position">Operational Lead, CEO</span>
              </div>
            </article>
            <!-- Team member -->
            <article class="modern-team-item circle-mask rotate-zoom-effect">
              <div class="item-wrapper">
                <div class="item-img"  v-lazy-container="{ selector: 'img' }">
                  <img
                    data-src="assets/img/unsplash/directors/me.jpeg"
                    class="member-avatar"
                    alt
                    data-demo-src="assets/img/agency/team/two.jpg"
                  />
                </div>
                <div class="overlay-wrapper">
                  <div>

                    <a href="https://www.linkedin.com/in/mary-mcdowell-911a1a169/" target="_blank" class="social">
                      <i class="social-icon fa fa-linkedin" ></i>
                    </a>

                  </div>
                </div>
              </div>
              <div class="member-info">
                <h3 class="member-name">
                  Mary Eileen
                  <strong>Brown</strong>
                </h3>
                <span class="member-position">Marketing Lead, CMO</span>
              </div>
            </article>
            <!-- Team member -->
            <article class="modern-team-item circle-mask zoom-effect">
              <div class="item-wrapper">
                <div class="item-img"  v-lazy-container="{ selector: 'img' }">
                  <img 
                    data-src="assets/img/unsplash/directors/kais.jpg"
                    class="member-avatar"
                    alt
                    data-demo-src="assets/img/agency/team/one.jpg"
                  />
                </div>
                <div class="overlay-wrapper">
                  <div>

                    <a href="https://www.linkedin.com/in/kaisdukes/" target="_blank" class="social">
                      <i class="social-icon fa fa-linkedin" ></i>
                    </a>

                  </div>
                </div>
              </div>
              <div class="member-info">
                <h3 class="member-name">
                  Kais
                  <strong>Dukes</strong>
                </h3>
                <span class="member-position">Tech Lead, CTO</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <div
      data-background="assets/img/unsplash/bus/bus-4.jpg"
      data-color="#000"
      data-color-opacity="0.7"
      data-demo-background="assets/img/unsplash/bus/bus-4.jpg"
      class="section is-medium parallax is-cover is-relative"
      style="background-image: url(&quot;assets/img/unsplash/bus/bus-4.jpg&quot;); background-attachment: fixed; background-position: 50% 0px;"
    >
      <div class="parallax-overlay" style="background-color: rgb(0, 0, 0); opacity: 0.7;"></div>
      <div class="container">
        <div class="centered-title is-inverted">
          <h2>Let's work together!</h2>
          <div class="title-divider"></div>
          <div
            class="subheading"
          >We do everything to satisfy our clients. Let's start a new project together</div>
        </div>
        <div class="content-wrapper">
          <div class="columns is-vcentered has-text-centered mt-40">
            <div class="column is-4">
              <div class="parallax-counter is-primary">
                <div class="counter-icon">
                  <i class="im im-icon-Address-Book2"></i>
                </div>
                <div class="counter counter-number text-bold">23</div>
                <div class="counter-text">Completed projects</div>
              </div>
            </div>
            <div class="column is-4">
              <div class="parallax-counter is-primary">
                <div class="counter-icon">
                  <i class="im im-icon-Code-Window"></i>
                </div>
                <div class="counter counter-number text-bold">1978</div>
                <div class="counter-text">Commits pushed</div>
              </div>
            </div>
            <div class="column is-4">
              <div class="parallax-counter is-primary">
                <div class="counter-icon">
                  <i class="im im-icon-Laughing"></i>
                </div>
                <div class="counter counter-number text-bold">12</div>
                <div class="counter-text">Satisfied clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Latest posts section -->
    <div class="section is-medium">
      <div class="container">
        <!-- title -->
        <div class="centered-title">
          <h2>Tech Snippets</h2>
          <div class="title-divider"></div>
          <div class="subheading">Our latest thoughts on technology</div>
        </div>

        <div class="content-wrapper">
          <div class="columns is-vcentered latest-posts">
            <!-- Article card -->
            <div class="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3"  v-lazy-container="{ selector: 'img' }">
                    <img
                      data-src="assets/img/unsplash/other/machine-learning.jpg"
                      alt
                      data-demo-src="assets/img/agency/posts/data-insight.jpeg"
                    />
                  </figure>
                  <figure class="image author is-48x48"  v-lazy-container="{ selector: 'img' }">
                    <img
                      data-src="assets/img/agency/avatars/elie.jpg"
                      class="img-circle"
                      alt
                      data-demo-src="assets/img/agency/avatars/helen.jpg"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="timestamp">
                        <!-- <i class="sl sl-icon-clock"></i> nov 17 2017 -->
                      </p>
                      <p class="title is-5">Machine learnig is becoming the mots de jour, but who really gets it?</p>
                    </div>
                  </div>

                  <div class="post-exerpt">
                    Did you know even smaller
                    enterprises can leverage the power of data analytics in their CRM or Marketing and analytics?
                  </div>
                  <div class="has-text-centered">
                    <!-- <a
                      class="button button-cta is-bold btn-align primary-btn btn-outlined rounded"
                    >Read more</a>-->
                  </div>
                </div>
              </div>
            </div>
            <!-- Article card -->
            <div class="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3"  v-lazy-container="{ selector: 'img' }">
                    <img
                      data-src="assets/img/unsplash/other/bulbs.jpg"
                      alt
                      data-demo-src="assets/img/agency/posts/blog.jpeg"
                    />
                  </figure>
                  <figure class="image author is-48x48"  v-lazy-container="{ selector: 'img' }">
                    <img
                      data-src="assets/img/agency/avatars/helen.jpg"
                      class="img-circle"
                      alt
                      data-demo-src="assets/img/agency/avatars/lakisha.jpg"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="timestamp">
                        <!-- <i class="sl sl-icon-clock"></i> nov 17 2017 -->
                      </p>
                      <p class="title is-5">Interconnect your microservices with containerisation</p>
                    </div>
                  </div>

                  <div
                    class="post-exerpt"
                  >With Docker, Google Cloud and Kubernetes, it's easier than ever to ensure your microservices stay connected.</div>
                  <div class="has-text-centered">
                    <!-- <a
                      class="button button-cta is-bold btn-align primary-btn btn-outlined rounded"
                    >Read more</a>-->
                  </div>
                </div>
              </div>
            </div>
            <!-- Article card -->
            <div class="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3"  v-lazy-container="{ selector: 'img' }">
                    <img
                      data-src="assets/img/unsplash/other/codes.jpg"
                      alt
                      data-demo-src="assets/img/agency/posts/laptop-living.jpeg"
                    />
                  </figure>
                  <figure class="image author is-48x48"  v-lazy-container="{ selector: 'img' }">
                    <img
                      data-src="assets/img/agency/avatars/lakisha.jpg"
                      class="img-circle"
                      alt
                      data-demo-src="assets/img/agency/avatars/elie.jpg"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="timestamp">
                        <!-- <i class="sl sl-icon-clock"></i> nov 17 2017 -->
                      </p>
                      <p class="title is-5">Avoid technical debt with beautiful code</p>
                    </div>
                  </div>

                  <div
                    class="post-exerpt"
                  >People will only reuse your code if it is understandable - we bring aesthetics to our code.</div>
                  <div class="has-text-centered">
                    <!--<a
                      class="button button-cta is-bold btn-align primary-btn btn-outlined rounded"
                    >Read more</a>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id="business-types" class="section is-medium is-skewed-sm">
      <div class="container is-reverse-skewed-sm">
        <div class="section-title-wrapper has-text-centered">
          <div class="clean-bg-symbol">
            <i class="fa fa-gg"></i>
          </div>
          <div>
            <h2 class="clean-section-title">We got your business needs covered</h2>
            <h3 class="subtitle is-5 pt-10">Every business is unique, and we adapt to your flow.</h3>
          </div>
        </div>

        <!-- Content -->
        <div class="content-wrapper">
          <div class="columns is-vcentered">
            <div class="column is-5 is-offset-1">
              <div class="side-feature-text">
                <h2
                  class="feature-headline is-clean"
                >Ex Machina is focused on the following industries:</h2>
                <p>We have a range of experience in the alternative finance, insurance and medical technology sectors.</p>
                <p>We have been a part of digital transformation projects in a wide range of industries. Check out our portfolio to learn more.</p>
                <div class="button-wrap">
                  <router-link
                    to="/portfolio"
                    class="button button-cta btn-align raised primary-btn"
                  >Portfolio</router-link>
                </div>
              </div>
            </div>
            <!-- Card with icons -->
            <div class="column is-4 is-offset-1">
              <div class="flex-card company-types">
                <div class="icon-group">
                  <img src="assets/img/icons/bank.svg" alt />
                  <span>Finance services</span>
                </div>
                <div class="icon-group">
                  <img src="assets/img/icons/factory.svg" alt />
                  <span>Pharma</span>
                </div>

                <div class="icon-group">
                  <img src="assets/img/icons/warehouse.svg" alt />
                  <span>Insurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="cta" class="section is-medium is-skewed-sm">
      <div class="container is-reverse-skewed-sm">
        <div class="section-title-wrapper">
          <div class="clean-bg-symbol">
            <i class="fa fa-gg"></i>
          </div>
          <div>
            <h2 class="clean-section-title has-text-centered">Let's dive in.</h2>
          </div>
        </div>
        <div class="content">
          <h4 class="has-text-centered">Get started right away.</h4>
        </div>
        <div
          class="has-text-centered is-title-reveal landing-cta"
          data-sr-id="3"
          style="; visibility: visible;  -webkit-transform: translateY(0) scale(1); opacity: 1;transform: translateY(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s; transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s; "
        >
          <router-link
            to="/contact"
            class="button button-cta btn-align raised primary-btn"
          >Contact Us Now</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import portfolio from "@/components/portfolio.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    portfolio
  },

  mounted() {
    $(".people-carousel").not('.slick-initialized').slick({
      infinite: true,
      dots: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      appendDots: $(".people-carousel")
    });

    $(".clients-logo-carousel").not('.slick-initialized').slick({
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow:
        "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
      nextArrow:
        "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "20px",
            slidesToShow: 2
          }
        }
      ]
    });

    if ($('.Wallop').length) {
        var wallopEl = document.querySelector('.Wallop');
        var wallop = new Wallop(wallopEl);

        var paginationDots = Array.prototype.slice.call(document.querySelectorAll('.Wallop-dot'));

        //Attach click listener on the dots

        paginationDots.forEach(function (dotEl, index) {
            dotEl.addEventListener('click', function () {
                wallop.goTo(index);
            });
        });

        // Listen to wallop change and update classes

        wallop.on('change', function (event) {
            removeClass(document.querySelector('.Wallop-dot--current'), 'Wallop-dot--current');
            addClass(paginationDots[event.detail.currentItemIndex], 'Wallop-dot--current');
        });

        // Helpers
        function addClass(element, className) {
            if (!element) { return; }
            element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
        }

        function removeClass(element, className) {
            if (!element) { return; }
            element.className = element.className.replace(className, '');
        }

        // To start Autoplay, just call the function below
        // and pass in the number of seconds as interval
        // if you want to start autoplay after a while
        // you can wrap this in a setTimeout(); function
        autoplay(5000);

        // This a a helper function to build a simple
        // auto-play functionality.
        function autoplay(interval) {
            var lastTime = 0;

            function frame(timestamp) {
                var update = timestamp - lastTime >= interval;

                if (update) {
                    wallop.next();
                    lastTime = timestamp;
                }

                requestAnimationFrame(frame);
            }

            requestAnimationFrame(frame);
        };
    }
  }
};
</script>


<style>
.Wallop {
}

.tabs::-webkit-scrollbar {
  display: none;
}
</style>