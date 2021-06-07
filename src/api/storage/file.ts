import { IIncomingFile, IUploadedFile } from '../../models/upload';
import { id as generateId } from '../../util/string';

export abstract class FileRepository {
    public static async create(incomingFile: IIncomingFile): Promise<IUploadedFile> {
        const id = generateId();

        // TODO: add to database

        return {
            originalName: incomingFile.fileName,
            uploadedAt: new Date(),
            id
        };
    }
}