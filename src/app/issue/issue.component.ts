import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  theissue="Cosmetic testing on animals has been a practice for decades now and to this day, there are still animals who suffer in the testing of shampoo, mascara, and other cosmetic products.  Often times we always forget that the items we use on a daily basis might have been tested on animals. Most frequently used are mice, rats, rabbits, and guinea pigs which can cause irritations to severe damages or even worse–death. Although humans can benefit from successful animal research, the pain and death of animals are not worth the possible human benefits. ";
  constructor() { }

  ngOnInit(): void {
  }

}
