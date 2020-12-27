<template>
  <div id="app">
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Vue Test</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/table">Table</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            Copyright © 2020 KLVK. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import url('assets/scss/global.scss');

.footer {
  background: #e3e3e3;
  text-align: center;
  padding: 20px;
}
</style>
