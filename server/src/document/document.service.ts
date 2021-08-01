import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentService {
  documents: Map<string, string> = new Map();
  getDocumentById(id: string): string {
    return 'Document' + this.documents.get(id);
  }

  createDocument(id: string, content: string) {
    this.documents.set(id, content);
  }
}
