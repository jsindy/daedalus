// @flow
import type { StorageType, StorageKey } from '../types/electron-store.types';

export const STORAGE_TYPES: {
  [key: string]: StorageType,
} = {
  GET: 'get',
  SET: 'set',
  DELETE: 'delete',
  RESET: 'reset',
};

export const STORAGE_KEYS: {
  [key: string]: StorageKey,
} = {
  RESET: 'RESET',
  USER_LOCALE: 'USER-LOCALE',
  USER_NUMBER_FORMAT: 'USER-NUMBER-FORMAT',
  USER_DATE_FORMAT_ENGLISH: 'USER-DATE-FORMAT-ENGLISH',
  USER_DATE_FORMAT_JAPANESE: 'USER-DATE-FORMAT-JAPANESE',
  USER_TIME_FORMAT: 'USER-TIME-FORMAT',
  TERMS_OF_USE_ACCEPTANCE: 'TERMS-OF-USE-ACCEPTANCE',
  THEME: 'THEME',
  DATA_LAYER_MIGRATION_ACCEPTANCE: 'DATA-LAYER-MIGRATION-ACCEPTANCE',
  READ_NEWS: 'READ-NEWS',
  WALLETS: 'WALLETS',
  HARDWARE_WALLETS: 'HARDWARE-WALLETS',
  HARDWARE_WALLET_DEVICES: 'HARDWARE-WALLET-DEVICES',
  WALLET_MIGRATION_STATUS: 'WALLET-MIGRATION-STATUS',
  DOWNLOAD_MANAGER: 'DOWNLOAD-MANAGER',
  APP_AUTOMATIC_UPDATE_FAILED: 'APP-AUTOMATIC-UPDATE-FAILED',
  APP_UPDATE_COMPLETED: 'APP-UPDATE-COMPLETED',
  CURRENCY_SELECTED: 'CURRENCY-SELECTED',
};
