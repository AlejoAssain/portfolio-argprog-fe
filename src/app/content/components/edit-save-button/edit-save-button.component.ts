import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-save-button',
  templateUrl: './edit-save-button.component.html',
  styleUrls: ['./edit-save-button.component.scss']
})
export class EditSaveButtonComponent {
  @Input() userIsAuthenticated: boolean = false;
  @Input() userIsEditing: boolean = false;
  @Input() onEditButtonClick!: () => void;
  @Input() onSaveButtonClick!: () => void;


}
