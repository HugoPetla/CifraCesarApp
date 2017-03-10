import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  traducaoUsuario = "";
  linguagemNormal = "normal";
  linguagemCifrado = "cifrado";

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) { }

  public trocaValores(){
    let aux = this.linguagemNormal;
    this.linguagemNormal=this.linguagemCifrado;
    this.linguagemCifrado=aux;
  }

  public facaTraducaoNote(mensagemUsuario: String) {
    console.log("O que ve ", mensagemUsuario);
    var alfabeto = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var codigos = [];
    var traducaoMensagem = [];
    var traducaoUsuario = "";
    for (var i in mensagemUsuario) {
          codigos.push(alfabeto.indexOf(mensagemUsuario[i].toUpperCase()));
    }
    console.log("Codigo letra ", codigos);
    //começa a conversão de cifra
    if(this.linguagemNormal=='normal'){
      for (var i in codigos) {
          if(codigos[i]!=0){
              codigos[i]+=3;
              if(codigos[i]==27){ codigos[i]=1;
              } else if (codigos[i]==28){ codigos[i]=2;
              } else if (codigos[i]==29){ codigos[i]=3;}
            }
          }
      }else {
        for (var i in codigos) {
            if(codigos[i]!=0){
                if(codigos[i]==3){ codigos[i]=26;
                } else if (codigos[i]==2){ codigos[i]=25;
                } else if (codigos[i]==1){ codigos[i]=24;
                } else { codigos[i]-=3;}
              }
            }
    }
    for (var i in codigos) {
          traducaoMensagem[i] = alfabeto[codigos[i]];
    }

    this.traducaoUsuario=traducaoMensagem.join("");
    console.log("Codigo letra ", codigos);
    console.log("Codigo letra ", traducaoMensagem);
    console.log("Codigo letra ", traducaoUsuario);
    return traducaoUsuario;
  }
}
