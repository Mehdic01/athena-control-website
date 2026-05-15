/**
 * Validates email format client-side.
 * Requires: proper local part, real-looking domain, TLD of 2+ letters.
 * Rejects: missing TLD, consecutive dots, dot-starting/ending local part,
 *          invalid characters, single-label domains (abc@localhost).
 */
export function isValidEmailFormat(email: string): boolean {
  const trimmed = email.trim();

  if (
    !/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*\.[a-zA-Z]{2,63}$/.test(
      trimmed
    )
  )
    return false;

  // No consecutive dots anywhere
  if (/\.\./.test(trimmed)) return false;

  // Local part (before @) must not start or end with a dot
  const local = trimmed.split("@")[0];
  if (local.startsWith(".") || local.endsWith(".")) return false;

  return true;
}
