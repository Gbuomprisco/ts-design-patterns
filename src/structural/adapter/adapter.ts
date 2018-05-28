export abstract class AbstractClientButton {
    public abstract label: string;
    public abstract onClick(): void;
}

export abstract class AbstractThirdPartyButton {
    public abstract text: string;
    public abstract click(): void;
}

export class ClientButton implements AbstractClientButton {
    constructor(public label: string, public onClick: () => void) {}
}

export class ThirdPartyButton implements AbstractThirdPartyButton {
    constructor(public text: string, public click: () => void) {}
}

export class ButtonAdapter {
    constructor(private button: AbstractThirdPartyButton) {}

    public getButton() {
        return new ClientButton(this.button.text, this.button.click);
    }
}

export class FormClass {
    constructor(private button: AbstractClientButton) {}
}

export class AdapterClient {
    constructor() {
        const callback = () => console.log('Ha, clicked!');
        const button = new ButtonAdapter(
            new ThirdPartyButton('Click me', callback)
        ).getButton();
        const form = new FormClass(button);
    }
}
