import { SourceDataModel, SourceDataItemModel } from '../../core/models';
import { SourceNumberTypeEnum } from '../../core/enums';
import { textUtils } from '../../utils';

class CountryCommonLogicService {
  getNumberArray(number) {
    return [number, number === null ? NaN : textUtils.getStringCommaFromNumber(number)];
  }

  setSourceData(country, data) {
    // Source Data.
    const {
      lowerName, isCases, casesPair, isDeaths, deathsPair, isRecovers, recoversPair,
    } = data;
    country.sourcesData[lowerName] = new SourceDataModel({
      cases: new SourceDataItemModel({
        type: SourceNumberTypeEnum.CASE,
        iconName: 'virus',
        itemClass: isCases ? ' case' : '',
        valuesPair: casesPair,
        populationCount: country.populationCount,
        perMillionIconName: 'viruses',
      }),
      deaths: new SourceDataItemModel({
        type: SourceNumberTypeEnum.DEATH,
        iconName: 'skull-crossbones',
        itemClass: isDeaths ? ' death' : '',
        valuesPair: deathsPair,
        populationCount: country.populationCount,
        perMillionIconName: 'skull',
      }),
      recovers: new SourceDataItemModel({
        type: SourceNumberTypeEnum.RECOVER,
        iconName: 'heart',
        itemClass: isRecovers ? ' recover' : '',
        valuesPair: recoversPair,
        populationCount: country.populationCount,
        perMillionIconName: 'shield-virus',
      }),
    });
    return country;
  }
}

export default new CountryCommonLogicService();
