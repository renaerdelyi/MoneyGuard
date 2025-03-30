const APP_ID = '7acfe08982bf45b3a3e2f03f62b1cc1d';
const API_URL = `https://openexchangerates.org/api/latest.json?app_id=${APP_ID}&symbols=USD,EUR`;
const STORAGE_KEY = 'currencyData';

export const fetchCurrencyData = async () => {
  try {
    const cached = localStorage.getItem(STORAGE_KEY);

    if (cached) {
      const parsed = JSON.parse(cached);
      const lastFetched = new Date(parsed.timestamp);
      const now = new Date();
      const diffInMinutes = (now - lastFetched) / (1000 * 60);

      if (diffInMinutes < 60) {
        return parsed.data;
      }
    }

    const response = await fetch(API_URL);
    const result = await response.json();


    const usdRate = result?.rates?.USD;
    const eurRate = result?.rates?.EUR;

    if (!usdRate || !eurRate) {
      throw new Error('Currency data is missing or invalid');
    }

    const currencyData = {
      USD: {
        purchase: usdRate.toFixed(2),
        sale: (usdRate * 1.05).toFixed(2),
      },
      EUR: {
        purchase: eurRate.toFixed(2),
        sale: (eurRate * 1.05).toFixed(2),
      },
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ data: currencyData, timestamp: new Date() })
    );

    return currencyData;
  } catch (error) {
    console.error('Currency fetch failed:', error.message);
    return null;
  }
};

