import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-form-overview',
  templateUrl: './form-overview.component.html',
  styleUrls: ['./form-overview.component.css']
})
export class FormOverviewComponent implements OnInit{
  @Input()
  formContent!: string;

  safeFormUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeFormUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.formContent);
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
