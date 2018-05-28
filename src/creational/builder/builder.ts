/* Product */
export class HTMLPage {
    private page?: string;
    private body?: string;
    private title?: string;

    public setBody(body: string) {
        this.body = body;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public format(): void {
        this.page = '<html>';
        this.page += '<head>';
        this.page += `<title>${this.title}</title>`;
        this.page += '</head>';
        this.page += `<body>${this.body}</body>`;
        this.page += '</html>';
    }
}

/* Abstract definition of the builder */
export abstract class AbstractPageBuilder {
    abstract getPage(): HTMLPage;
}

/* Builder */
export class PageBuilder implements AbstractPageBuilder {
    constructor(private page: HTMLPage) {}

    public setBody(body: string) {
        this.page.setBody(body);
    }

    public setTitle(title: string) {
        this.page.setTitle(title);
    }

    public formatPage() {
        this.page.format();
    }

    public getPage(): HTMLPage {
        return this.page;
    }
}

/* Director */
export class PageDirector {
    constructor(private builder: PageBuilder) {}

    public buildPage(): void {
        this.builder.setTitle("Builder");
        this.builder.setBody("<b>Ciao</b>");
        this.builder.formatPage();
    }

    public getPage(): HTMLPage {
        return this.builder.getPage();
    }
}

export class PageBuilderFactory {
    private constructor() {}

    public static getPage(): HTMLPage {
        const builder = new PageBuilder(new HTMLPage());
        const director = new PageDirector(builder);
        return director.getPage();
    }
}
