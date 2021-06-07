import { BlobClient, BlobServiceClient, ContainerClient } from '@azure/storage-blob';
import { IFileUploader, IIncomingFile, IUploadedFile } from '../../models/upload';
import { SettingsProvider } from '../config/env';
import { FileRepository } from '../storage/file';

export class AzureFileUploader implements IFileUploader {
    private static _cachedBlobClient?: BlobServiceClient;
    private static _cachedContainerClient?: ContainerClient;

    private static get _containerClient(): ContainerClient {
        if (!this._cachedBlobClient) {
            this._cachedBlobClient = BlobServiceClient.fromConnectionString(SettingsProvider.azureBlobStorageConnectionString);
        }

        if (!this._cachedContainerClient) {
            this._cachedContainerClient = this._cachedBlobClient.getContainerClient(SettingsProvider.azureBlobStorageContainerName);
        }

        return this._cachedContainerClient;
    }

    private static async _getBlockBlobClient(blobName: string) {
        const containerClient = AzureFileUploader._containerClient;
        // todo: consider whether I should createIfNotExists
        return containerClient.getBlockBlobClient(blobName);
    }

    async upload(incomingFile: IIncomingFile): Promise<IUploadedFile> {
        const databaseFile = await FileRepository.create(incomingFile);

        const blockBlobClient = await AzureFileUploader._getBlockBlobClient(databaseFile.id);
        await blockBlobClient.uploadStream(incomingFile.file);

        return databaseFile;
    }
}