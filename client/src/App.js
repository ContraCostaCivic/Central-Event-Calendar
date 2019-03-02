import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import FullCalendar from 'fullcalendar-reactwrapper';
import '../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import { isEmpty } from 'lodash';
const URL = "https://ccccalendar.appspot.com/api/events";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    events: [
      {
         "title": "TEDxBerkeley 2019: Infle(x)ion",
         "start": "2019-03-09",
         "end": "2019-03-09",
         "address": "101 Zellerbach Hall, Berkeley CA",
         "description": "TEDxBerkeley 2019: Infle(X)ion\n\n\nInflection, or a point of change, indicates a state of flux and an imminent shift to come. TEDxBerkeley 2019 centers around the rapid changes that characterize the political, social, and technological realms of our contemporary society. As citizens of the most unique period of human history, we are surrounded by transformations across both physical and ideological landscapes. While recent advances have the potential to improve quality of life at an unprecedented ",
         "url": "https://www.eventbrite.com/e/tedxberkeley-2019-inflexion-tickets-48714543511"
      },
      {
         "title": " Pep Talks with That's Inappropriate, Mr. D, Gerry Brooks, Kalen Allen on the Teal Carpet",
         "start": "2019-03-16",
         "end": "2019-03-16",
         "address": "9870 Broadmoor Dr, San Ramon CA",
         "description": "Get ready to laugh!\u00a0\nThe Wright Stuff Chics is presenting That's Inappropiate, Mr. D., and Gerry Brooks for a Pep Talk . The Pep Talk series will be a night of comedy and fun. Kalen Allen from the Ellen Show will be our host on the Teal Carpet.\nThe VIP Package allows you to come to a special meet and greet, \u00a0For the Meet and Greet, you will receive a special Pep Talk Button.\u00a0 You will be able to meet all four of the celebrites, and will be allowed to take a photo with each of them. \u00a0Special up f",
         "url": "https://www.eventbrite.com/e/pep-talks-with-thats-inappropriate-mr-d-gerry-brooks-kalen-allen-on-the-teal-carpet-tickets-53193145129"
      },
      {
         "title": "Women in Tech: The Future of AI",
         "start": "2019-03-08",
         "end": "2019-03-08",
         "address": "Bechtel Engineering Center, Berkeley CA",
         "description": "Women in Tech: The Future of AI\nFriday, March 8, 201911:00am - 5:00pmSibley Auditorium, Bechtel Engineering\u00a0 UC Berkeley\nSince Ada Lovelace contributed foundational work in computation nearly 200 years ago, women have contributed to the advancement of computing and helped pave the way for today\u2019s artificial intelligence (AI).\u00a0Today, women are pushing the frontiers of AI in applications from robotics to recruiting, from startups to venture capital. Equally far-reaching are women\u2019s contributions t",
         "url": "https://www.eventbrite.com/e/women-in-tech-the-future-of-ai-tickets-48222303207"
      },
      {
         "title": "An Evening with Gretchen Rubin",
         "start": "2019-03-12",
         "end": "2019-03-12",
         "address": "989 San Ramon Valley Boulevard, Danville CA",
         "description": "For most of us, outer order contributes to inner calm. And for most of us, a rigid, one-size-fits-all solution doesn\u2019t work.\u00a0 The fact is, when we tailor our approach to suit our own particular challenges and habits, we\u2019re then able to create the order that will make our lives happier, healthier, more productive, and more creative.\u00a0 Gretchen Rubin has found that getting control of our\u00a0stuff\u00a0makes us feel more in control of our lives. By getting rid of things we don\u2019t use, don\u2019t need, or don\u2019t lo",
         "url": "https://www.eventbrite.com/e/an-evening-with-gretchen-rubin-tickets-53067383974"
      },
      {
         "title": "Ayers 18th Annual Dinner, Dance and Fundraising Auction  ",
         "start": "2019-03-22",
         "end": "2019-03-22",
         "address": "45 John Glenn Drive, Concord CA",
         "description": "Please join us for the 18th Annual Ayers Auction.\u00a0 There will be dinner, dancing, games, cash prizes, and amazing silent and live auction items.\u00a0 This is an event you do not want to miss!\u00a0 Please email ayersauction@gmail.com with questions.\n\n\n\n\nMarch 22, 2019\n\n6:00pm-11:30pm\nSilent Auction 6:00-7:30pm\nDinner 8:00pm\n\n\nCash Bar Available\n\n\nAuction items may be purchased with Cash, Check, Visa, MasterCard or American Express\n\n\nOther items, such as raffle tickets are CASH ONLY.\n\n\n\n\n\nIndividual Ticke",
         "url": "https://www.eventbrite.com/e/ayers-18th-annual-dinner-dance-and-fundraising-auction-tickets-55343841921"
      },
      {
         "title": "Rainbow Community Center's 13th Annual Crab Feed",
         "start": "2019-03-02",
         "end": "2019-03-02",
         "address": "233 Gregory Lane , Pleasant Hill CA",
         "description": "Join us for the Rainbow Community Center\u2019s 13th Annual Crab Feed!\r\nTo start us off, our Crab Feed will feature a champagne and sushi reception sponsored by Kobe Japan, followed by an all-you-can-eat crab, salad, pasta, and dessert spread by WiseGirl Ristorante Italiano & Cocktails. This fabulous spread will be accompanied with entertainment that includes dancing, raffles, a silent auction, and the stylings of local comedian, actor, and songwriter, Karen Ripley.\u00a0\r\nDon't miss out! Get your tickets",
         "url": "https://www.eventbrite.com/e/rainbow-community-centers-13th-annual-crab-feed-tickets-54441889156"
      },
      {
         "title": "Walnut Creek - East Bay Area Career Fair & Job Fair * Wed. March 13, 2019",
         "start": "2019-03-13",
         "end": "2019-03-13",
         "address": "2355 North Main St, Walnut Creek CA",
         "description": "The Walnut Creek / East Bay Area Career Fair\nWednesday - March 13, 2019\u00a0-\u00a011:30 AM to 1:30 PM\n\u00a0\nMeet, sit down and interview with Fortune 500 employers at Walnut Creek's Career Fair. Professional Dress (suit & tie or business suit) Bring plenty of resumes. \n\u00a0\nIndustries represented at the San Francisco East Bay - Walnut Creek Career Fairs:\u00a0\u00a0 Sales, Inside Sales, Outside Sales, Retail, Human Resources, HR, Financial, B2B Sales, Technology Support, Human Resources, Customer Service, Healthcare Sal",
         "url": "https://www.eventbrite.com/e/walnut-creek-east-bay-area-career-fair-job-fair-wed-march-13-2019-tickets-17357004267"
      },
      {
         "title": "ACSA Region 6 Awards Dinner ",
         "start": "2019-03-14",
         "end": "2019-03-14",
         "address": "4800 Golf Course Road, Antioch CA",
         "description": "All dinners include: Salad, vegetables, starch, entr\u00e9e & dessert.\nSelect Entr\u00e9e: Fish, Chicken or Vegetarian\nNo host bar available for cocktails\nSchedule of Events\n\n5:30 \u2013 Cocktails\n6:00 \u2013 Dinner\n6:30 \u2013 Awards\nCelebrating the Exemplary Educational Leaders of\u00a0East Contra Costa County!\nSecondary Principal\u00a0\u00a0\u00a0\u00a0 \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Kelly Manke (LUHSD)\nMiddle Grades Principal \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Angela Stevens Stevenson (Pitt",
         "url": "https://www.eventbrite.com/e/acsa-region-6-awards-dinner-tickets-54934444402"
      },
      {
         "title": "Good News with Derek Carr",
         "start": "2019-03-24",
         "end": "2019-03-24",
         "address": "20801 San Ramon Valley Boulevard, San Ramon CA",
         "description": "Derek Carr is part of the ministry team at Brave Church and on March 24th he's speaking at our first Under the Tent Event titled: GOOD NEWS with Derek Carr. Everyone is welcome to join us for some good news and a powerful worship experience.\nWe're also having a KIDS TAKEOVER for kids pre-k to elementary in the Brave auditroium with\u00a0a dance party, sports games and goody bags!",
         "url": "https://www.eventbrite.com/e/good-news-with-derek-carr-tickets-55991800984"
      },
      {
         "title": "13th Annual Knights of Columbus #5811 St. Patrick's Day Celebration",
         "start": "2019-03-16",
         "end": "2019-03-16",
         "address": "199 Brandon Road, Pleasant Hill CA",
         "description": "Christ the King St. Patrick\u2019s Day Celebration\nHosted by the Knights of Columbus #5811\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 www.KofCPH.org\n\u201cBe Sure to Wear your Green\u201d\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\n\nSaturday, March 16th 2019 St. Patrick's Day\n5:30pm in the CTK Gym, Dinner served\u00a0at 7pm\n\nThree-Course meal: Homemade Soup and Irish Bread, Corned Beef & Cabbage\u00a0with fixings\u00a0& Homemade Bread Pudding with Whiskey Sauce\nFull Irish Bar with Guinness, Harp & Guinness Blonde\nIrish Dancers and Live Irish Music\n\u00a0\nAdult Tickets $35 each\nChild Tick",
         "url": "https://www.eventbrite.com/e/13th-annual-knights-of-columbus-5811-st-patricks-day-celebration-tickets-55834583743"
      },
      {
         "title": "SIYLI Presents: Search Inside Yourself 2-Day Program in Berkeley",
         "start": "2019-03-04",
         "end": "2019-03-05",
         "address": "2299 Piedmont Avenue, Berkeley CA",
         "description": "Please join the Search Inside Yourself Leadership Institute (SIYLI) in San Francisco for two days of personal and professional development focused on building healthy mental habits for sustained high performance and wellbeing. Developed at Google and based on the latest in neuroscience research, the Search Inside Yourself (SIY) program teaches attention and mindfulness training that build the core emotional intelligence skills needed for effective leadership.\r\nWe help professionals at all levels",
         "url": "https://www.eventbrite.com/e/siyli-presents-search-inside-yourself-2-day-program-in-berkeley-tickets-52033250854"
      },
      {
         "title": "Fatherhood Summit 2019 - The Power of Fatherhood",
         "start": "2019-03-16",
         "end": "2019-03-16",
         "address": "12500 Campus Drive, Oakland CA",
         "description": "ABOUT THE 2019 SUMMIT\nPresented by the Alameda County Fathers Corps, on Saturday, March 16, 2019, the inaugural Fatherhood Summit aims to attract 1000 fathers, father-figures and mentors to Merritt College to recognize, honor, and celebrate the critical role fathers and father-figures play in their families and communities.\nThe groundbreaking Summit will showcase a wide variety of engaging workshops sessions discussing Father's Rights and Responsibilities Men's Health and Wellness, Education Is ",
         "url": "https://www.eventbrite.com/e/fatherhood-summit-2019-the-power-of-fatherhood-tickets-46725058909"
      },
      {
         "title": "2nd Annual Black Boys Need Black MENtors Luncheon",
         "start": "2019-03-23",
         "end": "2019-03-23",
         "address": "2845 64th Avenue, Oakland CA",
         "description": "OK Program of Oakland and 100 Black Men of the Bay Area are at it again, announcing the 2nd Annual Black Boys Need Black MENtors Luncheon!!!",
         "url": "https://www.eventbrite.com/e/2nd-annual-black-boys-need-black-mentors-luncheon-registration-55921245952"
      },
      {
         "title": "2019 Crab Feed Fundraiser",
         "start": "2019-03-23",
         "end": "2019-03-23",
         "address": "1201 West 10th Street, Antioch CA",
         "description": "SILENT AUCTION, RAFFLE, MUSIC, DANCING, AND\u00a0FUN, benefitting\u00a0Blue Devils B and Blue Devils C.\n\n5pm: Doors open\n6pm: All-You-Can-Eat Dinner (Salad; Garlic Bread; Pasta; Marinated Crab; Wine with dinner; Dessert)\n8pm: Dance\n\nFor more info, please contact Teresa Saunders at teresa@bluedevils.org or 925.689.2918 x3005. This event will sell out.\n\n\n\nIf you need a local hotel, the\u00a0Walnut Creek Marriott is offering a special BDPA rate. Read more...",
         "url": "https://www.eventbrite.com/e/2019-crab-feed-fundraiser-tickets-54606108340"
      },
      {
         "title": "Retro Junkie presents AXL/DC (Tribute to AC/DC with AXL ROSE) + DJ BB HAYES",
         "start": "2019-03-16",
         "end": "2019-03-17",
         "address": "2112 North Main Street, Walnut Creek CA",
         "description": "RETRO JUNKIE \u00a0\nSaturday March 16th 2019\n9pm-11pm: Performing Live is AXLDC (A Tribute to AC/DC with AXL ROSE)\u00a0\n11pm-2am: Resident DJ BB HAYES pinning 80's, 90's, early 00's throwback set\n4,600 SQ FT feat. Game Room with Pool Tables, Pinball, Arcade Games\nTo reserve a VIP Booth area or for VIP questions click here http://www.retrojunkiebar.com/book-vip-table/\n21+ | Full Bar | 2112 N. Main Street Downtown Walnut Creek CA 94596\u00a0\nSign up you and your friends on the Guest List here to receive email c",
         "url": "https://www.eventbrite.com/e/retro-junkie-presents-axldc-tribute-to-acdc-with-axl-rose-dj-bb-hayes-tickets-54705574847"
      },
      {
         "title": "This Charming Band (Morrissey/The Smiths Tribute) + resident DJ David Q",
         "start": "2019-03-09",
         "end": "2019-03-10",
         "address": "2112 North Main Street, Walnut Creek CA",
         "description": "RETRO JUNKIE \u00a0\nSaturday March 9th 2019\n9pm-11pm: Performing Live is THIS CHARMING BAND (Tribute to MORRISSEY/THE SMITHS)\n11pm-2am: Resident DJ David Q pinning 80's, 90's, early 00's throwback set\n4,600 SQ FT feat. Game Room with Pool Tables, Pinball, Arcade Games\nTo reserve a VIP Booth area or for VIP questions click here http://www.retrojunkiebar.com/book-vip-table/\n21+ | Full Bar | 2112 N. Main Street Downtown Walnut Creek CA 94596\u00a0\nSign up you and your friends on the Guest List here to receiv",
         "url": "https://www.eventbrite.com/e/this-charming-band-morrisseythe-smiths-tribute-resident-dj-david-q-tickets-54707495592"
      },
      {
         "title": "Cherry Pop! 90's Dance Party w/ Marigold + DJ Billy Vidal ",
         "start": "2019-03-15",
         "end": "2019-03-16",
         "address": "2112 North Main Street, Walnut Creek CA",
         "description": "RETRO JUNKIE Cherry Pop Fridays 90's Dance Party\u00a0\nFriday March 15th 2019 Cherry Pop! 90's Dance Party\n9pm-11pm: Performing Live is MARIGOLD (90's Alt Rock Covers)\n11pm-2am: Resident and SF Legend DJ Billy Vidal spinning 80's, 90's, early 00's\u00a0\n4,600 SQ FT feat. Game Room with Pool Tables, Pinball, Arcade Games\nTo reserve a VIP Booth area or for VIP questions click here http://www.retrojunkiebar.com/book-vip-table/\n21+ | Full Bar | 2112 N. Main Street Downtown Walnut Creek CA 94596\u00a0\nSign up you a",
         "url": "https://www.eventbrite.com/e/cherry-pop-90s-dance-party-w-marigold-dj-billy-vidal-tickets-54585328186"
      },
      {
         "title": "15th Annual Young Children's Issues Forum 2019",
         "start": "2019-03-16",
         "end": "2019-03-16",
         "address": "320 Civic Drive, Pleasant Hill California",
         "description": "15th Annual Young Children's Issues Forum 2019\nSaturday \u00a0| \u00a0March 16, 2019 \u00a0| \u00a09:00am to 12:30pm\nRegistration, resource fair, and continental breakfast begin at 8:30am\n\nJoin state legislators, local elected officials, business leaders, early childhood teachers, families, and community advocates in a dialogue about proposed statewide initiatives, public policy trends and their impact on investments in early education and workforce pathways for teachers.\nCertificates showing 3.5 hours of professio",
         "url": "https://www.eventbrite.com/e/15th-annual-young-childrens-issues-forum-2019-registration-53697709294"
      },
      {
         "title": "Retro Junkie presents The Big Jangle (Tom Petty Tribute) + DJ Billy Vidal ",
         "start": "2019-03-08",
         "end": "2019-03-09",
         "address": "2112 North Main Street, Walnut Creek CA",
         "description": "RETRO JUNKIE presents\u00a0\nFriday March 8th\u00a0 2019\n9pm-11pm: Performing Live is THE BIG JANGLE (a Tribute to TOM PETTY)\n11pm-2am: Resident and SF Legend DJ Billy Vidal spinning 80's, 90's, early 00's throwback set\n4,600 SQ FT feat. Game Room with Pool Tables, Pinball, Arcade Games\nTo reserve a VIP Booth area or for VIP questions click here http://www.retrojunkiebar.com/book-vip-table/\n21+ | Full Bar | 2112 N. Main Street Downtown Walnut Creek CA 94596\u00a0\nSign up you and your friends on the Guest List h",
         "url": "https://www.eventbrite.com/e/retro-junkie-presents-the-big-jangle-tom-petty-tribute-dj-billy-vidal-tickets-54585732395"
      },
      {
         "title": "Retro Junkie presents Chick Jagger & Ann Halen + resident DJ Darker Daze",
         "start": "2019-03-02",
         "end": "2019-03-03",
         "address": "2112 North Main Street, Walnut Creek CA",
         "description": "RETRO JUNKIE \u00a0\nSaturday March 2nd 2019\n9pm-11pm: Performing Live is Chick Jagger (Tribute to the Rolling Stones)\u00a0+ Ann Halen (Tribute to Van Halen)\n11pm-2am: Resident Superstar DJ DARKER DAZE spinning 80's, 90's, early 00's throwback set\n4,600 SQ FT feat. Game Room with Pool Tables, Pinball, Arcade Games\nTo reserve a VIP Booth area or for VIP questions click here http://www.retrojunkiebar.com/book-vip-table/\n21+ | Full Bar | 2112 N. Main Street Downtown Walnut Creek CA 94596\u00a0\nSign up you and you",
         "url": "https://www.eventbrite.com/e/retro-junkie-presents-chick-jagger-ann-halen-resident-dj-darker-daze-tickets-54704048281"
      }
   ]	
    }
  }
  // componentDidMount() {
  //   if (isEmpty(this.state.event)) {
  //     this.fetchData();
  //     console.log('fetching data');
  //   }
  // }
  // fetchData() {
  //   axios.get(URL)
  //     .then((res) => {
  //       this.setState({ events: res.data.map((event) => {
  //         event.start = event.start.format('L')
  //       })})

  //     });
  // }
  render() {
    return (
      <div id="example-component">
        <FullCalendar
             id = "your-custom-ID"
         header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        }}
         defaultDate={'2019-03-02'}
        navLinks= {true} // can click day/week names to navigate views
        editable= {true}
        eventLimit= {true} // allow "more" link when too many events
        events = {this.state.events}	
    />
      </div>
    );
  }
}

export default App;
