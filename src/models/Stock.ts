import {MarketStatus} from './MarketStatus';
import {StockHistoricalData} from './StockHistoricalData';


export interface Stock {
  symbol: string;
  companyName: string;
  currentPrice: number;
  percentageChange: number;
  marketStatus: MarketStatus,
  historicalData: StockHistoricalData[],
  volume: number;
  high: number;
  low: number;
}
