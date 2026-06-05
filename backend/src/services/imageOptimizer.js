import sharp from 'sharp';

/**
 * Optimize an image buffer into multiple target formats and sizes.
 * Returns an object mapping format names to Buffers.
 *
 * Options:
 * - widths: array of widths to generate (preserves aspect ratio)
 * - formats: array of output formats ('webp','avif','jpeg','png')
 * - quality: number 1-100 (applied to lossy formats)
 */
export async function optimizeBuffer(buffer, options = {}) {
  const {
    widths = [null], // null means original
    formats = ['webp'],
    quality = 80,
  } = options;

  if (!Buffer.isBuffer(buffer)) {
    throw new TypeError('buffer must be a Buffer');
  }

  const results = {};

  // Load metadata once for performance
  const metadata = await sharp(buffer).metadata();

  // Iterate widths and formats, but keep result keys small: e.g. webp_800
  await Promise.all(
    widths.flatMap((w) => formats.map(async (fmt) => {
      try {
        let pipeline = sharp(buffer);
        // Resize if width provided
        if (w && metadata.width && metadata.width > w) pipeline = pipeline.resize({ width: w });

        // Choose format-specific settings
        switch (fmt) {
          case 'webp':
            pipeline = pipeline.webp({ quality, effort: 6 });
            break;
          case 'avif':
            pipeline = pipeline.avif({ quality, effort: 4 });
            break;
          case 'jpeg':
            pipeline = pipeline.jpeg({ quality, mozjpeg: true });
            break;
          case 'png':
            pipeline = pipeline.png({ compressionLevel: 9, quality });
            break;
          default:
            throw new Error(`unsupported output format: ${fmt}`);
        }

        const out = await pipeline.toBuffer();
        const key = w ? `${fmt}_${w}` : `${fmt}`;
        results[key] = out;
      } catch (err) {
        // Attach context and rethrow
        const e = new Error(`optimizeBuffer failed for format=${fmt} width=${w}: ${err.message}`);
        e.cause = err;
        throw e;
      }
    }))
  );

  return results;
}

export async function optimizeFile(inputPath, options = {}) {
  if (typeof inputPath !== 'string') throw new TypeError('inputPath must be a string');
  const buffer = await import('fs').then((fs) => fs.promises.readFile(inputPath));
  return optimizeBuffer(buffer, options);
}

export default { optimizeBuffer, optimizeFile };
