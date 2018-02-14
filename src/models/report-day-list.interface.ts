import { CapturedTime } from './captured-time.interface';

export interface ReportDay {
    day: number;
    capturedTimes: CapturedTime[];
}