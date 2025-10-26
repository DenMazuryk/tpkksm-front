import {BaseSensor} from "@/models/sensors/base";

export interface TTemperatureSensor extends BaseSensor {
    unit: '°C' | '°F';
}
