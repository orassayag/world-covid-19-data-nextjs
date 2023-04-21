import { logicUtils, textUtils } from '../../../utils';

class SourceDataItemModel {
  constructor({
    type, iconName, itemClass, valuesPair, populationCount, perMillionIconName,
  }) {
    this.type = type;
    this.iconName = iconName;
    this.itemClass = itemClass;
    this.numberClass = null;
    this.count = null;
    this.countDisplay = null;
    this.countLeadingValue = null;
    this.countPerMillion = null;
    this.countPerMillionDisplay = null;
    this.perMillionIconName = perMillionIconName;
    // Set default values.
    this.setDefaultValues(valuesPair, populationCount);
  }

  setDefaultValues(valuesPair, populationCount) {
    this.numberClass = '';
    this.countDisplay = '';
    this.countPerMillionDisplay = 'N/A';
    if (valuesPair && valuesPair.length === 2) {
      this.count = valuesPair[0];
      if (textUtils.isInvalidNumber(this.count)) {
        this.count = null;
        this.countDisplay = 'N/A';
        this.numberClass = ' no-data';
        this.countLeadingValue = 'N/A';
      } else {
        this.countDisplay = valuesPair[1];
        if (!textUtils.isInvalidNumber(populationCount)) {
          this.countLeadingValue = `${this.countDisplay} (${textUtils.getPercentageDisplay(this.count, populationCount)}%)`;
          if (populationCount > 0 && this.count > 0) {
            const { perMillionNumber, perMillionNumberDisplay } = logicUtils.getPerMillionNumbers({
              number: this.count,
              populationCount,
            });
            this.countPerMillion = perMillionNumber;
            this.countPerMillionDisplay = perMillionNumberDisplay;
          }
        }
      }
    }
  }
}

export default SourceDataItemModel;
