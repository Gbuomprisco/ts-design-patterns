/*
** ENTITES
*/
export enum ImageType {
    GIF = "GIF",
    JPEG = "JPEG"
}

export class Image {
    constructor(public type: ImageType, private content: string) { }
}

export class DecodedImage {
    constructor(private image: Image) { }
}

/*
** IMPLEMENTATION INTERFACE
*/
export interface ImageReader {
    getDecodedImage(): DecodedImage;
}

/*
** IMPLEMENTATION
*/
export class GifReader implements ImageReader {
    private image: DecodedImage;

    constructor(image: Image) {
        this.image = new DecodedImage(image);
    }

    public getDecodedImage(): DecodedImage {
        return this.image;
    }
}

/*
** IMPLEMENTATION
*/
export class JpegReader implements ImageReader {
    private image: DecodedImage;

    constructor(image: Image) {
        this.image = new DecodedImage(image);
    }

    public getDecodedImage(): DecodedImage {
        return this.image;
    }
}

/*
** FACTORY
*/
export class ImageFactory {
    public static getImage(image: Image) {
        if (image.type === ImageType.GIF) {
            return new GifReader(image);
        } else if (image.type === ImageType.JPEG) {
            return new JpegReader(image);
        }

        throw new Error('Unsupported format');
    }
}
