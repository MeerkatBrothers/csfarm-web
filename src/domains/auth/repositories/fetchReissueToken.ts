import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import reissueTokenApi from "@/domains/auth/datasources/reissueTokenApi";
import { mapTokenDtoToModel } from "@/domains/auth/mappers/tokenMapper";
import Token from "@/domains/auth/models/token";
import { ReissueTokenResDto, reissueTokenResDtoSchema } from "@/domains/auth/dtos/response/reissueTokenResDto";
import { TokenDto } from "@/domains/auth/dtos/tokenDto";

const fetchReissueToken = async (refreshToken: string): Promise<Token> => {
  const apiResponse: ApiResponse<ReissueTokenResDto> = await reissueTokenApi(refreshToken);

  const data: ReissueTokenResDto = apiResponse.data;

  const validatedData: ReissueTokenResDto = validateOrThrow(reissueTokenResDtoSchema, data);

  const tokenDto: TokenDto = validatedData.token;
  const token: Token = mapTokenDtoToModel(tokenDto);

  return token;
};

export default fetchReissueToken;
