import { Readable } from 'stream';

export interface IIncomingFile {
    fileName: string;
    file: Readable;
}

export interface IUploadedFile {
    originalName: string;
    uploadedAt: Date;
    id: string;
}

export interface IFileUploader {
    upload(file: IIncomingFile): Promise<IUploadedFile>;
}