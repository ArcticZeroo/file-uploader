import { assertIsNotNull } from '../../util/types';
import dotenv from 'dotenv';

dotenv.config();

export abstract class SettingsProvider {
    private static _env(name: string): string {
        return assertIsNotNull(process.env[name]);
    }

    public static get azureBlobStorageConnectionString() {
        return SettingsProvider._env('AZURE_BLOB_STORAGE_CONNECTION_STRING');
    }

    public static get azureBlobStorageContainerName() {
        return SettingsProvider._env('AZURE_BLOB_STORAGE_CONTAINER_NAME');
    }
}