<template>
<div class="navbar-placeholder" style="height: 64.3906px;"><nav class="navbar navbar-wrapper navbar-fade is-transparent navbar-light">
            <div class="container">
                <!-- Brand -->
                <div class="navbar-brand">
                    <a class="navbar-item" @click="push('/')">
                        <img class="light-logo" src="assets/img/logos/bulkit-white.svg" alt="">
                        <img class="dark-logo" src="assets/img/logos/bulkit-green.svg" alt="">
                        <span style="padding-left:5px;"> Ex Machina </span>
                    </a>

                   
                    <!-- Responsive toggle -->
                    <div class="custom-burger" data-target="" >
                        <a id="" class="responsive-btn" href="javascript:void(0);" ref="toggler">
                            <span class="menu-toggle">
                                    <span class="icon-box-toggle" ref='togglebox'>
                                        <span class="rotate">
                                            <i class="icon-line-top"></i>
                                            <i class="icon-line-center"></i>
                                            <i class="icon-line-bottom"></i>
                                        </span>
                            </span>
                            </span>
                        </a>
                    </div>
                    <!-- /Responsive toggle -->
                </div>

                <!-- Navbar menu -->
                <div class="navbar-menu">
                    <!-- Navbar Start -->
                    <div class="navbar-start">
                        <!-- Navbar item -->
                        <a class="navbar-item is-slide" to="/about" @click='$refs.toggler.click(); $router.push("/about")'>
                            About
                        </a>
                        <!-- Navbar item -->
                        <a class="navbar-item is-slide" @click='$refs.toggler.click(); $router.push("/portfolio")'>
                            Portfolio
                        </a>
                        <!-- Navbar item 
                                                <router-link class="navbar-item is-slide" to="/blog">

                            Blog
                        </router-link>
                        -->
                        <a class="navbar-item is-slide" @click='$refs.toggler.click(); $router.push("/sectors")'>

                            Sectors
                        </a>

                    </div>

                    <!-- Navbar end -->
                    <div class="navbar-end">
                        <!-- Signup button -->
                        <div class="navbar-item">
                            <a id="#signup-btn"   @click='$refs.toggler.click(); $router.push("/contact")' class="button button-signup btn-outlined is-bold btn-align rounded raised light-btn">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav></div>
        </template>
        <style>
        #nav .is-transparent a {
            color: white;
            /* color: #2c3e50; */
        }
        </style>
        <script>
        export default {
            methods: {
                push(route) {
                    if (this.$refs['togglebox'].classList.contains('active')) {
                        this.$refs.toggler.click()
                    } else {

                    }
                    this.$router.push(route)
                }
            }
        }
        </script>