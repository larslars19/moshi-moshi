import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBowArrow, lucideHeart, lucideHeartOff, lucideMessagesSquare, lucideSquareArrowDown, lucideUserCircle } from '@ng-icons/lucide';
import users from "../../data/users.json"

@Component({
  selector: 'app-root',
  templateUrl: './search_couple.html',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideMessagesSquare, lucideBowArrow, lucideHeart, lucideUserCircle, lucideHeartOff, lucideSquareArrowDown })]
})
export class SearchCouplePage {
  protected readonly user=signal(users[0])

  

  tabs = [
    {icon: "lucideMessagesSquare", text: "Czaty", link: "/chats"},
    {icon: "lucideHeart", text: "Polubienia", link: "/likes"},
    {icon: "lucideBowArrow", text: "Chybił - Trafił", link: "/search"},
    {icon: "lucideUserCircle", text: "Profil", link: "/profile"},
  ]  
}
