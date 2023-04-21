class ValidationUtils {
  isExists(list) {
    return list && list.length > 0;
  }

  isValidArray(variable) {
    return Object.prototype.toString.call(variable) === '[object Array]';
  }
}

export default new ValidationUtils();
