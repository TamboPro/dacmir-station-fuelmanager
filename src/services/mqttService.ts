// services/mqttService.ts
import mqtt, { MqttClient, IClientOptions } from 'mqtt'

class MQTTService {
    private static instance: MQTTService
    private client: MqttClient | null = null
    private isConnecting = false

    private constructor() { }

    static getInstance(): MQTTService {
        if (!MQTTService.instance) {
            MQTTService.instance = new MQTTService()
        }
        return MQTTService.instance
    }

    getClient(): MqttClient | null {
        return this.client
    }

    setClient(client: MqttClient | null): void {
        this.client = client
    }

    isClientConnected(): boolean {
        return this.client ? this.client.connected : false
    }

    isClientConnecting(): boolean {
        return this.isConnecting
    }

    setConnecting(value: boolean): void {
        this.isConnecting = value
    }
}

export default MQTTService.getInstance()
