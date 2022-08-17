import { Event } from "../atomes/event";

//création ArrayList EVENTS composée d''éléments type Event
export const EVENTS: Event[] = 

// !!! FORMAT DATE EST EN MODE US !!!
// !!! PAS DE 0 DANS LES HEURES !!!
[
    { title: 'Test 1 !', date_event: new Date('2022-09-17'), start_time: {hours: 9, minutes: 0}, end_time: {hours: 17, minutes: 0}, description: 'Test description'},
    { title: 'Test 2 !', date_event: new Date('2022-09-18'), start_time: {hours: 8, minutes: 10}, end_time: {hours: 9, minutes: 15}, description: 'Test description 2'},
    { title: 'Test 3 !', date_event: new Date('2022-09-19'), start_time: {hours: 10, minutes: 5}, end_time: {hours: 11, minutes: 30}, description: 'Test description 3'}
];
