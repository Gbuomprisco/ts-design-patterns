import { ImageFactory, ImageType, Image, GifReader, JpegReader } from './factory';

describe('factory', () => {
    it('creates a new GIF image', () => {
        const image = new Image(ImageType.GIF, '');
        const reader = ImageFactory.getImage(image);

        expect(reader instanceof GifReader).toBe(true);
     });

     it('creates a new JPEG image', () => {
        const image = new Image(ImageType.JPEG, '');
        const reader = ImageFactory.getImage(image);

        expect(reader instanceof JpegReader).toBe(true);
     });

     it('throws', () => {
        const image = new Image('JPG' as ImageType, '');

        expect(() => ImageFactory.getImage(image)).toThrow('Unsupported format');
     });
});
