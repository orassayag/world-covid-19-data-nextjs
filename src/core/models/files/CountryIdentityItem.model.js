class CountryIdentityItemModel {
  constructor({
    iconName, iconTooltip, value,
  }) {
    this.itemClassName = null;
    this.iconName = iconName;
    this.iconTooltip = iconTooltip;
    this.iconType = null;
    this.value = value;
    this.isLastItem = null;
    this.isIconOnly = null;
    this.isURL = null;
    this.urlText = null;
    // Set default values.
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.itemClassName = '';
    this.isLastItem = false;
    this.isIconOnly = false;
    this.isURL = false;
  }
}

export default CountryIdentityItemModel;
