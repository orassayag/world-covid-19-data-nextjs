import textUtils from './text.utils';
import validationUtils from './validation.utils';

class TimeUtils {
  constructor() {
    this.timeElementNames = ['d', 'h', 'min', 'sec'];
    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  getCurrentDate(value) {
    return value ? validationUtils.isValidArray(value)
      ? new Date(...value) : new Date(value) : new Date();
  }

  getTimeDisplay(date) {
    return `${this.getHours(date, false)}:${this.getMinutes(date, false)}:${this.getSeconds(date, false)}`;
  }

  getDateTimeDisplay(date) {
    return `${[this.getDay(date, true), this.getMonth(date, true), this.getYear(date, true)].join('/')} ${[this.getHours(date, true), this.getMinutes(date, true), this.getSeconds(date, true)].join(':')}`;
  }

  getSeconds(date, isUTC) {
    return textUtils.addLeadingZero(isUTC ? date.getUTCSeconds() : date.getSeconds());
  }

  getMinutes(date, isUTC) {
    return textUtils.addLeadingZero(isUTC ? date.getUTCMinutes() : date.getMinutes());
  }

  getHours(date, isUTC) {
    return textUtils.addLeadingZero(isUTC ? date.getUTCHours() : date.getHours());
  }

  getDay(date, isUTC) {
    return textUtils.addLeadingZero(isUTC ? date.getUTCDate() : date.getDate());
  }

  getMonth(date, isUTC) {
    return textUtils.addLeadingZero((isUTC ? date.getUTCMonth() : date.getMonth()) + 1);
  }

  getYear(date, isUTC) {
    return isUTC ? date.getUTCFullYear() : date.getFullYear();
  }

  getDifferenceTimeBetweenDates(data) {
    const { startDateTime, endDateTime } = data;
    if (!startDateTime || !endDateTime) {
      return [null, null];
    }
    // Get the total time.
    const totalTime = Math.floor(endDateTime - startDateTime);
    // Get total seconds between the times.
    let delta = totalTime / 1000;
    // Calculate (and subtract) whole days.
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;
    // Calculate (and subtract) whole hours.
    const hours = Math.floor((delta / 3600) % 24);
    delta -= hours * 3600;
    // Calculate (and subtract) whole minutes.
    const minutes = Math.floor((delta / 60) % 60);
    delta -= minutes * 60;
    // What's left is seconds.
    // In theory the modulus is not required.
    const seconds = Math.floor(delta % 60);
    return [totalTime, [days, hours, minutes, seconds]];
  }

  addTimeElement(data) {
    const { elementName, elementValue, maximumElementsCount } = data;
    let { differenceTimeDisplay, currentElementsCount } = data;
    if (currentElementsCount >= maximumElementsCount) {
      return {
        differenceTimeDisplay,
        currentElementsCount,
      };
    }
    if (elementValue > 0) {
      if (differenceTimeDisplay) {
        differenceTimeDisplay += ' ';
      }
      differenceTimeDisplay += `${elementValue}${elementName}`;
      currentElementsCount += 1;
    }
    return {
      differenceTimeDisplay,
      currentElementsCount,
    };
  }

  getDifferenceTimesDisplay(data) {
    const [totalTime, timeElements] = this.getDifferenceTimeBetweenDates(data);
    if (!timeElements) {
      return null;
    }
    if (totalTime < 1000) {
      return {
        differenceTime: totalTime,
        differenceTimeDisplay: '0sec',
      };
    }
    const { maximumElementsCount } = data;
    let differenceTimeDisplay = '';
    let currentElementsCount = 0;
    for (let i = 0; i < timeElements.length; i += 1) {
      const result = this.addTimeElement({
        elementName: this.timeElementNames[i],
        elementValue: timeElements[i],
        currentElementsCount,
        maximumElementsCount,
        differenceTimeDisplay,
      });
      differenceTimeDisplay = result.differenceTimeDisplay;
      currentElementsCount = result.currentElementsCount;
    }
    return {
      differenceTime: totalTime,
      differenceTimeDisplay,
    };
  }

  subtractHours(date, hours) {
    return this.getCurrentDate(date.getTime() - (hours * 60) * 60000);
  }

  getDisplayTextTime(displayTime) {
    return `${displayTime} ago`;
  }

  getTitleDate() {
    const date = this.getCurrentDate();
    return `${this.monthNames[date.getMonth()]} ${this.getDay(date, true)}, ${this.getYear(date, true)}`;
  }
}

export default new TimeUtils();
