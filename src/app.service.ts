import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import path from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    
    const fileData = readFileSync(`${process.cwd()}/src/files/test.txt`);
    return `Hello NEST World! . Test for caprover --- ${fileData}`;
  }
}
