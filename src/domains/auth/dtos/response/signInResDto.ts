import TokenDto from "@/domains/auth/dtos/tokenDto";

export default interface SignInResDto {
  readonly token: TokenDto;
}
