import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import path from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    
    const fileData = readFileSync(`${__dirname}/files/test.txt`);
    return `Hello NEST World! . Test for caprover. File content: --- ${fileData} ---`;
  }
}
