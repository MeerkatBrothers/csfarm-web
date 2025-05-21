import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import reissueTokenSource from "@/domains/auth/datasources/reissueTokenSource";
import { mapTokenDtoToModel } from "@/domains/auth/mappers/fragments/tokenMapper";
import { Token } from "@/domains/auth/models/fragments/token";
import { ReissueTokenResDto, reissueTokenResDtoSchema } from "@/domains/auth/dtos/response/reissueTokenResDto";
import { TokenDto } from "@/domains/auth/dtos/fragments/tokenDto";

const reissueTokenRepo = async (refreshToken: string): Promise<Token> => {
  const apiResponse: ApiResponse<ReissueTokenResDto> = await reissueTokenSource(refreshToken);
  const data: ReissueTokenResDto = apiResponse.data;

  const validatedData: ReissueTokenResDto = validateOrThrow(reissueTokenResDtoSchema, data);

  const tokenDto: TokenDto = validatedData.token;
  const token: Token = mapTokenDtoToModel(tokenDto);

  return token;
};

export default reissueTokenRepo;
