<template>
  <div id="app">
    <div class="window">
      <header class="toolbar toolbar-header">
        <h1 class="title">Magali Bidness</h1>
        <div class="toolbar-actions">
          <div class="btn-group">
            <router-link to="/"> 
              <button class="btn btn-default">
                <span class="icon icon-home"></span>
              </button>
            </router-link>|
            <router-link to="/about">
              <button class="btn btn-default">
                <span class="icon icon-folder"></span>
              </button>
            </router-link>
            <button class="btn btn-default active">
              <span class="icon icon-cloud"></span>
            </button>
            <button class="btn btn-default">
              <span class="icon icon-popup"></span>
            </button>
            <button class="btn btn-default">
              <span class="icon icon-shuffle"></span>
            </button>
          </div>
          <button class="btn btn-default">
            <span class="icon icon-home icon-text"></span>
            Filters
          </button>
          <button class="btn btn-default btn-dropdown pull-right">
            <span class="icon icon-megaphone"></span>
          </button>
        </div>
      </header>
      <div class="window-content">
        <div class="pane-group">
          <div class="pane-sm sidebar">
            <nav class="nav-group">
              <h5 class="nav-group-title">Favorites</h5>
              <a class="nav-group-item active">
                <span class="icon icon-home"></span>
                connors
              </a>
              <span class="nav-group-item">
                <span class="icon icon-download"></span>
                Downloads
              </span>
              <span class="nav-group-item">
                <span class="icon icon-folder"></span>
                Documents
              </span>
              <span class="nav-group-item">
                <span class="icon icon-signal"></span>
                AirPlay
              </span>
              <span class="nav-group-item">
                <span class="icon icon-print"></span>
                Applications
              </span>
              <span class="nav-group-item">
                <span class="icon icon-cloud"></span>
                Desktop
              </span>
            </nav>
          </div>
          <div class="pane">
            <router-view />
          </div>
        </div>
      </div>
      <footer class="toolbar toolbar-footer">
        <div class="toolbar-actions">
          <button class="btn btn-default">Cancel</button>

          <button class="btn btn-primary pull-right">Save</button>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
/*
 * File: /Users/tonymedrano/Desktop/vue-cli-electron-photon-starter/src/App.vue
 * Project: /Users/tonymedrano/Desktop/vue-cli-electron-photon-starter
 * Created Date: Tuesday July 2nd 2019
 * Author: tonymedrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2019 Tony A. Medrano
 */
</script>
<style>
#app {
  padding: 0;
  margin: 0;
}
</style>
