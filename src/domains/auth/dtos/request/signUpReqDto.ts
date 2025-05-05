import CredentialDto from "@/domains/auth/dtos/credentialDto";

export default interface SignUpReqDto {
  readonly credential: CredentialDto;
}
