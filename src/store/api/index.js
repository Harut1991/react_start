/**
 * @flow
 */
import config from '../../utils/config';
import NetworkService from '../../core/services/network/NetworkService';

/**
 * @class Api
 */
class Api {
  service: NetworkService = null;

  constructor() {
    this.service = new NetworkService(config.api);
  }

  /**
   * getGlobalKPIs
   * @param {xxx} params - PlayerId
   * @returns {Promise<{data: xxxx}>} -
   */
  async getTest(params: Object): { data: Object } {
    const { userId } = params;
    const { body } = await this.service.makeAPIGetRequest(
      'posts',
      { query_params: { userId } }
    );
    return {
      data: body
    };
  }
}

export default new Api();
