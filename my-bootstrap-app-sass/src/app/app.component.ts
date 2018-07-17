import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  logo = '';
  //url: 'google.com';
  onChangeSelection(fileInput) {
    this.logo = fileInput.target.files[0];

    let reader = new FileReader();

    reader.onload = (e: any) => {
        this.logo = e.target.result;
        console.log('logo:', this.logo);
        console.log('byID: ', document.getElementById('upload-file'));
        console.log('byClass: ', document.getElementsByClassName('upload-image')[0]);
        // document.getElementById('upload-file').style.backgroundImage = "url(" + this.logo + ")";
        (<HTMLElement>document.getElementsByClassName('upload-image')[0]).style.backgroundImage = "url(" + this.logo + ")";
    }

    reader.readAsDataURL(fileInput.target.files[0]);
  }
}
