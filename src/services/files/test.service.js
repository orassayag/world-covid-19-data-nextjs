import { countriesData } from '../../data';
import { SourceNameEnum } from '../../core/enums';
import { logUtils, timeUtils } from '../../utils';

class TestService {
  async testLogicSources(maxSourceIndex) {
    let { countriesList } = countriesData;
    const sources = Object.values(SourceNameEnum);
    for (let i = 0; i < sources.length; i += 1) {
      const src = sources[i];
      logUtils.log(src);
      const { data } = await this.getData({
        source: src,
        countriesList,
      });
      countriesList = data;
      if (i === maxSourceIndex) {
        break;
      }
    }
    countriesList = this.finalizeData(countriesList);
  }

  async testFlowSources() {
    logUtils.log('Initiate start.');
    let { countriesList } = countriesData;
    const sources = Object.values(SourceNameEnum);
    for (let i = 0; i < sources.length; i += 1) {
      const src = sources[i];
      const { data } = await this.getData({
        source: src,
        countriesList,
      });
      countriesList = data;
    }
    countriesList = this.finalizeData(countriesList);
    logUtils.log('Initiate end.');
    let timer; let
      i = 0;
    const maximum = sources.length;
    const transition = async () => {
      clearTimeout(timer);
      if (i === maximum) {
        i = 0;
      }
      const source = sources[i];
      const { data } = await this.getData({
        source,
        countriesList,
      });
      countriesList = data;
      const dateNow = timeUtils.getCurrentDate();
      logUtils.log(`${timeUtils.getTimeDisplay(dateNow)} | ${source}`);
      logUtils.log(Object.values(countriesList).filter((c) => c.updateSourceData !== null)
        .map((c) => ({ name: c.displayName, updateSourceData: c.updateSourceData })));
      countriesList = this.clearCurrentUpdates(countriesList);
      i += 1;
      timer = setTimeout(transition, 30 * 1000);
    };
    await transition();
  }
}

export default new TestService();
