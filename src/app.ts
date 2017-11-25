import * as $ from 'jquery';
import * as Materialize from 'materialize-css';

export class App {
    public message: string = 'Welcome, worshipper!';
    public title: string = 'Jean Paul Altar';

    public openTapTarget(selector: string): void {
        $(selector).tapTarget('open');
    }

    public praiseCatEmperor(): void {
        Materialize.toast('You\'ve received massive glory!', 3000, 'orange');
    }
}