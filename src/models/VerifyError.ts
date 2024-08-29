const UNSUPPORTED_MEDIA_TYPE = 415;
const BAD_REQUEST = 400;

type VerifyErrorCode = typeof UNSUPPORTED_MEDIA_TYPE | typeof BAD_REQUEST;

export default class VerifyError extends Error {
  constructor(code: VerifyErrorCode) {
    super(`${code} - Verify Error`);
  }
}

export const getCode = (error: VerifyError): VerifyErrorCode => {
  return (
    (parseInt(error.message.split(" - ")[0]) as VerifyErrorCode) || BAD_REQUEST
  );
};
