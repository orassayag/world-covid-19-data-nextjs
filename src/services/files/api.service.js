import axios from 'axios';
import settings from '../../settings/settings';

class APIService {
  async getRequest(source) {
    const { apiURL, isJSON } = source;
    let headers = {};
    if (isJSON) {
      headers = { 'content-type': 'application/json;charset=utf-8' };
    }
    const responseResult = {
      response: null,
      error: null,
    };
    try {
      responseResult.response = await axios.get(apiURL, {
        headers,
        timeout: settings.FETCH_DATA_TIMEOUT,
      });
    } catch (error) {
      if (error) {
        responseResult.error = error;
      }
    }
    return responseResult;
  }
}

export default new APIService();
