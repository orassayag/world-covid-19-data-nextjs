import textUtils from './text.utils';
import validationUtils from './validation.utils';

class LogicUtils {
  sort(list, fields) {
    return list.sort((a, b) => fields.map((o) => {
      let dir = 1;
      if (o[0] === '-') { dir = -1; o = o.substring(1); }
      if (!a[o] && b[o]) return 1;
      if (a[o] && !b[o]) return -1;
      return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
    }).reduce((p, n) => (p || n), 0));
  }

  filter(array, filter) {
    if (!validationUtils.isExists(Object.keys(filter))) {
      return array;
    }
    const query = this.buildFilter(filter);
    const result = this.filterData(array, query);
    return result;
  }

  buildFilter(filter) {
    const query = {};
    for (const keys in filter) {
      if (filter[keys].constructor === Array && validationUtils.isExists(filter[keys])) {
        query[keys] = filter[keys];
      }
    }
    return query;
  }

  filterData(array, query) {
    const filteredData = array.filter((item) => {
      for (const key in query) {
        if (item[key] === undefined || !query[key].includes(item[key])) {
          return false;
        }
      }
      return true;
    });
    return filteredData;
  }

  filterDates(array, filter) {
    const { dateFieldName, fromDate, toDate } = filter;
    return array.filter((item) => item[dateFieldName].getTime() >= fromDate.getTime()
      && item[dateFieldName].getTime() <= toDate.getTime());
  }

  getPerMillionNumbers(data) {
    const { number, populationCount } = data;
    const result = Math.floor((number / populationCount) * 1000000);
    return {
      perMillionNumber: result,
      perMillionNumberDisplay: textUtils.getStringCommaFromNumber(result),
    };
  }
}

export default new LogicUtils();
