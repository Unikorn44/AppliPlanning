import { Time } from "@angular/common";

export interface EventCollab {
    id: number;
    title: string;
    date_event: Date;
    start_time: Time;
    end_time: Time;
    description: string;
}