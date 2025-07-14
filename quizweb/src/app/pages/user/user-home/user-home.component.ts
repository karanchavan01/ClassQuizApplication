import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackService } from 'src/app/services/feedback.service';
import { LoginService } from 'src/app/services/login.service';
import { RecordsService } from 'src/app/services/records.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  standalone: false,
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  arr: any = [
    {
      "name": 'krishna',
      "value": 9000
    },
    {
      "name": "lagad",
      "value": 2000
    },
    {
      "name": "varsha",
      "value": 3000
    },
    {
      "name": "geeta",
      "value": 5000
    },
  ];

  view: any[] = [700, 370];
  colorScheme = {
    domain: ['#704FCA', '#48852C', '#867A3D', '#5B6FCB', '#25706F']
  };
  schemeType: string = 'ordinal';
  gradient: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  legendTitle: string = 'Products';
  legendTitleMulti: string = 'Months';
  legendPosition: string = 'below';
  legend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Sales';
  xAxisLabel: string = 'Products';
  animations: boolean = true;
  showGridLines: boolean = true;
  showDataLabel: boolean = true;
  barPadding: number = 5;
  tooltipDisabled: boolean = false;
  roundEdges: boolean = true;

  user: any;

  records: any;

  marks: Array<any>;
  qname: Array<any>;

  currtime: any;
  userName: any;

  feed =
    {
      'ftitle': '',
      'fcategory': '',
      'fdesc': '',
      'ftime': '',
      'username': ''
    };

  constructor(
    private _login: LoginService,
    private _record: RecordsService,
    private _snack: MatSnackBar,
    private _feedback: FeedbackService
  ) {
    this.marks = new Array<any>();
    this.qname = new Array<any>();
  }

  ngOnInit(): void {
    this.user = this._login.getUser();

    let username = this.user.username;
    this.userName = this.user.username;

    this._record.getRecordsOfUser(username).subscribe(
      (data: any) => {
        this.records = data;
        console.log(this.records);
        for (let val of data) {
          this.marks.push(val.obtainedMarks);
          this.qname.push(val.quiz.title);
        }
      },
      (error: any) => {
        Swal.fire('Error', 'Error in loading data.', 'error');
      }
    );
  }

  getCurrentTime() {
    let date: Date = new Date();
    this.currtime = date.toString();
    this.currtime = this.currtime.split(' ', 5);
    let d = this.currtime[1] + ' ' + this.currtime[2] + ' ' + this.currtime[3];
    let t = this.currtime[4];
    let time = d + ' ' + t;
    console.log('Date: ' + d + 'Time: ' + t);
    return time;
  }

  subform() {
    if (this.feed.ftitle.trim() == '' || this.feed.ftitle.trim() == null) {
      this._snack.open('Please enter feedback title', 'Ok', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
      return;
    }

    if (this.feed.fcategory.trim() == '' || this.feed.fcategory.trim() == null) {
      this._snack.open('Please choose feedback category', 'Ok', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
      return;
    }

    if (this.feed.fdesc.trim() == '' || this.feed.fdesc.trim() == null) {
      this._snack.open('Please enter feedback description', 'Ok', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
      return;
    }

    if (this.feed.fdesc.length > 250) {
      this._snack.open('Description content should not exceed 250 characters.', 'Ok', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
      return;
    }

    this.feed.ftime = this.getCurrentTime();
    this.feed.username = this.userName;

    this._feedback.addFeedback(this.feed).subscribe(
      (data: any) => {
        Swal.fire('Success', 'Your feedback has been submitted successfully.', 'success');
        this.feed =
        {
          'ftitle': '',
          'fcategory': '',
          'fdesc': '',
          'ftime': '',
          'username': ''
        };
      },
      (error: any) => {
        Swal.fire('Error', 'Something went wrong while submitting your feedback.', 'error');
      }
    );
  }

  downloadResultPDF(record: any): void {
    const username = this.user?.username || 'Student';
    const percentage = ((record.obtainedMarks / record.quiz.maxMarks) * 100).toFixed(2);
    const status = parseFloat(percentage) >= 40 ? 'PASSED ✅' : 'FAILED ❌';

    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    doc.text('Quiz Result Card', 70, 20);

    // Horizontal Line
    doc.setLineWidth(0.5);
    doc.line(10, 25, 200, 25);

    doc.setFontSize(12);
    let y = 35;

    // Basic Info
    doc.text(`Username          : ${username}`, 20, y);
    doc.text(`Date             : ${record.date}`, 20, (y += 10));
    doc.text(`Quiz Title       : ${record.quiz.title}`, 20, (y += 10));
    doc.text(`Category         : ${record.quiz.category.title}`, 20, (y += 10));

    // Divider
    doc.line(10, (y += 5), 200, y);
    y += 10;

    // Marks & Stats
    doc.text(`Total Questions        : ${record.quiz.noOfQuestions}`, 20, y);
    doc.text(`Attempted Questions    : ${record.attemptedQuestions}`, 20, (y += 10));
    doc.text(`Correct Answers        : ${record.correctAttempted}`, 20, (y += 10));
    doc.text(`Total Marks            : ${record.quiz.maxMarks}`, 20, (y += 10));
    doc.text(`Marks Obtained         : ${record.obtainedMarks}`, 20, (y += 10));
    doc.text(`Performance            : ${percentage}%`, 20, (y += 10));
    doc.text(`Status                 : ${status}`, 20, (y += 10));

    // Footer Message
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(11);
    doc.text('Thank you for participating in the quiz!', 20, (y += 20));

    // Save the file
    const filename = `${record.quiz.title.replace(/ /g, '_')}_Result.pdf`;
    doc.save(filename);
  }

}