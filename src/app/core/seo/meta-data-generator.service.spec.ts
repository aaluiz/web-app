import { TestBed } from '@angular/core/testing'

import { MetaDataGeneratorService } from './meta-data-generator.service'

describe('MetaDataGeneratorService', () => {
    let service: MetaDataGeneratorService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(MetaDataGeneratorService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    it('shold return a valid MetaData objtect', () => {
        const result = service.setMetaData('Home', 'Pagina Inicial')

        expect(result.tags).toEqual([
            {name: 'description', content: 'Pagina Inicial'},
            {name: 'author', content: 'Alan'},
            {name: 'keywords', content: 'agendamento, atendimento'}
        ])

        expect(result.title).toBe("Home")

    })
})
