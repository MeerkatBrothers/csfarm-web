import TokenDto from "@/domains/auth/dtos/tokenDto";

export default interface SignUpResDto {
  readonly id: number;
  readonly token: TokenDto;
  readonly createdAt: Date;
}
