import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  theissue="When choosing to develop or use new, untested ingredients in their cosmetic products, companies conduct tests on animals to assess the safety of these new ingredients. However, animal tests have scientific limitations because  animals often respond differently than humans when exposed to the same chemicals, leading to inaccurate estimates of real-world hazards to people. Cosmetic testing on animals has been a practice for decades now and to this day, there are still animals who suffer in the testing of shampoo, mascara, and other cosmetic products. Any ingredient used in a cosmetic also falls under this definition and products normally labeled as cosmetics are classified as drugs when a medical claim is made. Often times we always forget that the items we use on a daily basis might have been tested on animals. Most frequently used are mice, rats, rabbits, and guinea pigs which can cause irritations to severe damages or even worse–death. Although humans can benefit from successful animal research, the pain and death of animals are not worth the possible human benefits. ";
  constructor() { }

  ngOnInit(): void {
  }

}
