/*
 * @flow
 */

class CacheService {
  static getItem(key: string) {
    return localStorage.getItem(key);
  }

  static setItem(key: string, value: any) {
    return localStorage.setItem(key, value);
  }

  static deleteItem(key: string) {
    return localStorage.removeItem(key);
  }

  static clearStorage() {
    return localStorage.clear();
  }

  static setJson(key: string, json: Object | Array<any>) {
    return CacheService.setItem(key, JSON.stringify(json));
  }

  /**
     * getJson
     * @param {String} key - the key identifer
     * @returns {Object | Array<any>} - parsed json
     */
  static getJson(key: string): Object | Array<any> {
    const json = CacheService.getItem(key);

    return JSON.parse(json);
  }

  static setAuthToken(token: string) {
    return CacheService.setItem('auth_token', token);
  }

  static setUser(value: Object) {
    return CacheService.setItem('user', JSON.stringify(value));
  }

  static setUserPermissions(value: string) {
    return CacheService.setItem('user_permissions', JSON.stringify(value.split(',')));
  }

  static getAuthToken() {
    return CacheService.getItem('auth_token');
  }
}

export default CacheService;
