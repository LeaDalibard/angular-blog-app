import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-blog-app';

  posts = [
    {
      title: 'My first post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae rutrum ante. Donec imperdiet vel eros porttitor fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer porta luctus pretium.',
      loveIts: 0,
      created_at: 1610353593,
    },
    {
      title: 'My second post',
      content: 'Sed pharetra vulputate congue. Morbi sit amet iaculis nibh, vel porttitor enim. Proin imperdiet risus vel leo interdum, nec varius nisl rhoncus.',
      loveIts: 0,
      created_at: 1610353593,
    },
    {
      title: 'My other post',
      content: 'Curabitur convallis est non velit porttitor auctor. Etiam sodales sagittis gravida. Suspendisse elementum enim et eros rutrum vestibulum. Quisque luctus nunc massa, ac imperdiet sem posuere maximus.',
      loveIts: 0,
      created_at: 1610353593,
    }

  ];
}
