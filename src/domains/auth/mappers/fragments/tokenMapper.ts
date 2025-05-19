import { Token } from "@/domains/auth/models/fragments/token";
import { TokenDto } from "@/domains/auth/dtos/fragments/tokenDto";

export const mapTokenDtoToModel = (dto: TokenDto): Token => {
  const { accessToken, refreshToken } = dto;

  return { accessToken, refreshToken };
};
