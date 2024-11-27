import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import {
  ERROR_PAGE,
  ERROR_PATH,
  HOME_NAME,
  HOME_PATH,
  STOCK_ITEM,
  STOCK_PATH,
} from './name';
import Home from '@pages/home/Home.vue';
import StockItem from '@pages/stock-item/stockItem.vue';
import ErrorPage from '@pages/error/errorPage.vue';

const routes: RouteRecordRaw[] = [
  {path: HOME_PATH, component: Home, name: HOME_NAME},
  {path: ERROR_PATH, component: ErrorPage, name: ERROR_PAGE},
  {path: STOCK_PATH, component: StockItem, name: STOCK_ITEM},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export * from './name';
