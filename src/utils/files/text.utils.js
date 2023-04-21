import regexUtils from './regex.utils';

class TextUtils {
  addLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  getNumberFromStringComma(text) {
    if (!text) {
      return text;
    }
    return parseInt(text.replace(regexUtils.removeCommas, ''));
  }

  getStringCommaFromNumber(number) {
    return number.toString().replace(regexUtils.numberCommas, ',');
  }

  // This method takes a map of elements and converts them to freeze objects (an enum-like object).
  createEnum(mapItems) {
    if (!mapItems || mapItems.length <= 0) {
      return;
    }
    const mapList = new Map([...mapItems]);
    const symbolMap = {};
    mapList.forEach((value, key) => {
      symbolMap[key] = value;
    });
    return Object.freeze(symbolMap);
  }

  isAllEqual(list) {
    return list.every((i) => i === list[0]);
  }

  isInvalidNumber(number) {
    return isNaN(number) || number === null || number === '';
  }

  getPercentage(partialValue, totalValue) {
    return ((100 * partialValue) / totalValue);
  }

  getAbsolutePercentage(partialValue, totalValue) {
    return parseInt(this.getPercentage(partialValue, totalValue), 10);
  }

  getPercentageDisplay(partialValue, totalValue) {
    if (!partialValue) {
      return '0.0000';
    }
    return this.getPercentage(partialValue, totalValue).toFixed(4);
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getNumberIfEmpty(number) {
    return number && !isNaN(number) ? number : 0;
  }

  convertToObject(array, fieldName) {
    return array.reduce((result, item) => {
      result[item[fieldName]] = item;
      return result;
    }, {});
  }

  insertAtIndex(text, index, char) {
    return text.substr(0, index) + char + text.substr(index);
  }

  removeLastCharacters(text, count) {
    return text.slice(0, -count);
  }

  upperCaseFirstLetter(text) {
    return text.substr(0, 1).toUpperCase() + text.substr(1).toLowerCase();
  }

  // X% (first) this will be true, Y% false (second).
  getRandomBooleanByPercentage(percentage) {
    return Math.random() < percentage;
  }

  // Equal static boolean.
  getRandomBoolean() {
    return Math.random() >= 0.5;
  }

  getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}

export default new TextUtils();
