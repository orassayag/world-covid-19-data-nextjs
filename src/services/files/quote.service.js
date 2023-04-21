import settings from '../../settings/settings';
import quotes from '../../assert/json/quotes.json';
import quotesCategories from '../../assert/json/quotesCategories.json';
import { QuoteModel } from '../../core/models';
import { textUtils } from '../../utils';

class QuoteService {
  getRandomQuote() {
    const quote = quotes[textUtils.getRandomNumber(1, Object.keys(quotes).length).toString()];
    quote.quote = quote.quote.substring(0);
    const quoteCategory = quotesCategories[quote.categoryId.toString()];
    const categoryIconName = quoteCategory.iconNames.length === 0 ? quoteCategory.iconNames[0]
      : quoteCategory.iconNames[textUtils.getRandomNumber(1, quoteCategory.iconNames.length)];
    const iconTypeResults = this.getIconType(categoryIconName);
    return new QuoteModel({
      quote: quote.quote,
      quoteName: quote.name,
      quoteNameURL: `${settings.WIKIPEDIA_BASE_URL}${quote.name}`,
      categoryName: quoteCategory.name,
      categoryIconName: iconTypeResults.iconName,
      categoryIconType: iconTypeResults.iconType,
    });
  }

  getAllIcons() {
    const iconValues = Object.values(quotesCategories);
    const iconsArraysList = [];
    for (let i = 0; i < iconValues.length; i += 1) {
      iconsArraysList.push(iconValues[i].iconNames);
    }
    const icons = Array.from(new Set(iconsArraysList.reduce((acc, e) => acc.concat(e), []))).sort();
    return icons;
  }

  getIconType(iconName) {
    let iconType = '';
    if (iconName.indexOf('fab-') > -1) {
      iconType = 'b';
      iconName = iconName.replace('fab-', '');
    }
    return {
      iconType,
      iconName,
    };
  }
}

export default new QuoteService();
