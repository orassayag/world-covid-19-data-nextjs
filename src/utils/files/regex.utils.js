class RegexUtils {
  constructor() {
    this.removeCommas = /,/g;
    this.numberCommas = /\B(?=(\d{3})+(?!\d))/g;
  }
}

export default new RegexUtils();
