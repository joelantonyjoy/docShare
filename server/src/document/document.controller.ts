import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentDto } from './DocumentDto';

@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Get('/:id')
  getDocumentById(@Param('id') id: string): string {
    return this.documentService.getDocumentById(id);
  }

  @Post()
  async create(@Body() document: DocumentDto) {
    this.documentService.createDocument(document.id, document.content);
    return 'New doc created';
  }

}
