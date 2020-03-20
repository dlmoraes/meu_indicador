<template>
  <q-layout view="hHh lpR lFf" class="shadow-2 rounded-borders">
    <q-header>
      <q-toolbar>
        <q-btn
          v-if="$q.screen.lt.md"
          @click="sidebarEsquerda = !sidebarEsquerda"
          flat
          round
          dense
          icon="more_vert"
        />
        <q-toolbar-title>
          <q-avatar icon="fas fa-chart-line"/>
          Meu Indicador
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="sidebarEsquerda"
      show-if-above
      content-class="menu_lateral"
      :width="200"
      :mini="modoMini"
      :mini-width="60"
      :breakpoint="800"
    >
      <q-list class="container_menu">
        <q-item-label header>Navegação</q-item-label>
        <q-item class="item_menu" active-class="item_menu_ativo" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="search"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Buscar</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="item_menu" active-class="item_menu_ativo" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="favorite"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Favoritos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="item_menu" active active-class="item_menu_ativo" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="work"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Gerências</q-item-label>
          </q-item-section>
          <q-menu content-class="submenus" fit anchor="top right" self="top left">
            <q-item-label header>Gerências</q-item-label>
            <q-item clickable>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-menu>
        </q-item>
        <q-item class="item_menu" active-class="item_menu_ativo" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="insert_chart_outlined"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Indicadores</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <Breadcrumbs/>
      <transition
        appear
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOut"
        mode="out-in"
        :duration="1000"
      >
        <router-view/>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>

  import Breadcrumbs from "../components/Layouts/Breadcrumbs";

  export default {
    name: "MainLayout",
    data() {
      return {
        modoMini: true,
        sidebarEsquerda: true
      };
    },
    components: {
      Breadcrumbs
    }
  };
</script>

<style lang="scss">
  .q-page {
    min-height: calc(100% - 134px) !important;
  }

  .menu_lateral {
    background: #333;
  }

  .q-header {
    background: #333 !important;
    border-bottom: $grey-8 solid 1px;
  }

  .q-drawer__content {
    overflow: hidden !important;
  }

  .q-drawer--standard .q-drawer__content .container_menu a {
    top: 80px !important;
  }

  .q-drawer--mini .q-drawer__content .container_menu a {
    top: 80px !important;
  }

  .q-drawer__content .container_menu a {
    white-space: nowrap;
  }

  .item_menu {
    color: #efefef;
    margin-bottom: 5px;
  }

  .q-drawer--standard .item_menu:first-child,
  .q-drawer--mini .item_menu:first-child {
    margin-top: -15px !important;
    margin-bottom: 55px !important;
  }

  .item_menu:hover,
  .item_menu_ativo:hover {
    background: #efefef;
    color: #5c595c;
  }

  .q-drawer--mini .item_menu_ativo {
    color: #fff;
    background: $primary;
    /*position: relative;*/
    vertical-align: middle;
    /*display: inline-block;*/
    border-radius: 50%;
    font-size: 48px;
    height: 1em;
    width: 1em;
    margin-left: 6px;
  }

  .q-drawer--mini .item_menu_ativo .q-item__label {
    font-size: 14px;
  }

  .q-drawer--standard .item_menu_ativo,
  .q-drawer--mobile .item_menu_ativo {
    color: #fff;
    background: $primary;
  }

  .submenus {
    background: #333;
    color: #fff;
    margin-left: 15px !important;
    border-radius: 3px !important;
  }

  .q-menu .q-item__label--header {
    color: $grey-6;
  }


  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
