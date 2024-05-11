import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontLoaderService {

  constructor(private httpClient : HttpClient) { }
  getFile(filePath: string): Observable<Uint8Array> {
    return this.httpClient.get(filePath, { responseType: 'arraybuffer' }).pipe(
      map((buffer: ArrayBuffer) => {
        return new Uint8Array(buffer);
      })
    );
  }
}
