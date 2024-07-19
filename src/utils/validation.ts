export type ValidationStatus =
  | "valid"
  | "invalid"
  | "inconclusive"
  | "uncertified";

/**
 * Example mock function to showcase how a validation function could be implemented.
 */
export const validate = (
  _manifest: any,
  overrideStatus: ValidationStatus
): ValidationStatus => {
  return overrideStatus;
};

/**
 * Example function to demonstrate how a title could be modified based on the validation status.
 */
export const getValidateTitle = (status: ValidationStatus, title: string) => {
  switch (status) {
    case "valid":
      return `✅ Verified | ${title}`;
    case "invalid":
      return `⚠️ Invalid | ${title}`;
    case "inconclusive":
      return `⚠️  Inconclusive | ${title}`;
    case "uncertified":
      return `❓ Uncertified | ${title}`;
    default:
      return title;
  }
};

/**
 * Example function to demonstrate how a description
 */
export const getValidationDescription = (_status: ValidationStatus) =>
  "Click in to learn more about this image's validation status";
