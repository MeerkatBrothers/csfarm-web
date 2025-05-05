import { LoginPlatform } from "@/domains/auth/enums/loginPlatform";

export default interface CredentialDto {
  readonly identifier: string;
  readonly loginPlatform: LoginPlatform;
}
