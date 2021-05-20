import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage  {
  
  title: string = 'Help';
  longSearch: boolean = false;
  showBackButton: boolean = false;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////

  public faqs : Array<{ name: string, description: string, image: string }> = [
    { 
       name : 'How can I cancel an order?', 
       description : 'Please call or send a mail to help@afrimartone.com. Note, if your order has already been shipped, simply reject the item upon delivery.',
       image: ''
    },
    { 
       name : 'How can I track my order?', 
       description : 'Please enter your order number in our tracking page to know the status of your order. If you do not know your order number, check your order confirmation mail or you can contact us.',
       image: ''
    },
    { 
       name : 'How can I return an order?', 
       description : 'You can call us via 07081667175 to make a return request. Please take the items you wish to return to a pick-up station near you within 3 business days. Kindly find pickup station locations here',
       image: ''
    },
    { 
       name : 'How long will it take to return an item and get my refund?', 
       description : 'Within 1 – 3 business days',
       image: ''
    },
    { 
       name : 'Once I initiate a return, what happens next?', 
       description : 'The item would be inspected to confirm return reason after which a refund, replacement or re-delivery will be processed.',
       image: ''
    },
    { 
       name : 'Can I return my item after the stated returns timeline?', 
       description : 'You will not be able to return other eligible items after 7 days but if it is faulty, it may be covered under warranty. Can I Replace or Exchange an item rather than a refund? Yes you can.',
       image: ''
    },
    { 
       name : 'Where are service centers?', 
       description : 'Service centers are locations your devices can be fixed. You will be referred to one upon request',
       image: ''
    }
  ];
  /////////////////////////////
  constructor() { }
  public captureName(event: any) : void
  {
     console.log(`Captured name by event value: ${event}`);
  }

}
