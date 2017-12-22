import {CapturedTime} from "./captured-time.interface";

export interface Project {
    id?: string;
    name: string;
    desc: string;
    color: string;
    active: boolean;
    capturedTime: CapturedTime[];
}