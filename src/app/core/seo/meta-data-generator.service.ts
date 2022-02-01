import { MetaData } from './models/MetaData'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class MetaDataGeneratorService {
    constructor() {}

    setMetaData(title: string, description: string): MetaData {
        const result: MetaData = {
            title,
            tags: [
                { name: 'description', content: description },
                { name: 'author', content: 'Alan' },
                {
                    name: 'keywords',
                    content:
                        'agendamento, atendimento',
                },
            ],
        }
        return result
    }
}
