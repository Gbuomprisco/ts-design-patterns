/*
* ENTITIES
*/

export enum FactoryType {
    AMD = 'AMD',
    INTEL = 'Intel'
}

/*
* PRODUCTS: CPU and GPU
*/
export abstract class CPU {
    protected abstract name: string;
}

export abstract class GPU {
    protected abstract name: string;
}

/*
* CPU PRODUCTS IMPLEMENTATIONS
*/
export class IntelCPU extends CPU {
    protected name = 'Intel';
}

export class AmdCPU extends CPU {
    protected name = 'AMD';
}

/*
* GPU PRODUCTS IMPLEMENTATIONS
*/
export class NvidiaGPU extends GPU {
    protected name = 'Intel';
}

export class AmdGPU extends GPU {
    protected name = 'AMD';
}

/*
* ABSTRACT FACTORY
*/
export abstract class AbstractFactory {
    public abstract createCPU(): CPU;
    public abstract createGPU(): GPU;
}

/*
* AMD FACTORY IMPLEMENTATION
*/
export class AmdFactory extends AbstractFactory {
    public createCPU() {
        return new AmdCPU();
    }

    public createGPU() {
        return new AmdGPU();
    }
}

/*
* Intel FACTORY IMPLEMENTATION
*/
export class IntelFactory extends AbstractFactory {
    public createCPU() {
        return new IntelCPU();
    }

    public createGPU() {
        return new NvidiaGPU();
    }
}

/*
** WorkStationFactory: A Singleton that creates a factory based on a type
*/
export abstract class WorkStationFactory extends AbstractFactory {
    public static getFactory(type: FactoryType) {
        const intelWS = new IntelFactory();
        const amdWS = new AmdFactory();

        switch (type) {
            case FactoryType.INTEL:
                return intelWS;
            case FactoryType.AMD:
                return amdWS;
            default:
                throw new Error();
        }
    }

    public abstract createCPU(): CPU;
    public abstract createGPU(): GPU;
}

// EXAMPLE CLIENT
export class AbstractFactoryClient {
    constructor() {
        const factory = WorkStationFactory.getFactory(FactoryType.INTEL);
        const cpu = factory.createCPU();
    }
}
