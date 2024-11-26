import {defineStore} from 'pinia';
import {Stock} from '../models/Stock';
import {initialStocks} from '../utils/intialStocks';

type StockState = {
  stocks: Stock[],
  currentStock: Stock | null
};

type StockGetters = {
  getStocks: () => void;
  getStockById: () => (symbol:string) => void
};

type StockActions = {
  setStocks: (stocks: Stock[]) => void
}


export const useStocksState = defineStore<
  string,
  StockState,
  StockGetters,
  StockActions
>('stocks', {
  state() {
    return {
      stocks: initialStocks,
      currentStock: null
    };
  },
  getters: {
    getStocks() {
      return this.stocks;
    },
    getStockById() {
      return (symbol) => this.stocks.find((stock) => stock.symbol === symbol) || null;
    }
  },
  actions: {
    setStocks(stocks: Stock[]) {
      this.stocks = stocks;
    }
  }

});
