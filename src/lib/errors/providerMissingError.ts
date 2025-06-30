export default class ProviderMissingError extends Error {
  constructor(providerName: string) {
    super(`${providerName}이 존재하지 않습니다.`);
    this.name = `ProviderMissingError(${providerName})`;
  }
}
