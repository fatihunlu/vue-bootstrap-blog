<template>
    <div class="row">
        <div class="col-md-8">
            <h1 class="my-4">Page Heading
                <small>Secondary Text</small>
            </h1>
            <div class="card mb-4">
                <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
                <div class="card-body">
                <h2 class="card-title">Post Title</h2>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                <router-link class="btn btn-primary" :to="{ name: 'BlogPage' }">Read More</router-link>
                </div>
                <div class="card-footer text-muted">
                Posted on January 1, 2017 by
                <a href="#">Start Bootstrap</a>
                </div>
            </div>
            <div class="card mb-4">
                <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
                <div class="card-body">
                <h2 class="card-title">Post Title</h2>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                <router-link class="btn btn-primary" :to="{ name: 'BlogPage' }">Read More</router-link>
                </div>
                <div class="card-footer text-muted">
                Posted on January 1, 2017 by
                <a href="#">Start Bootstrap</a>
                </div>
            </div>
            <div class="card mb-4">
                <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
                <div class="card-body">
                <h2 class="card-title">Post Title</h2>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                <router-link class="btn btn-primary" :to="{ name: 'BlogPage' }">Read More</router-link>
                </div>
                <div class="card-footer text-muted">
                Posted on January 1, 2017 by
                <a href="#">Start Bootstrap</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card my-4">
                <h5 class="card-header">Search</h5>
                <div class="card-body">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                    <button class="btn btn-secondary" type="button">Go!</button>
                    </span>
                </div>
                </div>
            </div>
            <div class="card my-4">
                <h5 class="card-header">Categories</h5>
                <div class="card-body">
                <div class="row">
                    <div class="col-lg-6">
                    <ul class="list-unstyled mb-0">
                        <li>
                        <a href="#">Web Design</a>
                        </li>
                        <li>
                        <a href="#">HTML</a>
                        </li>
                        <li>
                        <a href="#">Freebies</a>
                        </li>
                    </ul>
                    </div>
                    <div class="col-lg-6">
                    <ul class="list-unstyled mb-0">
                        <li>
                        <a href="#">JavaScript</a>
                        </li>
                        <li>
                        <a href="#">CSS</a>
                        </li>
                        <li>
                        <a href="#">Tutorials</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div class="card my-4">
                <h5 class="card-header">Side Widget</h5>
                <div class="card-body">
                You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
