import { CapturedTime } from './captured-time.interface';

export interface ReportDay {
    day: Date;
    capturedTimes: CapturedTime[];
}