import { textUtils } from '../../../utils';

const ColorTypeEnum = textUtils.createEnum([
  ['NIGHT', 'night'],
  ['DAY', 'day'],
]);

const ComponentModeEnum = textUtils.createEnum([
  ['APP', 'app'],
  ['ICONS', 'icons'],
  ['IMAGES', 'images'],
  ['TEST', 'test'],
]);

const CountriesActionTypeEnum = textUtils.createEnum([
  ['FINALIZE', 'finalize'],
  ['CLEANUP', 'cleanup'],
  ['UPDATE', 'update'],
  ['INACTIVE', 'inactive'],
  ['REFRESH', 'refresh'],
]);

const CountrySortTypeEnum = textUtils.createEnum([
  ['CASE', 'case'],
  ['CASE_PER_MILLION', 'casePerMillion'],
  ['DEATH', 'death'],
  ['DEATH_PER_MILLION', 'deathPerMillion'],
  ['RECOVER', 'recover'],
  ['RECOVER_PER_MILLION', 'recoverPerMillion'],
  ['NAME', 'name'],
  ['CODE', 'code'],
  ['CONTINENT', 'continent'],
  ['POPULATION', 'population'],
  ['ADD_TIME', 'addTime'],
  ['UPDATES_COUNT', 'updatesCount'],
  ['LAST_UPDATE_TIME', 'lastUpdateTime'],
]);

const CreditSortTypeEnum = textUtils.createEnum([
  ['ORDER', 'order'],
]);

const DataModeEnum = textUtils.createEnum([
  ['LIVE', 'live'],
  ['LOCAL', 'local'],
  ['RECOVER', 'recover'],
]);

const EnvironmentModeEnum = textUtils.createEnum([
  ['DEVELOPMENT', 'development'],
  ['PRODUCTION', 'production'],
]);

const SortDirectionEnum = textUtils.createEnum([
  ['ASCENDING', 'ascending'],
  ['DESCENDING', 'descending'],
]);

const SourceSortTypeEnum = textUtils.createEnum([
  ['ORDER', 'order'],
  ['NAME', 'name'],
]);

const StatisticsUpdatesSortTypeEnum = textUtils.createEnum([
  ['LAST_UPDATE_TIME', 'lastUpdateTime'],
]);

const UpdateCountryTypeEnum = textUtils.createEnum([
  ['DATA', 'data'],
  ['POPULATION', 'population'],
]);

const ViewTypeEnum = textUtils.createEnum([
  ['VERTICAL', 'vertical'],
  ['HORIZONTAL', 'horizontal'],
]);

export {
  ColorTypeEnum, ComponentModeEnum, CountriesActionTypeEnum, CountrySortTypeEnum,
  CreditSortTypeEnum, DataModeEnum, EnvironmentModeEnum, SortDirectionEnum,
  SourceSortTypeEnum, StatisticsUpdatesSortTypeEnum, UpdateCountryTypeEnum, ViewTypeEnum,
};
