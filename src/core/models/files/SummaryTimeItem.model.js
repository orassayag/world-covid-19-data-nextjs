class SummaryTimeItemModel {
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
      this.valueDisplay = 'N/A';
    }
  }
}

export default SummaryTimeItemModel;
