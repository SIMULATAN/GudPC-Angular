import { Injectable } from '@angular/core';
import { Item } from "./shop-model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: Item[] = [
    {
      id: 1,
      name: 'Item 1',
      price: 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Item 2',
      price: 200,
      description: 'The bee movie script. According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don\'t care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let\'s shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? Barry? Adam? Can you believe this is happening? I can\'t. I\'ll pick you up. Looking sharp! Use the stairs. Your father paid good money for those. Sorry. I\'m excited. Here\'s the graduate. We\'re very proud of you, son. A perfect report card, all B\'s. Very proud. Ma! I got a thing going here. You got lint on your fuzz. Ow! That\'s me! Wave to us! We\'ll be in row 118,000. Bye! Barry, I told you, stop flying in the house! Hey, Adam. Hey, Barry. Is that fuzz gel? A little. Special day, graduation. Never thought I\'d make it. Three days grade school, three days high school. Those were awkward. Three days college. I\'m glad I took a day and hitchhiked around the hive. You did come back different. Hi, Barry. Artie, growing a mustache? Looks good. Hear about Frankie? Yeah. You going to the funeral? No, I\'m not going. Everybody knows, sting someone, you die. Don\'t waste it on a squirrel. Such a hothead. I guess he could have just gotten out of the way. I love this incorporating an amusement park into our day. That\'s why we don\'t need vacations',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Item 3',
      price: 300,
      description: ' I\'d just like to interject for a moment. What you\'re refering to as Linux, is in fact, GNU/Linux, or as I\'ve recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  getItems() {
    return this.items;
  }

  getItem(id: number) {
    return this.items.find(item => item.id === id);
  }
}
