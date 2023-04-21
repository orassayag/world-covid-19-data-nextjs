class CreditModel {
  constructor({
    id, name, title, link, iconName, iconType, tooltip, iconTooltip, isMaster, order,
  }) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.link = link;
    this.iconName = iconName;
    this.iconType = iconType;
    this.tooltip = tooltip;
    this.iconTooltip = iconTooltip;
    this.isMaster = isMaster;
    this.order = order;
  }
}

export default CreditModel;
