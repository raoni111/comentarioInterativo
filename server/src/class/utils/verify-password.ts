import bcrypt from 'bcryptjs';

export function verifyPassword(
  passwordClient: string,
  passwordDb: string,
): boolean {
  return bcrypt.compareSync(passwordClient, passwordDb);
}
