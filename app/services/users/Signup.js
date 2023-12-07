const rootPrefix = "../../..",
  ServiceBase = require(rootPrefix + "/app/services/Base");

/**
 * This service is used to perform the signup action.
 * @class Signup
 */
class Signup extends ServiceBase {
  constructor(params) {
    super(params);
  }

  /**
   * This function is used to perform the service action.
   *
   * @returns {Promise<*>}
   */
  async _asyncPerform() {
    console.log("Service called");

    return {
      success: true,
      message: "Signup successful.",
    };
  }
}

module.exports = Signup;
