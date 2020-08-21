import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  public pragas: Array<object> = [];

  

  constructor(public photoService: PhotoService) {

   // array estático, será substituido por consultas em banco
    this.pragas = [

      {
        "nome": "Diatraea saccharalis - Broca da Cana",
        "img": "https://www.agrolink.com.br/upload/problemas/Diatraea_saccharalis86.jpg",
        "nivel": " GRAVE",
        "combate": " liberação de parasitóides como a Cotesia flavipes. Não adotar medidas que causem desequilíbrio nas populações de parasitóides e predadores, sendo necessário racionalizar o uso de produtos químicos.",
        "pInfestação": "Março - outubro",
        "obs":" dificilmente combatida"
      },
      {
        "nome": "Mahanarva fimbriolata - Cigarrinha das Raízes",
        "img": "https://amtecagr.files.wordpress.com/2016/01/cigarrinha-das-raizes-cana-mahanarva-fimbriolata.jpg?w=1000",
        "nivel": "Médio",
        "combate": "aplicação do fungo Metarhizium anisopliae quando forem encontradas populações acima de 3 ninfas por metro linear.",
        "pInfestação": "junho-julho",
        "obs":"dificilmente combatida"
      },
      {
        "nome": "Migdolus fryanus - Migdolus",
        "img": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Migdolus_fryanus.jpg",
        "nivel": "GRAVE",
        "combate": "aplicação de inseticidas por ocasião do preparo do solo, em operação conjunta com a subsolagem (subsolador-aplicador) ou aração (arado de aiveca, com aplicador de inseticida), na época seca, quando se observa maior ocorrência de larvas nas camadas superficiais do solo.",
        "pInfestação": "Março - outubro",
        "obs":"dificilmente combatida"
      },
      {
        "nome": "Sphenophorus levis",
        "img": "https://gebio.com.br/site/wp-content/uploads/2019/08/gebio-2.jpg",
        "nivel": "GRAVE",
        "combate": "consiste na destruição antecipada das soqueiras com o erradicador de soqueiras. A seguir a área deverá ser mantida livre de plantas hospedeiras da praga e o próximo plantio deverá ser realizado o mais tarde possível.",
        "pInfestação": "junho-julho",
        "obs":"dificilmente combatida"
      },
      {
        "nome": "Broca Gigante",
        "img": "https://3.bp.blogspot.com/-AE6QozXekEQ/Ul_hPq13FJI/AAAAAAAAADM/mTSK1L-RSyU/s1600/Larva-da-Broca.jpg",
        "nivel": "Médio",
        "combate": "A termonebulização é uma técnica que consiste na transformação de um inseticida diluído em óleo em uma névoa e a sua aplicação no interior do formigueiro, utilizando equipamentos denominados termonebulizadores.",
        "pInfestação": "junho-julho",
        "obs":"dificilmente combatida"
      },
      {
        "nome": "Lagarta Elasmo",
        "img": "https://i.ytimg.com/vi/lWZ5coUvYkk/maxresdefault.jpg",
        "nivel": "Baixo",
        "combate": "uso de sementes com tratamento industrial, especialmente com a nova tecnologia Fortenza Duo, da Syngenta, é uma grande defesa contra essa praga. E traz um excelente resultado para o produtor.",
        "pInfestação": "Março - outubro",
        "obs":"dificilmente combatida"
      },
    ]
  }

 
}
