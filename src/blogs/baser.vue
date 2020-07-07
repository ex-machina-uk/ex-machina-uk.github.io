<template>
<div style="position: absolute; top: 0px; width: 100%;">
            <div class="nav-back"/>

<!-- Hero (Parallax) and nav -->
<div class="hero is-cover is-relative is-theme-primary">


    <!-- Hero image -->
    <div id="main-hero" class="hero-body blog-hero">
        <div class="container has-text-centered">
            <h1 class="title flex-title main-title text-bold is-2">
                <!-- Previous post arrow -->
                <span class="material-icons is-hidden-mobile" data-toggle="tooltip"  style="opacity: 0;" data-placement="right" data-title="Previous post">keyboard_arrow_left</span>
                <span class="subpage-title">{{header}}</span>
                <!-- Next post arrow -->
                <span class="material-icons is-hidden-mobile" style="opacity: 0;" data-toggle="tooltip" data-placement="left" data-title="Next post">keyboard_arrow_right</span>
            </h1>
        </div>
    </div>
</div>

<!-- Post section -->
<div class="section blog-section section-light-grey">
    <div class="container">
        <div class="columns">
            <div class="column is-10 is-offset-1">
                <!-- Post -->
                <div class="flex-card is-full-post light-bordered">
                    <!-- Post meta -->
                    <div class="post-meta content">
                        <!-- Author avatar -->
                        <img class="author-avatar is-hidden-mobile" :src="user_img" alt=""
                            data-demo-src="assets/img/agency/avatars/carolin.png">
                        <!-- title -->
                        <div class="title-block">
                            <h2>{{title}}</h2>
                            <h4>{{subtitle}}</h4>
                            <!-- Like button -->
                            <button class="like is-full fab-btn mini" data-toggle="tooltip" data-placement="left" data-title="Liked by 64 persons">
                                <span class="like-wrapper">
                                    <i class="material-icons unliked">favorite_border</i>
                                    <i class="material-icons liked">favorite</i>
                                    <span class="like-overlay"></span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <!-- Post body -->
                    <div class="post-body content has-text-left">
                        <!-- More meta -->
                        <div class="author-name pb-10">by <b><a href="#">{{user_name}}</a></b>, <span>{{user_title}}</span></div>
                        <!-- <div class="timestamp"><i class="sl sl-icon-clock"></i> oct 16 2018, 4:12pm</div> -->

                        <!-- Post content -->
                        <slot name="body" class="">
                        
                        </slot>

                        <!-- Share post -->
                        <div class="share-post">
                            <div class="share-text">
                                Share:
                            </div>
                            <!-- Sharing icons -->
                            <div class="sharing-options">
                                <i class="fa fa-envelope"></i>
                                <i class="fa fa-facebook"></i>
                                <i class="fa fa-twitter"></i>
                                <i class="fa fa-linkedin"></i>
                                <i class="fa fa-google-plus"></i>
                                <i class="fa fa-reddit"></i>
                                <i class="fa fa-tumblr"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- excluuuuuuuuuuuuuuuuuuuuuuded ----------------------------------------------------------------------------------------->

                <!-- Show comments box -->
                <div class="flex-card comment-count light-bordered" v-if="false"> 
                    <i class="im im-icon-Speach-Bubble11"></i>
                    <div class="text"><span class="count-number">3</span> <span class="is-hidden-mobile">comments</span></div>
                    <button id="show-comments" class="button is-link primary-text">Show all</button>
                </div>

                <!-- Comments list -->
                <div class="flex-card comments-list light-bordered animated preFadeInUp fadeInUp is-hidden">
                    <!-- Comment -->
                    <div class="media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                                <img src="https://via.placeholder.com/250x250" alt=""
                                    data-demo-src="assets/img/agency/avatars/elie.jpg">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <strong>Barbara Middleton</strong>
                                <span class="timestamp">2 hours ago</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.</p>
                                <small>
                                    <a><i class="fa fa-heart"></i></a>
                                    <span class="count">9</span>
                                    <span class="reply"><a href="#">Reply</a></span>
                                </small>
                            </div>

                            <!-- Nested answer 1 -->
                            <div class="media">
                                <figure class="media-left">
                                    <p class="image is-32x32">
                                        <img src="https://via.placeholder.com/250x250" alt=""
                                            data-demo-src="assets/img/agency/avatars/ben.jpg">
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <strong>Sean Brown</strong>
                                        <span class="timestamp">30 minutes ago</span>
                                        <p>Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.</p>
                                        <small>
                                            <a><i class="fa fa-heart"></i></a>
                                            <span class="count">5</span>
                                            <span class="reply"><a href="#">Reply</a></span>
                                        </small>
                                    </div>
                                </div>
                            </div>

                            <!-- Nested answer 2 -->
                            <div class="media">
                                <figure class="media-left">
                                    <p class="image is-32x32">
                                        <img src="https://via.placeholder.com/250x250" alt=""
                                            data-demo-src="assets/img/agency/avatars/sally.jpg">
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <strong>Kayli Eunice </strong>
                                        <span class="timestamp">15 minutes ago</span>
                                        <p>Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.</p>
                                        <small>
                                            <a><i class="fa fa-heart"></i></a>
                                            <span class="count">2</span>
                                            <span class="reply"><a href="#">Reply</a></span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Write comment textarea -->
                <div class="flex-card compose-card light-bordered" v-if="false">
                    <figure class="avatar image is-64x64 is-hidden-mobile">
                        <img class="img-circle" src="https://via.placeholder.com/250x250" alt=""
                            data-demo-src="assets/img/agency/avatars/helen.jpg">
                    </figure>
                    <!-- textarea -->
                    <div class="control-wrapper">
                        <div class="control">
                            <textarea class="textarea is-button" placeholder="Write something..."></textarea>
                            <div class="textarea-button">
                                <button class="button primary-btn btn-align raised">Publish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

</template>

<style>
.nav-back {
    height: 70px;
    background: rgba(0,0,0,0.6)

}
</style>
<script>
export default {
    props: ["header", "title", "subtitle", "user_img", "user_name", "user_title" ]

}
</script>