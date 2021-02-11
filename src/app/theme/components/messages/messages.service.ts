import {Injectable} from '@angular/core'

@Injectable()
export class MessagesService {

    private messages = [
        {
            name: 'Stonefield',
            text: 'Concept phase is done for this project and entering Engineering phase',
            time: '1 min ago'
        },
        {
            name: 'Stonefactory',
            text: 'Project moved to Pilot stage',
            time: '2 hrs ago'
        },
        {
            name: 'Starbucks',
            text: 'Team analysis is done for this project',
            time: '10 hrs ago'
        },
        {
            name: 'Safeway',
            text: 'Target date is crossed for this project',
            time: '1 day ago'
        }
    ];   

    private files = [        
        {
            name: 'Safeway',
            text:'Stonefactory project is available for tracking in logistics screen',
            size: '',
            value: '47',
            color: 'primary',
            time: '1 day ago'
        },
        {
            name: 'Starbucks',
            text: 'Starbucks is now available for tracking in logistics screen',
            size: '~14.6 MB',
            value: '33',
            color: 'accent',
            time: '1 day ago'
        },
        {
            name: 'Amazon',
            text: 'Amazon project is marked as completed in tracking section',
            size: '~558 KB',
            value: '60',
            color: 'warn',
            time: '1 day ago'
        },
        {
            name: 'IBS',
            text: 'IBS project tracking status is updated',
            size: '~57 KB',
            value: '80',
            color: 'primary',
            time: '1 day ago'
        },
       
    ];

    private meetings = [
        {
            day: '09',
            month: 'Dec',
            title: '03S0103',
            text: 'Task is pending for approval from last 3 days',
            color: 'danger'
        },       
        {
            day: '15',
            month: 'Dec',
            title: '02S0302',
            text: 'Task is pending for approval from last 4 days',
            color: 'primary'
        },
        {
            day: '12',
            month: 'Dec',
            title: '03S0112',
            text: 'Task is pending for approval from last 2 days',
            color: 'info'
        },
        {
            day: '14',
            month: 'Dec',
            title: '04S0113',
            text: 'Task is pending for approval from last 5 days',
            color: 'warning'
        },
        // {
        //     day: '29',
        //     month: 'July',
        //     title: 'Birthday of Julia',
        //     text: 'Nam porttitor justo nec elit efficitur vestibulum.',
        //     color:'success'
        // }
    ];

    public getMessages():Array<Object> {
        return this.messages;
    }

    public getFiles():Array<Object> {
        return this.files;
    }

    public getMeetings():Array<Object> {
        return this.meetings;
    }   

}