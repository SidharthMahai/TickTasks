import { Time } from "@angular/common";

class Task {
    Task_Name: string;
    Task_Description: string;
    Task_Priority: number;
    Task_Created_DateTime: Date;
    Task_Completion_DateTime: Date;
    Task_Started: boolean;
    Task_Completed: boolean;
    Task_Countdown_Wanted: boolean;
    Task_Countdown_Time: Time;
}