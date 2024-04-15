export class Utils {
    static getDiscount = (price, cuttedPrice) => {
        return (((cuttedPrice - price) / cuttedPrice) * 100).toFixed();
    }

    static getDeliveryDate = () => {
        const deliveryDate = new Date();
        deliveryDate.setDate(new Date().getDate() + 7)
        return deliveryDate.toUTCString().substring(0, 11);
    }

    static formatDate = (dt) => {
        return new Date(dt).toUTCString().substring(0, 16);
    }

    static getRandomProducts = (prodsArray, n) => {
        return prodsArray.sort(() => 0.5 - Math.random()).slice(0, n)
    }

    static  applyFiltersToUrl = (currentSearch, selectedFilters) => {
        const updatedSearch = new URLSearchParams(currentSearch);
      
        Object.entries(selectedFilters).forEach(([key, value]:any) => {
          // Remove existing parameter
          updatedSearch.delete(key);
      
          // Append new parameter if value is not empty
          if (Array.isArray(value) && value.length > 0) {
            const joinedValue = value.join(',');
            updatedSearch.append(key, joinedValue);
          } else if (value !== '') {
            updatedSearch.append(key, value);
          }
        });
      
        return updatedSearch;
      };
}