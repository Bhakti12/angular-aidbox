import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  receivedFormLink: string = '';

  constructor() {
    // Simulate receiving form link from backend
    this.receivedFormLink =
      'http://localhost:8888/ui/sdc#/questionnaire-response/04603828-302e-4011-ae23-04b965a139f1?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTRENTaGFyZWRMaW5rSXNzdWVyIiwiZXhwIjoxNzEzNzQ0MDAwLCJvcGVyYXRpb25zIjpbImZoaXItcHJvY2Vzcy1yZXNwb25zZSIsInByb2Nlc3MtcmVzcG9uc2UiXSwicSI6eyJpZCI6ImNhcmVwbGFuIGZvcm0iLCJ1cmwiOiJodHRwOi8vZm9ybXMuYWlkYm94LmlvL3F1ZXN0aW9ubmFpcmUvYWRkLWNhcmVwbGFuLWRhdGEifSwicXIiOnsiaWQiOiIwNDYwMzgyOC0zMDJlLTQwMTEtYWUyMy0wNGI5NjVhMTM5ZjEifSwiYWxsb3ctYW1lbmQiOm51bGwsInJlZGlyZWN0LW9uLXNhdmUiOm51bGwsInJlZGlyZWN0LW9uLXN1Ym1pdCI6bnVsbH0.j102R2Ixo4zvJGNAc5U0f_JZ26Q9-_Lh5mNTJqvRp1A';
  }
}
