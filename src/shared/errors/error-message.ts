import { ApiErrorCode } from '@/shared/errors/api-error-code';
import { ClientErrorCode } from '@/shared/errors/client-error-code';

export const ERROR_MESSAGE: Record<string, string> = {
  // Client Error
  [ClientErrorCode.UNKNOWN]: '알 수 없는 에러가 발생했어요.',
  [ClientErrorCode.INITIALIZE_FAILED]: '서비스 초기화에 실패했어요. 잠시 후 다시 시도해 주세요.',
  [ClientErrorCode.API_REQUEST_FAILED]: '요청에 실패했어요. 잠시 후 다시 시도해 주세요.',
  [ClientErrorCode.INVALID_PARAM]: '요청 경로가 올바르지 않아요. 다시 한번 확인해 주세요.',
  [ClientErrorCode.INVALID_FORM]: '입력 값이 올바르지 않아요. 다시 한번 확인해 주세요.',

  // 400 Error
  [ApiErrorCode.E40001001]: '잘못된 로그인 채널입니다.',
  [ApiErrorCode.E40002001]: '닉네임을 입력해 주세요.',
  [ApiErrorCode.E40002002]: '닉네임이 너무 짧아요.',
  [ApiErrorCode.E40002003]: '닉네임이 너무 길어요.',
  [ApiErrorCode.E40006001]: '이런! 정답이 아니에요. 다른 선택지도 살펴볼까요?',
  [ApiErrorCode.E40090001]: '이미지 형식이 올바르지 않아요.',
  [ApiErrorCode.E40090002]: '이미지 크기가 너무 커요.',
  [ApiErrorCode.E40090003]: '이미지 경로가 잘못됐어요.',

  // 401 Error
  [ApiErrorCode.E40101001]: '인증에 실패했어요. 다시 시도해 주세요.',
  [ApiErrorCode.E40101002]: '세션이 만료되었어요. 다시 로그인해 주세요.',
  [ApiErrorCode.E40101003]: '세션이 만료되었어요. 다시 로그인해 주세요.',
  [ApiErrorCode.E40101004]: '비정상적인 접근이에요. 다시 로그인해 주세요.',
  [ApiErrorCode.E40101005]: '비정상적인 접근이에요. 다시 로그인해 주세요.',
  [ApiErrorCode.E40101006]: '인증에 실패했어요. 다시 시도해 주세요.',

  // 404 Error
  [ApiErrorCode.E40401001]: '계정이 존재하지 않아요. 계정을 생성해 주세요.',
  [ApiErrorCode.E40402002]: '프로필이 존재하지 않아요. 프로필을 생성해 주세요.',
  [ApiErrorCode.E40403001]: '지식이 존재하지 않아요.',
  [ApiErrorCode.E40403002]: '오늘의 지식이 아직 준비되지 않았어요. 조금만 기다려 주세요.',
  [ApiErrorCode.E40404002]: '오늘의 퀴즈가 아직 준비되지 않았어요. 조금만 기다려 주세요.',
  [ApiErrorCode.E40405001]: '수확물이 존재하지 않아요.',
  [ApiErrorCode.E40406001]: '타작물이 존재하지 않아요.',

  // 409 Error
  [ApiErrorCode.E40901001]: '이미 존재하는 계정이에요.',
  [ApiErrorCode.E40902001]: '프로필이 이미 있어요.',
  [ApiErrorCode.E40905001]: '이미 수확했어요.',
  [ApiErrorCode.E40906001]: '이미 타작했어요.',

  // 500 Error
  [ApiErrorCode.E50000001]: '서버와 통신 중 에러가 발생했어요. 잠시 후 다시 시도해 주세요.',
  [ApiErrorCode.E50090001]: '이미지 업로드에 실패했어요. 잠시 후 다시 시도해 주세요.',
};
