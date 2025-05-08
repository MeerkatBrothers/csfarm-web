import type { TokenDto } from "@/domains/auth/dtos/tokenDto";
import type Token from "@/domains/auth/models/token";

export const mapTokenDtoToModel = (dto: TokenDto): Token => {
  const { accessToken, refreshToken } = dto;

  return { accessToken, refreshToken };
};
