import { MetaData } from './../../core/seo/models/MetaData';
import { MetaDataGeneratorService } from './../../core/seo/meta-data-generator.service';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private meta: Meta, private title: Title, private metaGenerator: MetaDataGeneratorService) {
        const metaData: MetaData = this.metaGenerator.setMetaData("Login", "Gerenciador de Agendamento");
        this.meta.addTags(metaData.tags);
        this.title.setTitle(metaData.title);
   }

    ngOnInit(): void {
        console.log("login page");
  }

}
