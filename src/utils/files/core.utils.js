import logUtils from './logUtils';

class CoreUtils {
  sleep(millisecondsCount) {
    if (!millisecondsCount) {
      return;
    }
    return new Promise((resolve) => setTimeout(resolve, millisecondsCount))
      .catch((e) => logUtils.log(e));
  }

  getValue(e) {
    return e.target.value || e.currentTarget.value;
  }

  getAttributeName(e, attributeName) {
    return e.target.getAttribute(attributeName) || e.currentTarget.getAttribute(attributeName);
  }
}

export default new CoreUtils();
