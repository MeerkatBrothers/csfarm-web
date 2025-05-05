import CredentialDto from "@/domains/auth/dtos/credentialDto";

export default interface SignInReqDto {
  readonly credential: CredentialDto;
}
