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
      'http://localhost:8888/ui/sdc#/questionnaire-response/46bc2803-dde5-4d60-a2ac-0712558f61fa?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTRENTaGFyZWRMaW5rSXNzdWVyIiwiZXhwIjoxNzEzMjI1NjAwLCJvcGVyYXRpb25zIjpbImZoaXItcHJvY2Vzcy1yZXNwb25zZSIsInByb2Nlc3MtcmVzcG9uc2UiXSwicSI6eyJpZCI6ImNvbnNlbnQtZm9ybSIsInVybCI6Imh0dHA6Ly9mb3Jtcy5haWRib3guaW8vcXVlc3Rpb25uYWlyZS9jbGllbnQtY29uc2VudC0tLWFwcGVuZHVtIn0sInFyIjp7ImlkIjoiNDZiYzI4MDMtZGRlNS00ZDYwLWEyYWMtMDcxMjU1OGY2MWZhIn0sImFsbG93LWFtZW5kIjpudWxsLCJyZWRpcmVjdC1vbi1zYXZlIjpudWxsLCJyZWRpcmVjdC1vbi1zdWJtaXQiOm51bGx9.0PlMLsHVGHhBg-qzuAQxUu-DJG85cVU29cJBuzJvoGI';
  }
}
