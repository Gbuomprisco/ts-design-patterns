import {
    WorkStationFactory,
    FactoryType,
    IntelCPU,
    AmdCPU,
    NvidiaGPU,
    AmdGPU
} from './abstract-factory';

describe('Abstract Factory', () => {
    it('creates an Intel Workstation', () => {
        const intel = WorkStationFactory.getFactory(FactoryType.INTEL);

        expect(intel.createCPU() instanceof IntelCPU).toBe(true);
        expect(intel.createGPU() instanceof NvidiaGPU).toBe(true);
    });

    it('creates an AMD Workstation', () => {
        const amd = WorkStationFactory.getFactory(FactoryType.AMD);

        expect(amd.createCPU() instanceof AmdCPU).toBe(true);
        expect(amd.createGPU() instanceof AmdGPU).toBe(true);
    });

    it('throws an error', () => {
        const factory = () => WorkStationFactory.getFactory('' as any);

        expect(factory).toThrow();
    });
});
