const ACCOUNTS_KEY = 'smart-oshxona-accounts';
const PASSWORD_HASH_ITERATIONS = 120000;

const toHex = (bytes) => Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
const fromHex = (hex) => Uint8Array.from(hex.match(/.{2}/g) || [], (byte) => Number.parseInt(byte, 16));

function readAccounts() {
  let savedAccounts;

  try {
    savedAccounts = window.localStorage.getItem(ACCOUNTS_KEY);
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(`Brauzer xotirasiga murojaat qilib bo'lmadi: ${reason}`, { cause: error });
  }

  if (!savedAccounts) return [];

  try {
    const accounts = JSON.parse(savedAccounts);
    if (!Array.isArray(accounts)) throw new Error('Hisoblar ro‘yxati noto‘g‘ri formatda.');
    return accounts;
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(`Saqlangan hisoblarni o'qib bo'lmadi: ${reason}`, { cause: error });
  }
}

function writeAccounts(accounts) {
  try {
    window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(`Hisobni saqlab bo'lmadi: ${reason}`, { cause: error });
  }
}

async function hashPassword(password, salt) {
  if (!globalThis.crypto?.subtle) {
    throw new Error('Parolni xavfsiz qayta ishlash uchun saytni localhost yoki HTTPS orqali oching.');
  }

  const key = await globalThis.crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  );
  const digest = await globalThis.crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: PASSWORD_HASH_ITERATIONS, hash: 'SHA-256' },
    key,
    256,
  );
  return toHex(new Uint8Array(digest));
}

export async function registerAccount({ name, email, password }) {
  const accounts = readAccounts();
  const normalizedEmail = email.trim().toLowerCase();

  if (accounts.some((account) => account.email === normalizedEmail)) {
    throw new Error('Bu email bilan hisob allaqachon ro‘yxatdan o‘tgan.');
  }

  const salt = globalThis.crypto.getRandomValues(new Uint8Array(16));
  const account = {
    name: name.trim(),
    email: normalizedEmail,
    passwordSalt: toHex(salt),
    passwordHash: await hashPassword(password, salt),
  };

  writeAccounts([...accounts, account]);
  return { name: account.name, email: account.email };
}

export async function authenticateAccount({ email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const accounts = readAccounts();
  const account = accounts.find((entry) => entry.email === normalizedEmail);

  if (
    !account
    || typeof account.passwordSalt !== 'string'
    || account.passwordHash !== await hashPassword(password, fromHex(account.passwordSalt))
  ) {
    throw new Error("Email yoki parol noto'g'ri.");
  }

  return { name: account.name, email: account.email };
}
