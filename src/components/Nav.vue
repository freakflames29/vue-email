<template>
<nav class="navbar " role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/">
            <h1 class="title is-1 ">Email Gen</h1>
        </RouterLink>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <RouterLink class="navbar-item" to="/calllog">
                Calllog
            </RouterLink>
            <RouterLink class="navbar-item" to="/quot">
                Quotation
            </RouterLink>
            <RouterLink class="navbar-item" to="/no">
                No respond
            </RouterLink>
            <RouterLink class="navbar-item" to="/vendor">
                Vendor
            </RouterLink>

            <a class="navbar-item">
                Documentation
            </a>

            <!-- <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    More
                </a>

                <div class="navbar-dropdown">
                    <a class="navbar-item">
                        About
                    </a>
                    <a class="navbar-item">
                        Jobs
                    </a>
                    <a class="navbar-item">
                        Contact
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                        Report an issue
                    </a>
                </div>
            </div> -->
        </div>

    </div>
</nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>
