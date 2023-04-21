import settings from '../../settings/settings';
import { SourceModel } from '../../core/models';
import { SourceNameEnum } from '../../core/enums';

class SourcesData {
  constructor() {
    const {
      POP1_API_URL, POP2_API_URL, CAC_API_URL, CLN_API_URL, COA_API_URL, CVA_API_URL, CVS_API_URL,
	  GOO_API_URL, WIK_API_URL, WOD_API_URL,
    } = settings;
    /* Note: Don't change the order of the sources,
       it's important for the population calculation logic. */
    this.sourcesList = {
      [SourceNameEnum.POP1]: new SourceModel({
        lowerName: SourceNameEnum.POP1,
        upperName: SourceNameEnum.POP1.toUpperCase(),
        officialName: 'World Population Review',
        apiURL: POP1_API_URL,
        isJSON: false,
        expectedRowsCount: 233,
        order: 1,
        isActive: true,
        isCovidData: false,
      }),
      [SourceNameEnum.POP2]: new SourceModel({
        lowerName: SourceNameEnum.POP2,
        upperName: SourceNameEnum.POP2.toUpperCase(),
        officialName: 'Wikipedia',
        apiURL: POP2_API_URL,
        isJSON: false,
        expectedRowsCount: 242,
        order: 2,
        isActive: true,
        isCovidData: false,
      }),
      [SourceNameEnum.CAC]: new SourceModel({
        lowerName: SourceNameEnum.CAC,
        upperName: SourceNameEnum.CAC.toUpperCase(),
        officialName: 'Corona API',
        apiURL: CAC_API_URL,
        isJSON: true,
        expectedRowsCount: 250,
        order: 3,
        isActive: true,
        isCovidData: true,
      }),
      [SourceNameEnum.CLN]: new SourceModel({
        lowerName: SourceNameEnum.CLN,
        upperName: SourceNameEnum.CLN.toUpperCase(),
        officialName: 'Corona LMAO Ninja',
        apiURL: CLN_API_URL,
        isJSON: true,
        expectedRowsCount: 216,
        order: 4,
        isActive: true,
        isCovidData: true,
      }),
      [SourceNameEnum.COA]: new SourceModel({
        lowerName: SourceNameEnum.COA,
        upperName: SourceNameEnum.COA.toUpperCase(),
        officialName: 'api.covid19api',
        apiURL: COA_API_URL,
        isJSON: true,
        expectedRowsCount: 187,
        order: 5,
        isActive: true,
        isCovidData: true,
      }),
      [SourceNameEnum.CVA]: new SourceModel({
        lowerName: SourceNameEnum.CVA,
        upperName: SourceNameEnum.CVA.toUpperCase(),
        officialName: 'Coronavirus-19-api - herokuapp',
        apiURL: CVA_API_URL,
        isJSON: true,
        expectedRowsCount: 216,
        order: 6,
        isActive: true,
        isCovidData: true,
      }),
      [SourceNameEnum.CVS]: new SourceModel({
        lowerName: SourceNameEnum.CVS,
        upperName: SourceNameEnum.CVS.toUpperCase(),
        officialName: 'corona-virus-stats - herokuapp',
        apiURL: CVS_API_URL,
        isJSON: true,
        expectedRowsCount: 200,
        order: 7,
        isActive: true,
        isCovidData: true,
      }),
      [SourceNameEnum.GOO]: new SourceModel({
        lowerName: SourceNameEnum.GOO,
        upperName: SourceNameEnum.GOO.toUpperCase(),
        officialName: 'Google Docs Source 1',
        apiURL: GOO_API_URL,
        isJSON: false,
        expectedRowsCount: 229,
        order: 8,
        isActive: true,
        isCovidData: true,
      }),
      [SourceNameEnum.WIK]: new SourceModel({
        lowerName: SourceNameEnum.WIK,
        upperName: SourceNameEnum.WIK.toUpperCase(),
        officialName: 'Wikipedia',
        apiURL: WIK_API_URL,
        isJSON: false,
        expectedRowsCount: 229,
        order: 9,
        isActive: true,
        isCovidData: true,
      }),
      [SourceNameEnum.WOD]: new SourceModel({
        lowerName: SourceNameEnum.WOD,
        upperName: SourceNameEnum.WOD.toUpperCase(),
        officialName: 'Google Docs Source 2',
        apiURL: WOD_API_URL,
        isJSON: false,
        expectedRowsCount: 99,
        order: 10,
        isActive: true,
        isCovidData: true,
      }),
    };
  }
}

export default new SourcesData();
