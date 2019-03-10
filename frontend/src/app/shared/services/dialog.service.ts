import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialogs/dialog.component';
import { SharedModule } from '../shared-module';

@Injectable({
  providedIn: SharedModule,
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(message: string) {
    return this.dialog
      .open(DialogComponent, {
        data: message,
      })
      .afterClosed();
  }
}
