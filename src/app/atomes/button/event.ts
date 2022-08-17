import { Time } from "@angular/common";

//création élément event
export interface Event {

    title: string;
    date_event: Date;
    start_time: Time;
    end_time: Time;
    description: string;

}