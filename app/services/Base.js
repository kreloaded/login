/**
 * This is base service class.
 * @class ServiceBase
 */
class ServiceBase {
  constructor() {
    const oThis = this;
  }

  /**
   * This function is used to perform the service action.
   *
   * @returns {Promise<*>}
   */
  async perform() {
    const oThis = this;

    return oThis._asyncPerform();
  }

  /**
   * This function is used to perform the service action.
   *
   * @returns {Promise<*>}
   */
  async _asyncPerform() {
    throw new Error("Sub-class to implement.");
  }
}

module.exports = ServiceBase;
