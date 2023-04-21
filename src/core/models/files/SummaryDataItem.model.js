class SummaryDataItemModel {
  constructor({
    type, iconName, value, valueDisplay,
  }) {
    this.type = type;
    this.iconName = iconName;
    this.value = null;
    this.valueDisplay = null;
    // Set default values.
    this.setDefaultValues(value, valueDisplay);
  }

  setDefaultValues(value, valueDisplay) {
    if (value && valueDisplay) {
      this.value = value;
      this.valueDisplay = valueDisplay;
    } else {
      this.value = 0;
      this.valueDisplay = '0';
    }
  }
}

export default SummaryDataItemModel;
