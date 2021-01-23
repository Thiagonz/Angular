import { Injectable } from "@angular/core"

@Injectable()
export class DownloadFileService {

    downloadFile(attachment: Attachment)  {
        this.http
            .get(/* URL de download do arquivo */, { responseType:   ResponseContentType.Blob })
            .retry(3) // Aqui especificamos que a quantidade de     tentativas caso o download falhe é 3.
            .map((response: any) => response.blob())
            /* Agora temos o arquivo e é só mandar para o usuário :) */
            }, (err:any) => /* Tratamos erros aqui :) */;
       


    }



