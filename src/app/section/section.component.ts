import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewItemDialogComponent } from '../new-item-dialog/new-item-dialog.component';
import { Router } from '@angular/router';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { RemoveBottomSheetComponent } from '../remove-bottom-sheet/remove-bottom-sheet.component';
import { _Node, _Item, StaticDBService } from '../static-db.service';
import { ClipboardService } from 'ngx-clipboard'
import {MatSnackBar} from '@angular/material/snack-bar';
import { ClipboardSnackbarComponent } from '../clipboard-snackbar/clipboard-snackbar.component';
import {Location, APP_BASE_HREF} from "@angular/common";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {
  @Input() sha1: string;
  node: _Node;
  editLink = '';
  questionMD = null;
  answerMD = null;
  constructor(
    public dialog: MatDialog,
    private bottomSheet: MatBottomSheet,
    private db: StaticDBService,
    private clipboard: ClipboardService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private location: Location
  ) { }

  addClick(): void {
    const dialogRef = this.dialog.open(NewItemDialogComponent, {
      width: '80%',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  reloadChildren() {
    // this.answer
    // this.answer.getChildren(this.item.path).then(children => {
    //   this.children = children;
    // });
  }
  answerOf(item: _Item): string {
    return item.attr['a'] || '';
  }
  questionOf(item: _Item): string {
    return item.attr['q'] || '';
  }

  headlineOf(item: _Item): string {
    if (this.questionOf(item)) {
      return this.questionOf(item).split('\n')[0];
    } else if (this.answerOf(item)) {
      return this.answerOf(item).split('\n')[0];
    } else {
      return '';
    }
  }
  ngOnInit() {
    console.log('section init!');
    this.db.getItem(this.sha1).then(node => {
      this.node = node;
      this.editLink = '/write/' + this.node.item.sha1;
      this.reloadChildren();

      this.questionMD = this.questionOf(node.item) || '';
      this.answerMD = this.answerOf(node.item) || '';
    });
  }
  shareClick(item: _Item) {
    this.clipboard.copyFromContent(document.getElementsByTagName('base')[0].href + 'books/' + item.sha1);
    this._snackBar.openFromComponent(ClipboardSnackbarComponent, {
      duration: 4 * 1000,
    });
  }
  openBottomSheet(): void {
    const ref = this.bottomSheet.open(RemoveBottomSheetComponent);
    ref.afterDismissed().subscribe(result => {
      if (result) {
        // this.admin.delete(this.item.path).then(() => {
        //   this.reloadChildren();
        // })
      } else {

      }
    });
  }
}
