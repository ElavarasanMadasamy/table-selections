import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  MembersList = [
    {
      'Date': '14/05/2019',
      'Description': 'jewel shop',
      'Amount': '27000',
      'TotalRewards': '120pts'
      // 'designation': 'Associate'
      // 'salary': 40000,
      // 'selected': false
    },
    {
      'Date': '14/05/2019',
      'Description': 'Coffee shop',
      'Amount': '750',
      'TotalRewards': '20pts'
      // 'designation': 'Associate'
      // 'salary': 40000,
      // 'selected': false
    }
    // {
    //   'name': 'Prince',
    //   'college': 'MKCE',
    //   'company': 'Microsoft',
    //   'age': 26,
    //   'designation': 'Director',
    //   'salary': 800000,
    //   'selected': false
    // },
    // {
    //   'name': 'Gaddy',
    //   'college': 'MKCE',
    //   'company': 'TCS',
    //   'age': 26,
    //   'designation': 'BA',
    //   'salary': 60000,
    //   'selected': false
    // },
    // {
    //   'name': 'VR',
    //   'college': 'MKCE',
    //   'company': 'BNPP',
    //   'age': 26,
    //   'designation': 'Executive',
    //   'salary': 50000,
    //   'selected': false
    // },
    // {
    //   'name': 'Vani',
    //   'college': 'MKCE',
    //   'company': 'TCS',
    //   'age': 26,
    //   'designation': 'DBA',
    //   'salary': 70000,
    //   'selected': false
    // }
  ];

//   selectAllCheckbox = {
//     'select': false
//   };
//   flag = false;

//   selectAll() {
//     if (this.selectAllCheckbox.select) {
//       for (const entry of this.MembersList) {
//             entry.selected = true;
//       }
//     } else {
//       for (const entry of this.MembersList) {
//         entry.selected = false;
//       }
//     }
//   }

//   checkAll() {
//     this.flag = true;
//     for (const entry of this.MembersList) {
//       if (entry.selected) {
//        console.log('do nothing');
//       } else {
//         this.flag = false;
//       }
//     }
//     if (this.flag) {
//       this.selectAllCheckbox.select = true;
//     } else {
//       this.selectAllCheckbox.select = false;
//     }
//   }
}
