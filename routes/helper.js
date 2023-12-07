const rootPrefix = "..";

class RouteHelper {
  constructor(params) {
    const oThis = this;

    oThis.params = params || {};

    oThis.req = oThis.params.req || {};
    oThis.res = oThis.params.res || {};
    oThis.servicePath = oThis.params.servicePath || null;
    oThis.serviceSuccessCallback = oThis.params.serviceSuccessCallback || null;
  }

  async perform() {
    const oThis = this;

    await oThis._performService();

    await oThis._handleServiceResponse();

    oThis._renderResponse(oThis.response, oThis.res);
  }

  async _performService() {
    const oThis = this;

    const Service = require(rootPrefix + oThis.servicePath);

    oThis.response = await new Service(oThis.serviceParams).perform();
  }

  async _handleServiceResponse() {
    const oThis = this;

    if (oThis.serviceSuccessCallback) {
      await oThis.serviceSuccessCallback(oThis.response);
    }
  }

  _renderResponse(result, res) {
    return res.send(result);
  }
}

module.exports = RouteHelper;
