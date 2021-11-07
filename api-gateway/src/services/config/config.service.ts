import { Transport } from '@nestjs/microservices';

export class ConfigService {
    private readonly envConfig: { [key: string]: any } = null;

    constructor() {
        this.envConfig = {};
        this.envConfig.port = 3000;
        this.envConfig.ordersService = {
            options: {
                port: 3001,
                host: "localhost",
            },
            transport: Transport.TCP,
        };
    }

    get(key: string): any {
        return this.envConfig[key];
    }
}
