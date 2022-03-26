<template>
  <header>
    <nav
      class="navbar has-background-dark is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">

        <div class="navbar-item nav-home">
          <img src="../assets/tvm-header-logo.png"/>
        </div>
        <button
          class="link navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="isActive = !isActive"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div :class="{ active: isActive }" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <ul class="menu-list">
                <a href="/home">TV Series</a>
                <a href="/search">Search</a>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>